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
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching Users:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const usersById = await getUserById(req.params.id);
        if (!usersById) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(usersById);
    }
    catch (error) {
        console.error("Error fetching user by ID:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const created = await createUser(req.body);
        res.status(201).json(created);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const updated = await updateUser(req.params.id, req.body);
        if (!updated) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const deleted = await deleteUser(req.params.id);
        if (!deleted) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully🎉" });
    }
    catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}
