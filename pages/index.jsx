import Link from 'next/link'

import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import ProjectList from '../components/ProjectList'

import colors from '../config/colors'

const MainProjects = [
  { name: 'sw',
    homepage: 'https://pypi.org/project/sw-cli',
    url: 'https://github.com/gabrielchiconi/sw',
    origin: 'GitHub',
    language: 'Python',
    description: 'Carteira SSH para linha de comando' },
  { name: 'Reanimar',
    homepage: 'https://gabrielchiconi.github.io/reanimar/',
    url: 'https://github.com/gabrielchiconi/reanimar',
    origin: 'GitHub',
    language: 'JavaScript',
    description: 'Projeto de conclusão de curso de jornalismo: Uma reportagem sobre a vida marinha na Baixada Santista' }
]

const Home = () =>
  <Page title='Home'>
    <PageHeader>
      <PageHeader.Title>BoasVindas</PageHeader.Title>
      <PageHeader.Sub>Me chamo Gabriel e sou um desenvolvedor de sistemas de Santos&ndash;SP.</PageHeader.Sub>
    </PageHeader>
    <section>
      <h2>Projetos</h2>
      <ProjectList repos={MainProjects} />
    </section>
    <section>
      <h2>Publicações: em breve!</h2>
      <p style={{ color: colors.gray.main }}>Não há nada para ver aqui</p>
    </section>
    <section>
      <h2>Contribua para o Domínio Público!</h2>
      <p>
        O Domínio Público é a única forma de tornar conhecimento acessível para a maioria das pessoas.
        Atualmente, pessoas várias regiões do mundo &ndash; inclusive de países desenvolvidos &ndash;
        têm dificuldade para acessar conteúdo protegido. A única forma de contribuirmos para um futuro
        justo em que todos tenham acesso àquilo que mais querem aprender é devolvendo uma parcela daquilo
        que nós aprendemos para o restante das pessoas. 
      </p>
      <p>
        Existem muitas formas de contribuir para o Domínio Público, sejam elas criando conteúdo sob licenças
        como as <a href='https://br.creativecommons.org' target='_blank'>Creative Commons</a> ou contribuindo
        para wikis e outros projetos colaborativos.
      </p>
    </section>
    <section>
      <h2>Bio</h2>
      <p>
        Trabalho como desenvolvedor desde 2014 e crio projetos de aplicativos web em JavaScript, Python,
        Ruby e outras linguagens.
      </p>
      <p>
        Às vezes, publico artigos sobre programação, sobrevivência no mundo das startups de tecnologia e
        estudo de idiomas. Recentemente expurguei minha coleção de posts em uma tentativa de controle de
        qualidade, mas em breve haverá notícias a respeito desse tipo de conteúdo.
      </p>
      <p>
        Desde 2018, também sou jornalista. Ainda tenho que descobrir como vou usar esse diploma, mas ele
        existe.
      </p>
    </section>
  </Page>

export default Home
