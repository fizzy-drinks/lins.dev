import { useContext } from 'react';
import {
  LastfmContext,
  LastfmContextProps,
} from 'components/providers/LastfmProvider';

const useLastfm = (): LastfmContextProps => {
  return useContext(LastfmContext);
};

export default useLastfm;
