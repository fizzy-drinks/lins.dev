import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FC } from 'react';

const PageHeader: FC = () => {
  const { t } = useTranslation();

  return (
    <header className='flex justify-center items-center flex-col my-2'>
      <Link legacyBehavior={false} href='/'>
        <h1 className='text-4xl'>{t('header')}</h1>
      </Link>
      <nav>
        <ul className='flex gap-3 text-neutral-500 lowercase font-medium text-lg'>
          <li>
            <Link href='/rango'>{t('navigation.rango')}</Link>
          </li>
          <li>
            <Link href='/github'>{t('navigation.github')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
