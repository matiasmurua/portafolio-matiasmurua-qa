import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import { Icon } from './Icon';

export function CaseStudyCard({ study, language, labels }) {
  return (
    <article className={'case-card'} data-cy={'project-card'}>
      <header className={'case-card__header'}>
        <div><span className={'case-number'}>CASE / {study.number}</span><strong>{study.role[language]}</strong></div>
        <Icon name={study.icon} className={'case-icon'} />
      </header>
      <div className={'case-card__body'}>
        <div className={'case-card__overview'}>
          <h3>{study.title[language]}</h3>
          <p className={'case-summary'}>{study.summary[language]}</p>
          <div className={'case-challenge'}><span>{labels.contextProblem}</span><p>{study.challenge[language]}</p></div>
        </div>
        <div className={'case-card__details'}>
          <div>
            <p className={'mini-label'}>{labels.whatTested}</p>
            <ul className={'responsibility-list'}>
              {study.whatTested[language].map((item) => <li key={item}><Check aria-hidden={true} />{item}</li>)}
            </ul>
          </div>
          <div className={'case-detail-block'}><p className={'mini-label'}>{labels.qaApproach}</p><p>{study.approach[language]}</p></div>
          <div className={'case-detail-block'}><p className={'mini-label'}>{labels.resultsImpact}</p><p>{study.impact[language]}</p></div>
        </div>
      </div>
      <footer className={'case-card__footer'}>
        <div><p className={'mini-label'}>{labels.techStack}</p><div className={'tag-list'} aria-label={labels.techStack}>{study.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
        <div className={'case-evidence'}>
          {study.evidence.url
            ? <a href={study.evidence.url} target={'_blank'} rel={'noreferrer'}>{study.evidence.label[language]}<ExternalLink aria-hidden={true} /></a>
            : <span>{study.evidence.todo[language]}</span>}
          <small><ArrowUpRight aria-hidden={true} />{labels.noClientData}</small>
        </div>
      </footer>
    </article>
  );
}
