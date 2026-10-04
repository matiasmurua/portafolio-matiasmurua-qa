import { Icon } from './Icon';

export function ProcessFlow({ steps, language }) {
  return (
    <ol className={'process-flow'}>
      {steps.map((step) => (
        <li key={step.number}>
          <span className={'process-flow__number'}>{step.number}</span>
          <span className={'process-flow__icon'}><Icon name={step.icon} /></span>
          <h3>{step.title[language]}</h3>
          <p>{step.text[language]}</p>
        </li>
      ))}
    </ol>
  );
}
