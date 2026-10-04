import { ArrowRight, Download } from 'lucide-react';

export function AudiencePaths({ paths, language, cv }) {
  return (
    <div className={'audience-paths'}>
      {paths.map((path) => (
        <article className={'audience-path audience-path--' + path.type} key={path.type}>
          <p className={'section-kicker'}>{path.eyebrow[language]}</p>
          <h3>{path.title[language]}</h3>
          <p>{path.text[language]}</p>
          <div>
            {path.actions.map((action, index) => {
              const href = action.href === 'cv' ? import.meta.env.BASE_URL + cv : action.href;
              const ActionIcon = action.download ? Download : ArrowRight;
              return <a className={index === 0 ? 'button button-primary' : 'button button-secondary'} href={href} download={action.download || undefined} key={action.label.en}>{action.label[language]}<ActionIcon aria-hidden={true} /></a>;
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
