import { Request, Response } from "express";
import express from 'express';
import passport from '../config/passport';
import { login } from '../controllers/auth.controller';
import { signUp } from '../controllers/auth.controller';
import jwt from 'jsonwebtoken';
const router = express.Router();




/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized
 */
router.post('/login', login);


/**
 * @swagger
 * /api/auth/signUp:
 *   post:
 *     summary: User sign up
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - role
 *               - username
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *               username:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 *       409:
 *         description: User already exists
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Internal server error
 */

router.post('/signUp', signUp);


/**
 * @swagger
 * /api/auth/google:
 *   get:
 *     summary: Redirects user to Google for authentication
 *     responses:
 *       302:
 *         description: Redirect to Google login page
 */
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
}));



/**
 * @swagger
 * /api/auth/google/callback:
 *   get:
 *     summary: Google OAuth2 callback
 *     responses:
 *       200:
 *         description: Returns JWT token after successful login with Google
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

router.get('/google/callback',
    passport.authenticate('google', { session: false }),
    (req: Request, res: Response) => {
        const user = req.user as any;

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET!,
            { expiresIn: '1h' }
        );

        res.json({ token });
    }
);


export default router;