import RepoQuickSummary from './RepoQuickSummary'

const ProjectList = ({ repos }) =>
  <ul>
    {repos.map(repo =>
      <li key={repo.name}>
        <h3>
          <RepoQuickSummary repo={repo} />
        </h3>
        <p>
          {repo.language && `[${repo.language}]`} {repo.description}
        </p>
      </li>
    )}
  </ul>

export default ProjectList
