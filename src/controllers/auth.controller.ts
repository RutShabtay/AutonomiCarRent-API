import logger from '../logs/logger';
import { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            logger.info("ERROR: (status 400) Email and password are required")
            res.status(400).json({ message: 'Email and password are required' }); return;
        }

        const user = await User.findOne({ email });
        if (!user) {
            logger.info("ERROR: (status 404) User not found")
            res.status(404).json({ message: 'User not found' });
            return;
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            logger.info("ERROR: (status 401) Invalid credentials")
            res.status(401).json({ message: 'Invalid credentials' });
            return;

        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user!._id, role: user.role },
            process.env.JWT_SECRET!,
            { expiresIn: '2h' }
        )
        logger.info("Login successful🎉🎉🎉")

        res.status(200).json({
            message: 'Login successful🎉🎉🎉', token
        });

    } catch (error) {
        logger.info("Error during login")
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error😣', error });
        return;
    }
};



export const signUp = async (req: Request, res: Response) => {
    try {
        const { username, password, email, role } = req.body;

        if (!email || !password || !role || !username) {
            res.status(400).json({ message: 'Email, password, role and username are required' });
            return;
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).json({ message: 'User already exists' });
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser: IUser = new User({
            email,
            password: hashedPassword,
            role,
            username
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'User created successfully🎉🎉🎉',
            user: {
                id: savedUser._id,
                email: savedUser.email,
                role: savedUser.role
            }
        });
    }
    catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error😣', error });
    }
}