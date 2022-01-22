import { Utils } from '../utils/utils';

const router = Utils.createRouter();

router.get('/healthcheck', (_, res) => {
  res.status(200).json({ message: 'Im alive' });
});

export const healthRouter = router;
