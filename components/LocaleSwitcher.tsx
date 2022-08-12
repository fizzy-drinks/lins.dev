import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useCookies } from 'react-cookie';

const LocaleSwitcher: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [, setCookie] = useCookies();

  const [localeSwitcher, setLocaleSwitcher] = useState(false);
  const toggleLocaleSwitcher = () => {
    setLocaleSwitcher((p) => !p);
  };

  const setPreferredLocale = (locale: string) =>
    setCookie('NEXT_LOCALE', locale, { path: '/' });

  return (
    <ul className='border rounded text-center inline-flex items-center justify-center'>
      {['en', 'pt'].map((locale) => (
        <motion.li
          key={locale}
          animate={{
            width: locale === router.locale || localeSwitcher ? 60 : 0,
          }}
          className={classNames(
            'transition-colors overflow-hidden inline-block',
            locale === router.locale ? 'bg-green-200' : 'bg-white'
          )}
          onClick={toggleLocaleSwitcher}
        >
          <Link
            legacyBehavior={false}
            href={router.pathname}
            locale={locale}
            onClick={() => setPreferredLocale(locale)}
            className='whitespace-nowrap overflow-hidden'
          >
            {t(`locales.${locale}`)}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default LocaleSwitcher;
