const RepoQuickSummary = ({ repo }) =>
  <span>
    {repo.origin && `${repo.origin}:`} {repo.name} (
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
  </span>

export default RepoQuickSummary
