import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useCookies } from 'react-cookie';
import Button from './ui/Button';

const LocaleButton: FC<{ locale: string }> = ({ locale }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [, setCookie] = useCookies();

  const setPreferredLocale = (locale: string) =>
    setCookie('NEXT_LOCALE', locale, { path: '/' });

  return (
    <Button>
      <Link
        legacyBehavior={false}
        href={router.pathname}
        locale={locale}
        onClick={() => setPreferredLocale(locale)}
        className='ds-button'
      >
        {t(`locales.${locale}`)}
      </Link>
    </Button>
  );
};

export default LocaleButton;
