import Business, { IBusiness } from "../models/business.model";

export const getAllBusinesses = async (): Promise<IBusiness[]> => {
    return await Business.find()
};

export const getBusinessById = async (id: string): Promise<IBusiness | null> => {
    return await Business.findById(id);
}


export const createBusiness = async (newBusiness: IBusiness): Promise<IBusiness | null> => {
    const business = new Business(newBusiness);
    return await business.save();
}

export const updateBusiness = async (id: string, businessToUpdate: IBusiness): Promise<IBusiness | null> => {

    return await Business.findByIdAndUpdate(
        id,
        businessToUpdate,
        { new: true, runValidators: true }
    );
}


export const deleteBusiness = async (id: string): Promise<IBusiness | null> => {
    return await Business.findByIdAndDelete(id);
};