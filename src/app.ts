import http from 'http';
import config from 'config';
import express from 'express';
import mongoose from 'mongoose';
import { roomsRouter } from './routes/rooms-route';
import { healthRouter } from './routes/health-check';

const PORT = process.env.PORT || config.get('port');
const mongoUrl = process.env.MONGO_URL || config.get('mongoUrl');
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(healthRouter);
app.use(roomsRouter);

const connection = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const start = async () => {
  try {
    await connection;
    server.listen(PORT, () => {
      console.log('SERVER LISTENNING PORT ', PORT);
    });
  } catch (e) {
    console.log('ERROR CONNECTION', e?.message);
  }
};

start();
