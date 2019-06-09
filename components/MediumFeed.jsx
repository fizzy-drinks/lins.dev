import RSSParser from 'rss-parser'

import palette from '../config/colors'

class MediumFeed extends React.Component {
  constructor ({ url }) {
    super()

    this.state = {
      loading: true,
      posts: []
    }
  }

  async componentDidMount () {
    const rss = new RSSParser()
    const data = await rss.parseURL(this.props.url)
    console.log(data)
    this.setState({
      loading: false,
      posts: data.items.filter(item => item.categories)
    })
  }

  render () {
    if (this.state.loading) {
      return <p>Carregando...</p>
    }

    if (!this.state.posts.length) {
      return <p className='greyed out'>Não há nada para ver aqui</p>
    }

    return (
      <div className='medium container'>
        {this.state.posts.map(post =>
          <article className='medium article' key={post.guid}>
            <a className='medium link' href={post.link} title={post.title} target='_blank'>
              <aside>
                <p className='medium publication date'>
                  {new Date(post.pubDate).toLocaleDateString('pt-BR')} &middot; {post.link.replace(/.*medium\.com\/([\w@\-]+)\/.*/, '$1')}
                </p>
              </aside>
              <h3 className='medium title'>{post.title}</h3>
            </a>
          </article>)}
        <style jsx>{`
          .medium.container {
            display: flex;
            justify-content: stretch;
            align-items: stretch;
            flex-wrap: wrap;
          }

          .medium.article {
            padding: 24px;
            box-shadow: 0 1px 4px ${palette.trueBlack.alpha(.1)};
            border: ${palette.trueBlack.alpha(.1)} 1px solid;
            border-radius: 5px;
            margin: 12px;
            min-width: 300px;
            flex: 1 1 calc(30% - 24px);
          }

          .medium.link {
            color: unset;
            border: none;
          }

          .medium.publication.date {
            font-size: .9em;
            color: ${palette.trueBlack.alpha(.6).rgb()}
          }

          .medium.title {
            font-size: 1.5em;
            color: ${palette.trueBlack.alpha(.85).rgb()}
          }
        `}</style>
      </div>
    )
  }
}

export default MediumFeed
