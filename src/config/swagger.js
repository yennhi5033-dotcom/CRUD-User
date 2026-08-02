import swaggerJSDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
dotenv.config();
const swaggerOptions = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'CRUD User API',
      version: '1.0.0',
      description: 'Swagger/OpenAPI documentation for the User CRUD service.',
    },
    servers: [
      {
        url: process.env.API_URL,
        description: 'Local development server',
      },
    ],
    tags: [
      {
        name: 'Users',
        description: 'Operations for managing users',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'MongoDB ObjectId of the user',
              example: '66a8f1c2d4e5f60789abc123',
            },
            name: {
              type: 'string',
              example: 'User1',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'user1@example.com',
            },
            age: {
              type: 'integer',
              minimum: 0,
              example: 18,
              default: 18,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-08-02T10:00:00.000Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-08-02T10:00:00.000Z',
            },
          },
          required: ['name', 'email'],
        },
        UserCreateInput: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'User1',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'user1@example.com',
            },
            age: {
              type: 'integer',
              minimum: 0,
              example: 18,
            },
          },
          required: ['name', 'email'],
        },
        UserUpdateInput: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'User1 Updated',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'user1.updated@example.com',
            },
            age: {
              type: 'integer',
              minimum: 0,
              example: 19,
            },
          },
        },
        UserListResponse: {
          type: 'array',
          items: {
            $ref: '#/components/schemas/User',
          },
        },
        CreateUserResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Thành công',
            },
            data: {
              $ref: '#/components/schemas/User',
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Không tìm thấy',
            },
            error: {
              type: 'string',
              example: 'User validation failed',
            },
          },
        },
        DeleteResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Đã xóa',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
