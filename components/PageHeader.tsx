import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import LocaleSwitcher from './LocaleSwitcher';
import DarkModeToggle from './DarkModeToggle';

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
          <motion.span
            layoutId='nav-link-active-follow'
            className='block absolute bottom-0 w-full h-px bg-neutral-500 dark:bg-yellow-200'
          />
        )}
      </AnimatePresence>
    </span>
  );
};

const AnimatedNavLink: FC<
  PropsWithChildren<{ layoutId: string; delay: number; href: string }>
> = ({ layoutId, delay, href, children }) => {
  const { pathname } = useRouter();

  return (
    <motion.li
      initial={{ opacity: 0, transform: 'translateX(-40px)' }}
      animate={{
        opacity: 1,
        transform: 'translateX(0%)',
        transition: { delay, duration: 1 },
      }}
      exit={{ opacity: 0 }}
      layoutId={layoutId}
    >
      <Link href={href} legacyBehavior={false}>
        <NavLinkStyle active={pathname === href}>{children}</NavLinkStyle>
      </Link>
    </motion.li>
  );
};

const PageHeader: FC = () => {
  const { t } = useTranslation();

  return (
    <header className='w-full flex justify-between items-center flex-col my-2 grow'>
      <div className='w-full flex justify-between'>
        <DarkModeToggle />
        <LocaleSwitcher />
      </div>
      <div className='mt-2'>
        <Link legacyBehavior={false} href='/'>
          <motion.h1
            layout
            layoutId='title'
            initial={{ opacity: 0, transform: 'translateY(-50%)' }}
            animate={{ opacity: 1, transform: 'translateY(0%)' }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className='text-4xl'
          >
            {t('header')}
          </motion.h1>
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
