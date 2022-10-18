import { clsx } from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import LocaleSwitcher from './LocaleSwitcher';

const NavLinkStyle: FC<PropsWithChildren<{ active: boolean }>> = ({
  children,
  active,
}) => {
  return (
    <span
      className={clsx(
        'text-neutral-500 lowercase font-medium text-lg',
        active && 'text-black underline'
      )}
    >
      {children}
    </span>
  );
};

const PageHeader: FC = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();

  return (
    <header className='w-full flex justify-between items-center flex-col my-2 grow'>
      <LocaleSwitcher />
      <div>
        <Link legacyBehavior={false} href='/'>
          <h1 className='text-4xl'>{t('header')}</h1>
        </Link>
        <nav className='w-full'>
          <ul className='w-full flex gap-3 justify-center'>
            <li>
              <Link href='/rango' legacyBehavior={false}>
                <NavLinkStyle active={pathname === '/rango'}>
                  {t('navigation.rango')}
                </NavLinkStyle>
              </Link>
            </li>
            <li>
              <Link href='/links' legacyBehavior={false}>
                <NavLinkStyle active={pathname === '/links'}>
                  {t('navigation.links')}
                </NavLinkStyle>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div />
    </header>
  );
};

export default PageHeader;
