import {Octokit} from '@octokit/rest'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import ProjectList from '../components/ProjectList'
import usernameConfig from '../config/usernames'

function Projects () {
  const [reposLoading, setReposLoading] = useState(false)
  const [repos, setRepos] = useState([])
  useEffect(() => {
    (async () => {
      setReposLoading(true)
      const octo = Octokit({ userAgent: 'lins.dev GitHub client' })
      let gitHubRepos = []
      try {
        const { data: ghRepoData } = await octo.repos.listForUser({ username: usernameConfig.github })
        gitHubRepos = ghRepoData
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
      } catch (err) {
        console.error(err)
      }

      let gitLabRepos = []
      try {
        const { data: glRepoData } = await Axios.get(`https://gitlab.com/api/v4/users/${usernameConfig.gitlab}/projects`)
        gitLabRepos = glRepoData
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
      } catch (err) {
        console.error(err)
      }

      setRepos([...gitHubRepos, ...gitLabRepos]
        .sort((repoA, repoB) => repoB.updatedAt.getTime() - repoA.updatedAt.getTime()))
      setReposLoading(false)
    })()
  }, [])

  return (
    <Page title='Projetos' seo='projects'>
      <PageHeader>
        <PageHeader.Title>
          <PageHeader.Title.Highlight>projetos</PageHeader.Title.Highlight>
        </PageHeader.Title>
        <PageHeader.Sub>Agregador de repositórios do GitHub e GitLab, com algumas notas pessoais</PageHeader.Sub>
      </PageHeader>
      {reposLoading ? (
        <p>Carregando...</p>
      ) : (
        <ProjectList repos={repos} />
      )}
    </Page>
  )
}

export default Projects
