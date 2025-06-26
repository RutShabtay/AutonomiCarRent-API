import logger from '../logs/logger';
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
        logger.info("getAll function turn on---")
    } catch (error) {
        console.error("Error fetching businesses:", error);
        logger.info("ERROR: (status 500) Error fetching businesses")
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const businessById = await getByIdFromService(req.params.id);
        if (!businessById) {
            res.status(404).json({ message: "Business not found" });
        }
        logger.info("getAll function turn on---");
        res.status(200).json(businessById);
    }
    catch (error) {
        console.error("Error fetching business by ID:", error);
        logger.info("Error fetching business by ID");
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        logger.info("Creating business with data");
        console.log("Creating business with data:");
        const created = await createInService(req.body);
        logger.info("Business created successfully");
        console.log("Business created successfully:", created);
        res.status(201).json(created);
    } catch (error) {
        logger.info("Error(status 500) creating business");
        console.error("Error creating business:", error);
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const updated = await updateInService(req.params.id, req.body);
        if (!updated) {
            logger.info("Error in update (status 404) Business not found");
            res.status(404).json({ message: "Business not found" });
        }
        logger.info("update got successfully---");
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating business:", error);
        logger.info("ERROR: (status 500) Error updating business");
        res.status(500).json({ message: "Internal server error😣", error });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const deleted = await deleteInService(req.params.id);
        if (!deleted) {
            logger.info("ERROR: (status 404) Business not found");
            res.status(404).json({ message: "Business not found" });
        }
        logger.info("remove got successfully---");
        res.status(200).json({ message: "Business deleted successfully🎉" });
    }
    catch (error) {
        console.error("Error deleting business:", error);
        logger.info("ERROR: (status 500) Error deleting business");
        res.status(500).json({ message: "Internal server error😣", error });
    }
}
