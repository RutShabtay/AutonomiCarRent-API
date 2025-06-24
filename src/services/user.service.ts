import User, { IUser } from '../models/user.model';

export const getAllUsers = async () => {
    return await User.find();
};

export const getUserById = async (id: string) => {
    return await User.findById(id);
};

export const createUser = async (newUser: IUser) => {
    const user = new User(newUser);
    return await user.save();
};

export const updateUser = async (id: string, userToUpdate: IUser) => {
    return await User.findByIdAndUpdate(id, userToUpdate, {
        new: true,
        runValidators: true
    });
};

export const deleteUser = async (id: string) => {
    return await User.findByIdAndDelete(id);
};
