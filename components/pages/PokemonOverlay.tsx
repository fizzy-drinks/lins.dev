import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { FC } from 'react';
import PokemonOverlayImage from 'assets/pokemon-overlay.png';
import MainContent from 'components/MainContent';
import TextLinkStyle from 'components/TextLinkStyle';
import TextTitleStyle from 'components/TextTitleStyle';
import useSeo from 'hooks/useSeo';

const PokemonOverlayPage: FC = () => {
  const { t } = useTranslation();
  const seo = useSeo({
    uri: '/pokemon-overlay',
    title: t('pages.pokemon-overlay.title'),
    description: t('pages.pokemon-overlay.description'),
  });

  return (
    <MainContent>
      <main>
        {seo}
        <figure className='text-center'>
          <Image
            src={PokemonOverlayImage}
            alt={t('pages.pokemon-overlay.title')}
            placeholder='blur'
            className='rounded-md shadow-lg shadow-highlight dark:shadow-highlight-dark'
          />
        </figure>
        <TextTitleStyle>
          <h1>{t('pages.pokemon-overlay.title')}</h1>
        </TextTitleStyle>
        <p className='mt-2'>{t('pages.pokemon-overlay.description')}</p>
        <nav className='text-center text-sm mt-2'>
          <a
            href='https://github.com/fizzy-drinks/pokemon-overlay'
            target='_blank'
            rel='noreferrer'
          >
            <TextLinkStyle>{t('cta.source')}</TextLinkStyle>
          </a>
        </nav>
      </main>
    </MainContent>
  );
};

export default PokemonOverlayPage;
