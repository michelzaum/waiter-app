import path from 'node:path';
import express, { json } from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017') // protocol://server:port
  .then(() => {
    const app = express();
    const port = 3001;

    app.use((request, response, next) => {
      response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
      response.setHeader('Access-Control-Allow-Methods', '*');
      response.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀️ Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Error connecting to mongodb'));
