import { clsx } from 'clsx';
import { motion } from 'framer-motion';
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
      <div className='w-full flex justify-end'>
        <LocaleSwitcher />
      </div>
      <div>
        <Link legacyBehavior={false} href='/'>
          <motion.h1
            layout
            layoutId='title'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className='text-4xl'
          >
            {t('header')}
          </motion.h1>
        </Link>
        <nav className='w-full'>
          <ul className='w-full flex gap-3 justify-center'>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
              // initial={{
              //   opacity: 0,
              //   // transform: 'translateX(-25%)',
              // }}
              // animate={{
              //   opacity: 1,
              //   // transform: 'translateX(0%)',
              //   transition: { duration: 1, ease: 'easeOut', delay: 1 },
              // }}
              // exit={{
              //   opacity: 0,
              //   transition: { duration: 1, ease: 'easeOut' },
              // }}
              // layoutId='nav1'
            >
              <Link href='/rango' legacyBehavior={false}>
                <NavLinkStyle active={pathname === '/rango'}>
                  {t('navigation.rango')}
                </NavLinkStyle>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
              // initial={{
              //   opacity: 0,
              //   // transform: 'translateX(-25%)',
              // }}
              // animate={{
              //   opacity: 1,
              //   // transform: 'translateX(0%)',
              //   transition: { duration: 1, ease: 'easeOut', delay: 0.5 },
              // }}
              // exit={{
              //   opacity: 0,
              //   transition: { duration: 1, ease: 'easeOut' },
              // }}
              // layoutId='nav2'
            >
              <Link href='/links' legacyBehavior={false}>
                <NavLinkStyle active={pathname === '/links'}>
                  {t('navigation.links')}
                </NavLinkStyle>
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
      <div />
    </header>
  );
};

export default PageHeader;
