import Octokit from '@octokit/rest'

import Page from '../components/Page'

class Projects extends React.Component {
  static async getInitialProps () {
    const octo = Octokit({ userAgent: 'lins.dev GitHub client' })
    const { data: repoData } = await octo.repos.listForUser({ username: 'gabrielchiconi' })
    const gitHubRepos = repoData
      .map(repo => ({
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

    return { gitHubRepos }
  }

  render () {
    return (
      <Page title='Projetos'>
        <h2>Meus projetos!</h2>
        <ul>
          {this.props.gitHubRepos.map(repo =>
            <li>
              <h3>
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
