import path from 'node:path';
import http from 'node:http';
import express, { json } from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017') // protocol://server:port
  .then(() => {
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

    server.listen(port, () => {
      console.log(`🚀️ Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Error connecting to mongodb'));
