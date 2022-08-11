import { FaGithub, FaGitlab, FaExternalLinkAlt } from 'react-icons/fa';

import palette from '../../config/colors';
import { FC } from 'react';

const OriginIcons = {
  GitHub: <FaGithub />,
  GitLab: <FaGitlab />,
};

type Repo = {
  name: string;
  url: string;
  description: string;
  homepage: string;
  origin: string;
};

const ProjectList: FC<{ repos: Repo[] }> = ({ repos }) => (
  <section className='project list'>
    {repos.map((repo) => (
      <article key={repo.name}>
        <div className='main info'>
          <h3>{repo.name}</h3>
          <p className='description'>{repo.description}</p>
        </div>
        <div className='info groups'>
          {repo.url && (
            <a
              className='info link'
              href={repo.url}
              target='_blank'
              title='Repositório'
              rel='noreferrer'
            >
              <span className='icon'>{OriginIcons[repo.origin]}</span>
              Repositório
            </a>
          )}
          {repo.homepage && (
            <a
              className='info link'
              href={repo.homepage}
              target='_blank'
              title='Site'
              rel='noreferrer'
            >
              <span className='icon'>
                <FaExternalLinkAlt />
              </span>
              Ver na web
            </a>
          )}
        </div>
      </article>
    ))}
    <style jsx>{`
      h3,
      h4,
      p {
        margin: 0 0 0.25em;
      }

      h3 {
        color: ${palette.primaryDark};
        margin: 0;
        text-align: center;
      }

      .project.list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 24px 24px;
        background: ${palette.trueWhite.alpha(0.4)};
        margin: 12px;
        min-width: 300px;
        max-width: 500px;
        flex: 1 1 calc(50% - 24px);
      }

      article > .info {
        margin: 6px 0;
      }

      a {
        border: 0;
      }

      .info.groups {
        display: flex;
        justify-content: space-around;
      }

      .info.link {
        color: ${palette.white.alpha(0.9)};
        display: inline-flex;
        flex-direction: column;
        align-items: center;
      }

      .description {
        font-size: 0.9em;
        text-align: center;
        color: ${palette.primaryDark};
      }

      .icon {
        font-size: 32px;
        line-height: 100%;
      }
    `}</style>
  </section>
);

export default ProjectList;