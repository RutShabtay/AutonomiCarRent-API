import express from "express";
import {
  getAll,
  getById,
  create,
  update,
  remove
} from "../controllers/business.controller";

const router = express.Router();

/**
 * @swagger
 * /business:
 *   get:
 *     summary: get all businesses
 *     responses:
 *       200:
 *         description: business list retrieved successfully
 */
router.get("/", getAll);

/**
 * @swagger
 * /business/{id}:
 *   get:
 *     summary: get a business by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the business to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: business retrieved successfully
 */
router.get("/:id", getById);

/**
 * @swagger
 * /api/business:
 *   post:
 *     summary: create a new business
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               phone:
 *                  type: string
 *               ownerName:
 *                  type: string
 *     responses:
 *       201:
 *         description: business created successfully
 */
router.post("/", create);

/**
 * @swagger
 * /business/{id}:
 *   put:
 *     summary: update a business by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the business to update
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
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: business updated successfully
 */
router.put("/:id", update);

/**
 * @swagger
 * /business/{id}:
 *   delete:
 *     summary: delete a business by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the business to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: business deleted successfully
 */
router.delete("/:id", remove);


export default router;