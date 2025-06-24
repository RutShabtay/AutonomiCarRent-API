import { Request, Response } from "express";
import {
    getAllBusinesses as getAllFromService,
    getBusinessById as getByIdFromService,
    createBusiness as createInService,
    updateBusiness as updateInService,
    deleteBusiness as deleteInService,
} from "../services/business.service";


export const getAll = async (req: Request, res: Response) => {
    try {
        const business = await getAllFromService();
        res.status(200).json(business);
    } catch (error) {
        console.error("Error fetching businesses:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const businessById = await getByIdFromService(req.params.id);
        if (!businessById) {
            res.status(404).json({ message: "Business not found" });
        }
        res.status(200).json(businessById);
    }
    catch (error) {
        console.error("Error fetching business by ID:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        console.log("Creating business with data:");
        const created = await createInService(req.body);
        console.log("Business created successjjjfully:", created);
        res.status(201).json(created);
    } catch (error) {
        console.error("Error creating business:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const updated = await updateInService(req.params.id, req.body);
        if (!updated) {
            res.status(404).json({ message: "Business not found" });
        }
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating business:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const deleted = await deleteInService(req.params.id);
        if (!deleted) {
            res.status(404).json({ message: "Business not found" });
        }
        res.status(200).json({ message: "Business deleted successfully🎉" });
    }
    catch (error) {
        console.error("Error deleting business:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}
