import express from 'express';
import { create, getAll, getDetail, update, remove } from '../controllers/userController.js';

const router = express.Router();

/**
 * @openapi
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
 *     description: Creates a new user document in MongoDB.
 *     operationId: createUser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreateInput'
 *           example:
 *             name: User1
 *             email: user1@example.com
 *             age: 18
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserResponse'
 *             example:
 *               message: Thành công
 *               data:
 *                 _id: 66a8f1c2d4e5f60789abc123
 *                 name: User1
 *                 email: user1@example.com
 *                 age: 18
 *                 createdAt: '2026-08-02T10:00:00.000Z'
 *                 updatedAt: '2026-08-02T10:00:00.000Z'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/', create);

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     description: Returns a full list of users stored in MongoDB.
 *     operationId: getAllUsers
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserListResponse'
 *             example:
 *               - _id: 66a8f1c2d4e5f60789abc123
 *                 name: User1
 *                 email: user1@example.com
 *                 age: 18
 *                 createdAt: '2026-08-02T10:00:00.000Z'
 *                 updatedAt: '2026-08-02T10:00:00.000Z'
 *               - _id: 66a8f1c2d4e5f60789abc124
 *                 name: User2
 *                 email: user2@example.com
 *                 age: 20
 *                 createdAt: '2026-08-02T10:05:00.000Z'
 *                 updatedAt: '2026-08-02T10:05:00.000Z'
 */
router.get('/', getAll);

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user detail by id
 *     description: Returns a single user by MongoDB ObjectId.
 *     operationId: getUserById
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the user
 *         schema:
 *           type: string
 *         example: 66a8f1c2d4e5f60789abc123
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               _id: 66a8f1c2d4e5f60789abc123
 *               name: User1
 *               email: user1@example.com
 *               age: 18
 *               createdAt: '2026-08-02T10:00:00.000Z'
 *               updatedAt: '2026-08-02T10:00:00.000Z'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               message: Không tìm thấy
 *       500:
 *         description: Server error
 */
router.get('/:id', getDetail);

/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update user by id
 *     description: Updates an existing user and returns the updated document.
 *     operationId: updateUser
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the user
 *         schema:
 *           type: string
 *         example: 66a8f1c2d4e5f60789abc123
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdateInput'
 *           example:
 *             name: User1 Updated
 *             email: user1.updated@example.com
 *             age: 19
 *     responses:
 *       200:
 *         description: Updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               _id: 66a8f1c2d4e5f60789abc123
 *               name: User1 Updated
 *               email: user1.updated@example.com
 *               age: 19
 *               createdAt: '2026-08-02T10:00:00.000Z'
 *               updatedAt: '2026-08-02T10:10:00.000Z'
 *       500:
 *         description: Server error
 */
router.put('/:id', update);

/**
 * @openapi
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete user by id
 *     description: Removes a user by MongoDB ObjectId.
 *     operationId: deleteUser
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the user
 *         schema:
 *           type: string
 *         example: 66a8f1c2d4e5f60789abc123
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeleteResponse'
 *             example:
 *               message: Đã xóa
 *       500:
 *         description: Server error
 */
router.delete('/:id', remove);

export default router;
