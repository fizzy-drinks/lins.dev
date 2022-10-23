import { NextApiHandler } from 'next';
import getLatestTrack from 'shared/utils/lastfm/getLatestTrack';

const handler: NextApiHandler = async (req, res) => {
  res.send(await getLatestTrack());
};

export default handler;
