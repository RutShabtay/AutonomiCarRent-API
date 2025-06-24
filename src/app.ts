import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db';
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import businessRouter from './routes/business.routes';
import meetingRouter from './routes/meeting.routes'
import serviceRouter from './routes/service.routes';
import userRouter from './routes/user.routes';



dotenv.config();
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/api/business', businessRouter);
app.use('/api/meeting', meetingRouter);
app.use('/api/service', serviceRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

export default app;