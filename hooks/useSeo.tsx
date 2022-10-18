import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';

const useSeo = ({
  title,
  description,
  uri,
}: {
  title?: string;
  description?: string;
  uri: string;
}): JSX.Element => {
  const { t } = useTranslation();
  const seoTitle = title ? `${title} | ${t('seo.title')}` : t('seo.title');

  const seoUrl = new URL('https://lins.dev');
  seoUrl.pathname = uri;

  const customSeo = (
    <NextSeo
      title={seoTitle}
      description={description || t('seo.description')}
      canonical={seoUrl.toString()}
      openGraph={{
        url: seoUrl.toString(),
      }}
      additionalLinkTags={[{ rel: 'icon', href: '/favicon.png' }]}
    />
  );

  return customSeo;
};

export default useSeo;
