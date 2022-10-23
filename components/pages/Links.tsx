import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import TextLinkStyle from 'components/ui/TextLinkStyle';
import useSeo from 'hooks/useSeo';
import TextTitleStyle from 'components/ui/TextTitleStyle';
import MainContent from 'components/ui/MainContent';

const LinksPage: FC = () => {
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
    <MainContent>
      <main>
        {seo}
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
    </MainContent>
  );
};

export default LinksPage;
