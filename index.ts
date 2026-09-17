import express, { type Express, type Request, type Response } from 'express';

// implement the main expres application
const app: Express = express();

// define a test route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// define the port to listen on
app.listen(3000);
