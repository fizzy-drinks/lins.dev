import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useCookies } from 'react-cookie';
import i18nextConfig from 'next-i18next.config';

const LocaleSwitcher: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [, setCookie] = useCookies();

  const [localeSwitcher, setLocaleSwitcher] = useState(false);

  const setPreferredLocale = (locale: string) =>
    setCookie('NEXT_LOCALE', locale, { path: '/' });

  return (
    <motion.ul className='border rounded-sm border-green-200 text-center flex items-stretch justify-center'>
      {i18nextConfig.i18n.locales.map((locale) => (
        <motion.li
          key={locale}
          animate={{
            width: locale === router.locale || localeSwitcher ? 40 : 0,
          }}
          transition={{ type: 'tween' }}
          className={classNames(
            'transition-colors overflow-hidden inline-block w-10',
            locale === router.locale && localeSwitcher
              ? 'bg-green-200'
              : 'bg-white'
          )}
        >
          <Link
            legacyBehavior={false}
            href={router.pathname}
            locale={locale}
            onClick={() =>
              locale === router.locale
                ? setLocaleSwitcher((p) => !p)
                : setPreferredLocale(locale)
            }
            className='whitespace-nowrap overflow-hidden'
          >
            {t(`locales.${locale}`)}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default LocaleSwitcher;
