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
import authRouter from './routes/auth.routes';
import { authMiddleware } from './middleware/auth.middleware';


dotenv.config();
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/api/business', authMiddleware, businessRouter);
app.use('/api/meeting', authMiddleware, meetingRouter);
app.use('/api/service', authMiddleware, serviceRouter);
app.use('/api/user', authMiddleware, userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('🎉Welcome to the API🎉');
});


app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Global Error:', err.stack);
    res.status(500).json({
        message: 'Something went wrong 😢',
        error: err.message || 'Unknown error',
    });
});


export default app;