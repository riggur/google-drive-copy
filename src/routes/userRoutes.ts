import { Router, type Request, type Response } from 'express';

const router = Router();

router.get('/getUser', (req: Request, res: Response) => {
  res.send("Boing");
});

export default router;
