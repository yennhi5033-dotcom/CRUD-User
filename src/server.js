import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import connectDB from './config/db.js';
import swaggerSpec from './config/swagger.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",

  "https://crud-user-1lmh.onrender.com",
  // Vercel frontend
  "https://fe-crud-user.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Cho phép request không có Origin
      // Ví dụ: Postman, Swagger, server-to-server
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],

    credentials: true,
  })
);
app.use(express.json());
connectDB();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server: <http://localhost>:${PORT}`));
