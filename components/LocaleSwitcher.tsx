import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useCookies } from 'react-cookie';
import i18nextConfig from 'next-i18next.config';

const LocaleSwitcher: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [, setCookie] = useCookies();

  const setPreferredLocale = (locale: string) =>
    setCookie('NEXT_LOCALE', locale, { path: '/' });

  return (
    <ul className='flex justify-end gap-2'>
      {i18nextConfig.i18n.locales.map((locale) => (
        <li key={locale}>
          <Link
            legacyBehavior={false}
            href={router.pathname}
            locale={locale}
            onClick={() => setPreferredLocale(locale)}
            className='whitespace-nowrap overflow-hidden'
          >
            {t(`ui.locales.${locale}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LocaleSwitcher;
