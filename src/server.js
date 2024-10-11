// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env.js';
import { pinoHttpConfig } from './utils/config.js';

import studentsRouter from './routers/students.router.js';
import homeRouter from './routers/home.router.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import { notFoundHandler } from './middlewares/notFoundHandler.middleware.js';

const PORT = env('PORT', 3000);

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(pino(pinoHttpConfig));

  app.use(homeRouter);
  app.use(studentsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is available on port ${PORT}`);
  });
};
