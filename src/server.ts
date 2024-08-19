import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { specs, swaggerUi } from '../config/swagger';
import dbConnection from '../config/database';
import scheduleRoutes from './routes/schedule-routes';

const app = express();

dbConnection();

dotenv.config();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', scheduleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Aplicação iniciada'));