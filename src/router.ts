import express, { Request, Response } from 'express';

import { FactoryArgs, createModel } from './factory';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const { hash, depth } = req.query;

    const args: FactoryArgs = {
      current: req.originalUrl,
      path: req.path,
      hash: typeof hash === 'string' ? hash : '_',
      depth: typeof depth === 'string' ? parseInt(depth, 10) : 1,
    };

    const model = createModel(args);

    res.status(200).render('index', model);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default router;
