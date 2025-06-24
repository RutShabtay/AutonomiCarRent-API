import express from "express";
import {
    getAll,
    getById,
    create,
    update,
    remove
} from "../controllers/meeting.controller";

const router = express.Router();

/**
 * @swagger
 * /api/meeting:
 *   get:
 *     summary: Get all meetings
 *     responses:
 *       200:
 *         description: Meeting list retrieved successfully
 */
router.get("/", getAll);

/**
 * @swagger
 * /api/meeting/{id}:
 *   get:
 *     summary: Get a meeting by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the meeting to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Meeting retrieved successfully
 */
router.get("/:id", getById);

/**
 * @swagger
 * /api/meeting:
 *   post:
 *     summary: Create a new meeting
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - date
 *             properties:
 *               title:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               location:
 *                 type: string
 *               participants:
 *                 type: array
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Meeting created successfully
 */
router.post("/", create);

/**
 * @swagger
 * /api/meeting/{id}:
 *   put:
 *     summary: Update a meeting by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the meeting to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               location:
 *                 type: string
 *               participants:
 *                 type: array
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Meeting updated successfully
 */
router.put("/:id", update);

/**
 * @swagger
 * /api/meeting/{id}:
 *   delete:
 *     summary: Delete a meeting by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the meeting to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Meeting deleted successfully
 */
router.delete("/:id", remove);

export default router;
