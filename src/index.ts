import express, { type Express, type Request, type Response } from 'express';

// USER RELATED ROUTES
import userRouter from './routes/userRoutes.ts';

// TODO: SETUP ROUTES
// TODO: SETUP MIDDLEWARE
// TODO: SETUP LOCAL DB -> DOCKER POSTGRES
// TODO: FRONTEND -> DOCKER
// TODO: SETUP FILE MANAGMENT


// implement the main expres application
const app: Express = express();

// DATA PARSER
// TODO: RESEARCH MORE ABOUT PARSING DATA.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
