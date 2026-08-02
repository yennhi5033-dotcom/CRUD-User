import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import connectDB from './config/db.js';
import swaggerSpec from './config/swagger.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server: <http://localhost>:${PORT}`));
