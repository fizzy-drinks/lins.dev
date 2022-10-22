import { NextApiHandler } from 'next';
import getRecentTracks from 'shared/utils/lastfm/getRecentTracks';

const handler: NextApiHandler = async (req, res) => {
  res.send(await getRecentTracks(1));
};

export default handler;
