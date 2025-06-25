import express from "express";
import { authorizationMiddleware } from '../middleware/authorization.middleware'
import {
    getAll,
    getById,
    create,
    update,
    remove
} from "../controllers/service.controller";

const router = express.Router();

/**
 * @swagger
 * /api/service:
 *   get:
 *     summary: Get all services
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Service list retrieved successfully
 */
router.get("/", getAll);

/**
 * @swagger
 * /api/service/{id}:
 *   get:
 *     summary: Get a service by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the service to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Service retrieved successfully
 */
router.get("/:id", getById);

/**
 * @swagger
 * /api/service:
 *   post:
 *     summary: Create a new service
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - duration
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               duration:
 *                 type: number
 *                 description: Duration in minutes
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Service created successfully
 */
router.post("/", authorizationMiddleware, create);

/**
 * @swagger
 * /api/service/{id}:
 *   put:
 *     summary: Update a service by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the service to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               duration:
 *                 type: number
 *                 description: Duration in minutes
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Service updated successfully
 */
router.put("/:id", authorizationMiddleware, update);

/**
 * @swagger
 * /api/service/{id}:
 *   delete:
 *     summary: Delete a service by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the service to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Service deleted successfully
 */
router.delete("/:id", authorizationMiddleware, remove);

export default router;
