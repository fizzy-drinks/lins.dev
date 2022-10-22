import { clsx } from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import LocaleSwitcher from './LocaleSwitcher';
import DarkModeToggle from './DarkModeToggle';
import RecentTracksDisplay from './RecentTracksDisplay';
import { LastfmRecentTracks } from 'types/lastfm';

const NavLinkStyle: FC<PropsWithChildren<{ active: boolean }>> = ({
  children,
  active,
}) => {
  return (
    <span
      className={clsx(
        'lowercase font-medium text-lg relative',
        active
          ? 'text-yellow-600 dark:text-yellow-300'
          : 'text-neutral-500 dark:text-yellow-200'
      )}
    >
      {children}
      <AnimatePresence>
        {active && (
          <span
            // layoutId='nav-link-active-follow'
            className='block absolute bottom-0 w-full h-px bg-neutral-500 dark:bg-yellow-200'
          />
        )}
      </AnimatePresence>
    </span>
  );
};

const AnimatedNavLink: FC<
  PropsWithChildren<{ layoutId: string; delay: number; href: string }>
> = ({ href, children }) => {
  const { pathname } = useRouter();

  return (
    <li
    // initial={{ opacity: 0, transform: 'translateX(-40px)' }}
    // animate={{
    //   opacity: 1,
    //   transform: 'translateX(0%)',
    //   transition: { delay, duration: 1 },
    // }}
    // exit={{ opacity: 0 }}
    // layoutId={layoutId}
    >
      <Link href={href} legacyBehavior={false}>
        <NavLinkStyle active={pathname === href}>{children}</NavLinkStyle>
      </Link>
    </li>
  );
};

const PageHeader: FC<{ recentTracks: LastfmRecentTracks }> = ({
  recentTracks,
}) => {
  const { t } = useTranslation();

  return (
    <header className='w-full flex justify-between items-center flex-col my-2 grow'>
      <div className='w-full flex justify-between items-center'>
        <div className='grow-1 basis-[33%]'>
          <DarkModeToggle />
        </div>
        <div className='grow-1 basis-[33%] max-w-[50%]'>
          <RecentTracksDisplay recentTracks={recentTracks} />
        </div>
        <div className='grow-1 basis-[33%]'>
          <LocaleSwitcher />
        </div>
      </div>
      <div className='mt-4'>
        <Link legacyBehavior={false} href='/'>
          <h1
            // layout
            // layoutId='title'
            // initial={{ opacity: 0, transform: 'translateY(-50%)' }}
            // animate={{ opacity: 1, transform: 'translateY(0%)' }}
            // transition={{ ease: 'easeInOut', duration: 1 }}
            className='text-4xl'
          >
            {t('header')}
          </h1>
        </Link>
        <nav className='w-full'>
          <ul className='w-full flex gap-3 justify-center'>
            <AnimatedNavLink layoutId='nav-rango' delay={0.8} href='/rango'>
              {t('navigation.rango')}
            </AnimatedNavLink>
            <AnimatedNavLink layoutId='nav-links' delay={0.4} href='/links'>
              {t('navigation.links')}
            </AnimatedNavLink>
          </ul>
        </nav>
      </div>
      <div />
    </header>
  );
};

export default PageHeader;
