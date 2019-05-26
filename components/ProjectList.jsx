import { DiJsBadge, DiPython, DiHtml5 } from 'react-icons/di'

import RepoQuickSummary from './RepoQuickSummary'

const LanguageIcons = {
  JavaScript: () => <DiJsBadge />,
  Python: () => <DiPython />,
  HTML: () => <DiHtml5 />,
  TypeScript: () => <DiJsBadge />
}

const ProjectList = ({ repos }) =>
  <ul>
    {repos.map(repo =>
      <li key={repo.name}>
        <h3>
          <RepoQuickSummary repo={repo} />
        </h3>
        <p>
          {repo.language &&
            (LanguageIcons[repo.language]
              ? LanguageIcons[repo.language]()
              : `[${repo.language}]`)} {repo.description}
        </p>
      </li>
    )}
  </ul>

export default ProjectList
