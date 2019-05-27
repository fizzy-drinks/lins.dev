import { FaGithub, FaGitlab } from 'react-icons/fa'

import colors from '../config/colors'

const OriginIcons = {
  GitHub: <FaGithub />,
  GitLab: <FaGitlab />
}

const RepoQuickSummary = ({ repo }) =>
  <span>
    <span className='origin tag'>
      {OriginIcons[repo.origin] ||
        `[${repo.origin}]`
      }
    </span>
    {repo.name} (
    {(repo.homepage || repo.url) &&
      <span>
        {repo.homepage &&
          <a href={repo.homepage} title='Site'>
            site
          </a>
        }
        {repo.homepage && repo.url && ' | '}
        {repo.url &&
          <a href={repo.url} title='Repositório'>
            repo
          </a>
        }
      </span>
    }
    )
    <style jsx>{`
    .origin.tag {
      color: ${colors.gray.dark};
      font-weight: 400;
      font-size: .8em;
      margin: 0 .35em 0 0;
    }
    `}</style>
  </span>

export default RepoQuickSummary
