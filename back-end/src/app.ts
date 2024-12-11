import express from 'express';
import router from './routes/userRoutes';
import { seedUsers } from './seeds/seedUser';

const connectDB = require('./config/database');
const cors = require('cors');

const app = express();

connectDB();

seedUsers();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  }),
);

app.use(express.json());
app.use('/user', router);

export default app;
