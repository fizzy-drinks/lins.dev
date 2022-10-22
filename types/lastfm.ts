export type LastfmImage = {
  size: 'small' | 'medium' | 'large' | 'extralarge';
  /**
   * The image URL
   */
  '#text': string;
};

export type LastfmRecentTracks = {
  recenttracks: {
    '@attr': {
      page: string;
      perPage: string;
      total: string;
      totalPages: string;
      user: string;
    };
    track: {
      '@attr'?: { nowPlaying: 'true' };
      album: {
        '#text': string;
        mbid: string;
      };
      artist: {
        url: string;
        name: string;
        mbid: string;
        image: LastfmImage[];
      };
      image: LastfmImage[];
      loved: '0' | '1';
      streamable: '0' | '1';
      name: string;
      url: string;
      mbid: string;
    }[];
  };
};
