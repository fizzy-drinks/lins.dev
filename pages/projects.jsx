import Octokit from '@octokit/rest'
import Axios from 'axios'

import Page from '../components/Page'

class Projects extends React.Component {
  static async getInitialProps () {
    const octo = Octokit({ userAgent: 'lins.dev GitHub client' })
    const { data: ghRepoData } = await octo.repos.listForUser({ username: 'gabrielchiconi' })
    const gitHubRepos = ghRepoData
      .map(repo => ({
        origin: 'github',
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        updatedAt: new Date(repo.updated_at),
        stars: repo.stargazers_count,
        forks: repo.forks,
        homepage: repo.homepage,
        language: repo.language,
        isFork: repo.fork
      }))
      .sort((repoA, repoB) => repoB.updatedAt.getTime() - repoA.updatedAt.getTime())

    const { data: glRepoData } = await Axios.get('https://gitlab.com/api/v4/users/gabrielchiconi/projects')
    const gitLabRepos = glRepoData
      .map(repo => ({
        origin: 'gitlab',
        name: repo.name,
        url: repo.web_url,
        description: repo.description,
        updatedAt: new Date(repo.last_activity_at),
        stars: repo.star_count,
        forks: repo.fork_count,
        homepage: null,
        language: null,
        isFork: false
      }))
      .sort((repoA, repoB) => repoB.updatedAt.getTime() - repoA.updatedAt.getTime())

    return { repos: [...gitHubRepos, ...gitLabRepos] }
  }

  render () {
    return (
      <Page title='Projetos'>
        <h2>Meus projetos!</h2>
        <ul>
          {this.props.repos.map(repo =>
            <li key={repo.name}>
              <h3>
                {repo.origin && `${repo.origin}:`}
                <a href={repo.homepage || repo.url} title={repo.name}>
                  {repo.name}
                </a>
              </h3>
              <p>
                {repo.language && `[${repo.language}]`} {repo.description}
              </p>
            </li>
          )}
        </ul>
      </Page>
    )
  }
}

export default Projects
