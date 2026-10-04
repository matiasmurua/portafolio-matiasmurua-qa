import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chromePath = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const debugPort = 9333;
const outputDir = path.join(root, 'tmp', 'layout');
const profileDir = path.join(root, 'tmp', 'chrome-layout-profile');
const siteUrl = process.env.LAYOUT_URL || 'http://127.0.0.1:4173/';
const widths = [320, 375, 390, 768, 1024, 1440];

fs.mkdirSync(outputDir, { recursive: true });
const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--remote-debugging-port=' + debugPort,
  '--user-data-dir=' + profileDir,
  'about:blank',
], { stdio: 'ignore' });

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function getTarget() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const targets = await fetch('http://127.0.0.1:' + debugPort + '/json/list').then((response) => response.json());
      const target = targets.find((item) => item.type === 'page');
      if (target) return target;
    } catch {
      await wait(200);
    }
  }
  throw new Error('Chrome DevTools target was not available.');
}

const target = await getTarget();
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

let requestId = 0;
const pending = new Map();
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function send(method, params = {}) {
  requestId += 1;
  const id = requestId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

await send('Page.enable');
await send('Runtime.enable');

const results = [];
for (const width of widths) {
  const height = width <= 390 ? 844 : width <= 768 ? 1024 : 1000;
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width <= 768 });
  await send('Page.navigate', { url: siteUrl });
  await wait(700);
  const evaluation = await send('Runtime.evaluate', {
    expression: `(() => ({
      title: document.title,
      language: document.documentElement.lang,
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelector('h1')?.textContent?.trim(),
      role: document.querySelector('[data-cy=hero-title]')?.textContent?.trim(),
      projects: document.querySelectorAll('[data-cy=project-card]').length,
      services: document.querySelectorAll('.service-card').length,
      evidence: document.querySelectorAll('.evidence-card').length,
      primaryActions: document.querySelectorAll('.hero-actions .button').length,
      mobileMenuVisible: getComputedStyle(document.querySelector('.menu-button')).display !== 'none'
    }))()`,
    returnByValue: true,
  });
  const value = evaluation.result.value;
  value.width = width;
  value.noHorizontalOverflow = value.scrollWidth <= value.clientWidth + 1;
  results.push(value);
  const screenshot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  fs.writeFileSync(path.join(outputDir, 'portfolio-' + width + '.png'), Buffer.from(screenshot.data, 'base64'));
}

socket.close();
chrome.kill();

for (const result of results) console.log(JSON.stringify(result));
if (results.some((result) => !result.noHorizontalOverflow || result.projects !== 4 || result.services !== 4 || result.primaryActions !== 3)) process.exit(1);
