import Octokit from '@octokit/rest'
import Axios from 'axios'

import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import ProjectList from '../components/ProjectList'

class Projects extends React.Component {
  static async getInitialProps () {
    const octo = Octokit({ userAgent: 'lins.dev GitHub client' })
    const { data: ghRepoData } = await octo.repos.listForUser({ username: 'gabrielchiconi' })
    const gitHubRepos = ghRepoData
      .map(repo => ({
        origin: 'GitHub',
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

    const { data: glRepoData } = await Axios.get('https://gitlab.com/api/v4/users/gabrielchiconi/projects')
    const gitLabRepos = glRepoData
      .map(repo => ({
        origin: 'GitLab',
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

    return {
      repos: [...gitHubRepos, ...gitLabRepos]
        .sort((repoA, repoB) => repoB.updatedAt.getTime() - repoA.updatedAt.getTime())
    }
  }

  render () {
    return (
      <Page title='Projetos'>
        <PageHeader>
          <PageHeader.Title>
            <PageHeader.Title.Highlight>projetos</PageHeader.Title.Highlight>
          </PageHeader.Title>
          <PageHeader.Sub>Agregador de repositórios do GitHub e GitLab, com algumas notas pessoais</PageHeader.Sub>
        </PageHeader>
        <ProjectList repos={this.props.repos} />
      </Page>
    )
  }
}

export default Projects
