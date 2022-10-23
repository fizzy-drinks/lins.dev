import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import TextLinkStyle from 'components/ui/TextLinkStyle';
import useSeo from 'hooks/useSeo';
import TextTitleStyle from 'components/ui/TextTitleStyle';
import PageLayout from 'components/ui/PageLayout';
import LastfmProvider, {
  LastfmContextProps,
} from 'components/providers/LastfmProvider';

export type LinksPageProps = LastfmContextProps;

const LinksPage: FC<LinksPageProps> = ({ recentTracks }) => {
  const { t } = useTranslation();
  const seo = useSeo({
    uri: '/links',
    description: t('pages.links.description'),
    title: t('pages.links.title'),
  });

  const links = [
    { href: 'https://github.com/fizzy-drinks', content: 'Github' },
    { href: 'https://gitlab.com/fizzydrinks', content: 'GitLab' },
  ];

  return (
    <LastfmProvider recentTracks={recentTracks}>
      <PageLayout>
        {seo}
        <main className='w-full max-w-[460px] text-left'>
          <TextTitleStyle>
            <h1>{t('pages.links.title')}</h1>
          </TextTitleStyle>
          <p className='mt-2'>{t('pages.links.description')}</p>
          <ul className='mt-2'>
            {links.map(({ href, content }) => (
              <li className='list-item mt-2' key={href}>
                <a href={href} target='_blank' rel='noreferrer'>
                  <TextLinkStyle>{content}</TextLinkStyle>
                </a>
              </li>
            ))}
          </ul>
        </main>
      </PageLayout>
    </LastfmProvider>
  );
};

export default LinksPage;
