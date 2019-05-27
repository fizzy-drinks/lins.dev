import { FaGithub, FaGitlab, FaExternalLinkAlt } from 'react-icons/fa'
import { DiJsBadge, DiPython, DiHtml5 } from 'react-icons/di'

import colors from '../config/colors'

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
                  <span className='external link'>
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
      margin: 0 0 .5em;
    }

    h3 {
      color: ${colors.primary.darkest};
      font-size: 1.2em;
      transition: all 300ms ease;
    }

    li:hover h3 {
      font-size: 1.3em;
    }

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: space-around;
    }

    li {
      margin: .35em;
      padding: .5em;
      min-width: 300px;
      min-height: 160px;
      flex: 1 1 auto;

      background: ${colors.white};
      border: ${colors.primary.dark} 2px solid;
      border-radius: 3px;
    }

    .info.groups {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    .info.group {
      flex: 1 1 auto;
      width: 30%;
    }

    h4 {
      font-variant: small-caps;
      text-transform: lowercase;
    }

    .description {
      font-size: .9em;
    }

    .external.link {
      margin-left: .25em;
    }
    `}</style>
  </ul>

export default ProjectList
