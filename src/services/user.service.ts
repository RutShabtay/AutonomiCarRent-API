import User, { IUser } from '../models/user.model';
import bcrypt from 'bcrypt';

export const getAllUsers = async () => {
    return await User.find();
};

export const getUserById = async (id: string) => {
    return await User.findById(id);
};

export const createUser = async (newUser: IUser) => {
    const { password } = newUser;
    if (!password) {
        throw new Error('Password is required');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;
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
