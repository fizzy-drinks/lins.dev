import { FaGithub, FaGitlab, FaExternalLinkAlt } from 'react-icons/fa'
import { DiJsBadge, DiPython, DiHtml5 } from 'react-icons/di'

import palette from '../config/colors'

const OriginIcons = {
  GitHub: <FaGithub />,
  GitLab: <FaGitlab />
}

const LanguageIcons = {
  JavaScript: DiJsBadge,
  Python: DiPython,
  HTML: DiHtml5,
  TypeScript: DiJsBadge
}

const ProjectList = ({ repos }) =>
  <ul>
    {repos.map(repo =>
      <li key={repo.name}>
        <article>
          <h3>{repo.name}</h3>
          <div className='info groups'>
            {repo.url &&
              <section className='info group'>
                <h4>Repositório</h4>
                {OriginIcons[repo.origin]} <a href={repo.url} target='_blank' title='Repositório'>
                  {repo.origin}
                </a>
              </section>
            }
            {repo.homepage &&
              <section className='info group'>
                <h4>Homepage</h4>
                <a href={repo.homepage} target='_blank' title='Site'>
                  Ver
                  <span className='external icon'>
                    <FaExternalLinkAlt size={12} />
                  </span>
                </a>
              </section>
            }
            {repo.language &&
              <section className='info group'>
                <h4>Tecnologias</h4>
                <span className='flex text icon'>
                  {LanguageIcons[repo.language]
                    ? LanguageIcons[repo.language]({ size: 24 })
                    : repo.language}
                </span>
              </section>
            }
            {repo.description &&
              <section className='info group'>
                <h4>Descrição</h4>
                <p className='description'>{repo.description}</p>
              </section>
            }
          </div>
        </article>
      </li>
    )}
    <style jsx>{`
    h3, h4, p {
      margin: 0 0 .25em;
      max-width: 300px;
    }

    h3 {
      color: ${palette.primary.darken(.2)};
      font-size: 1.2em;
      transition: all 300ms ease;
    }

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    li {
      margin: .35em;
      padding: .5em;
      min-height: 160px;
      flex: 1 1 auto;

      background: ${palette.white};
      box-shadow: inset 0px 0px 2px ${palette.black.alpha(.1)};
      border: none;
      border-radius: 3px;
    }

    .info.groups {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .info.group {
      flex: 1 1 auto;
      min-width: 100px;
      padding: .25em 0;
    }

    h4 {
      font-family: Inconsolata, monospace;
      font-size: 1.2em;
      font-variant: small-caps;
      text-transform: lowercase;
      color: ${palette.gray.rgb()}
    }

    .description {
      font-size: .9em;
    }

    .external.icon {
      margin-left: .25em;
    }
    `}</style>
  </ul>

export default ProjectList
