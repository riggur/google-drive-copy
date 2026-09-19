import { Router, type Request, type Response } from 'express';

const router = Router();

// GET USER INFO

interface GetUser {
  userId: string;
}

router.get('/users/getUser', (req: Request, res: Response) => {
  res.send("Boing");
});

interface RegisterUser {
  username: string;
  password: string; // vaja saltida ja hashida
  cPassword: string;
  verification: number;
  email: string;

}

router.post('/users/registerUser', (req: Request<{}, {}, RegisterUser>, res: Response) => {
  const { username, password, cPassword, verification, email } = req.body;
  res.send(req.body);
});

export default router;
