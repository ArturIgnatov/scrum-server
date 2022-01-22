import { Utils } from '../utils/utils';

const router = Utils.createRouter();

router.get('/room/:roomId', (req, res) => {
  const { roomId } = req.params;
  res.status(200).json({ message: `ok ${roomId}` });
});

export const roomsRouter = router;
