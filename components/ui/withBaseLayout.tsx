import { FC, PropsWithChildren } from 'react';
import LoaderBar from './LoaderBar';
import PageHeader from 'components/PageHeader';
import { LastfmRecentTracks } from 'types/lastfm';

const withBaseLayout = <
  ComponentProps extends PropsWithChildren<{ recentTracks: LastfmRecentTracks }>
>(
  C: FC<ComponentProps>
): FC<ComponentProps> => {
  const WithBasePage: FC<ComponentProps> = (props) => {
    return (
      <>
        <LoaderBar />
        <div className='mx-auto px-3 flex flex-col items-center w-full h-full gap-3 lowercase dark:bg-neutral-900 dark:text-gray-200'>
          <PageHeader recentTracks={props.recentTracks} />
          <C {...props} />
        </div>
      </>
    );
  };

  return WithBasePage;
};

export default withBaseLayout;
