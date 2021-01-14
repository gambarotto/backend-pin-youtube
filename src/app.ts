import express, { Express } from 'express';
import cors from 'cors';
import { resolve } from 'path';
import router from './routes/router';

class App {
  server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.cors();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/avatars',
      express.static(resolve(__dirname, '..', 'temp', 'uploads', 'avatars'))
    );
    this.server.use(
      '/images',
      express.static(resolve(__dirname, '..', 'temp', 'uploads', 'images'))
    );
  }

  routes() {
    this.server.use(router);
  }

  cors() {
    this.server.use(cors());
  }
}

export default new App().server;
