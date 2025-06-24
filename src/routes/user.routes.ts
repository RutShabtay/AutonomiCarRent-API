import express from 'express';
import {
    create,
    getAll,
    getById,
    remove,
    update
} from '../controllers/user.controller';

const router = express.Router();

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: User list retrieved successfully
 */
router.get('/', getAll);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User retrieved successfully
 */
router.get('/:id', getById);

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - email
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *               email:
 *                 type: string
 *                 format: email
 *               fullName:
 *                 type: string
 *               phone:
 *                 type: string
 *                 pattern: '^[0-9]{9,10}$'
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post('/', create);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               fullName:
 *                 type: string
 *               phone:
 *                 type: string
 *                 pattern: '^[0-9]{9,10}$'
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put('/:id', update);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted successfully
 */
router.delete('/:id', remove);

export default router;
