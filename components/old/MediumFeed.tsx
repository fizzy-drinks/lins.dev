import { Component } from 'react';
import RSSParser from 'rss-parser';

import palette from '../../config/colors';

const mediumURLToUsername = (mediumURL) =>
  mediumURL.replace(/.*medium\.com\/([@\w-]+)\/.*/, '$1');

class MediumFeed extends Component<{ url: string }> {
  state: {
    loading: boolean;
    posts: {
      guid: string;
      link: string;
      title: string;
      pubDate: string;
    }[];
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
    };
  }

  async componentDidMount() {
    const rss = new RSSParser();
    const data = await rss.parseURL(this.props.url);
    this.setState({
      loading: false,
      posts: data.items.filter((item) => item.categories),
    });
  }

  render() {
    if (this.state.loading) {
      return <p>Carregando...</p>;
    }

    if (!this.state.posts.length) {
      return <p className='greyed out'>Não há nada para ver aqui</p>;
    }

    return (
      <div className='medium container'>
        {this.state.posts.map((post) => (
          <article className='medium article' key={post.guid}>
            <aside>
              <p className='medium metadata publication date'>
                {new Date(post.pubDate).toLocaleDateString('pt-BR')}
              </p>
              <p className='medium metadata publication author'>
                <a
                  className='medium link'
                  href={`https://medium.com/${mediumURLToUsername(post.link)}`}
                  title={post.title}
                  target='_blank'
                  rel='noreferrer'
                >
                  {mediumURLToUsername(post.link)}
                </a>
              </p>
            </aside>
            <h3 className='medium title'>
              <a
                className='medium link'
                href={post.link}
                title={post.title}
                target='_blank'
                rel='noreferrer'
              >
                {post.title}
              </a>
            </h3>
          </article>
        ))}
        <style jsx>{`
          .medium.container {
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-wrap: wrap;
          }

          .medium.article {
            padding: 24px;
            background: ${palette.trueWhite.alpha(0.4)};
            margin: 12px;
            min-width: 300px;
            max-width: 500px;
            flex: 1 1 calc(50% - 24px);
          }

          .medium.link {
            color: unset;
            border: none;
          }

          .medium.metadata {
            font-size: 0.9em;
            color: ${palette.white.rgb()};
            margin: 0;
          }

          .medium.title {
            font-size: 1.65em;
            margin: 0;
            color: ${palette.primaryDark.rgb()};
            min-height: 120px;
            display: flex;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
}

export default MediumFeed;
