import { Check } from 'lucide-react';
import { Icon } from './Icon';

export function ServiceCard({ service, language }) {
  return (
    <article className={'service-card'}>
      <span className={'service-card__icon'}><Icon name={service.icon} /></span>
      <h3>{service.title[language]}</h3>
      <p>{service.summary[language]}</p>
      <ul>{service.includes[language].map((item) => <li key={item}><Check aria-hidden={true} />{item}</li>)}</ul>
      {service.stack && <div className={'service-stack'}>{service.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>}
    </article>
  );
}
