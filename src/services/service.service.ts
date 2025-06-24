import Service, { IService } from "../models/service.model";

export const getAllServices = async () => {
    return await Service.find();
};

export const getServiceById = async (id: string) => {
    return await Service.findById(id);
};

export const createService = async (newService: IService) => {
    const service = new Service(newService);
    return await service.save();
};

export const updateService = async (id: string, serviceToUpdate: IService) => {
    return await Service.findByIdAndUpdate(id, serviceToUpdate, {
        new: true,
        runValidators: true
    });
};

export const deleteService = async (id: string) => {
    return await Service.findByIdAndDelete(id);
};
