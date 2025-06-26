import logger from '../logs/logger';
import { Request, Response } from "express";
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser
} from '../services/user.service';

export const getAll = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        logger.info("getAll users got successfully---");
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching Users:", error);
        logger.info("ERROR: (status 500) Error fetching Users")
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const usersById = await getUserById(req.params.id);
        if (!usersById) {
            logger.info("ERROR: (status 404) User not found")
            res.status(404).json({ message: "User not found" });
        }
        logger.info("geById user got successfully---");
        res.status(200).json(usersById);
    }
    catch (error) {
        console.error("Error fetching user by ID:", error);
        logger.info("ERROR: (status 500) Error fetching user by id---")
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const created = await createUser(req.body);
        logger.info("create user got successfully---");
        res.status(201).json(created);
    } catch (error) {
        console.error("Error creating user:", error);
        logger.info("ERROR: (status 500) creating user");
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const updated = await updateUser(req.params.id, req.body);
        if (!updated) {
            logger.info("ERROR: (status 404) User not found")
            res.status(404).json({ message: "User not found" });
        }
        logger.info("update user got successfully---");
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating user:", error);
        logger.info("ERROR: (status 500) Error updating user")
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const deleted = await deleteUser(req.params.id);
        if (!deleted) {
            logger.info("ERROR: (status 404) User not found")
            res.status(404).json({ message: "User not found" });
        }
        logger.info("remove users got successfully---");
        res.status(200).json({ message: "User deleted successfully🎉" });
    }
    catch (error) {
        console.error("Error deleting user:", error);
        logger.info("ERROR: (status 500) deleting user")
        res.status(500).json({ message: "Internal server error😣", error });
    }
}
