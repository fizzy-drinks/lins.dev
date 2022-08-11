import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import palette from '../../config/colors';

const SeparatorLink: FC<PropsWithChildren<{ href: string; title: string }>> = ({
  href,
  title,
  children,
}) => (
  <div className='separator-link'>
    <Link href={href}>
      <a title={title}>{children}</a>
    </Link>
    <style jsx>{`
      .separator-link {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 1em;
      }

      .separator-link a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 150px;
        min-height: 48px;

        border-top-width: 1px;
        text-decoration: inherit;
        background: ${palette.light.alpha(0.5)};
        color: ${palette.primaryDark};
      }

      .separator-link a:hover {
        border-width: 1px 0;
        background: ${palette.warn.alpha(0.6)};
      }
    `}</style>
  </div>
);

export default SeparatorLink;
