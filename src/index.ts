import express, { type Express, type Request, type Response } from 'express';

// USER RELATED ROUTES
import userRouter from './routes/userRoutes.ts';

// TODO: SETUP ROUTES
// TODO: SETUP MIDDLEWARE
// TODO: SETUP LOCAL DB
// TODO: SETUP FILE MANAGMENT


// implement the main expres application
const app: Express = express();

// USE DEFINED ROUTES
app.use(userRouter);

// define a test route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// define the port to listen on
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
