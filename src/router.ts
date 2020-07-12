import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).send('hello world');
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default router;
