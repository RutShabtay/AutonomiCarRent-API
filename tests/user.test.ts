import { createUser, getAllUsers, getUserById } from '../src/services/user.service';
import User from '../src/models/user.model';
import bcrypt from 'bcrypt';

jest.mock('../src/models/user.model');
jest.mock('bcrypt');

describe('createUser', () => {

    it('should hash the password and save the user.', async () => {
        (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');
        const mockSave = jest.fn().mockResolvedValue({
            _id: '123',
            username: 'test',
            password: 'hashedPassword'
        });

        (User as unknown as jest.Mock).mockImplementation(() => ({
            save: mockSave
        }));

        const newUser = { userName: 'test', password: 'plainPassword' };
        const result = await createUser(newUser as any);

        expect(bcrypt.hash).toHaveBeenCalledWith('plainPassword', 10);
        expect(mockSave).toHaveBeenCalled();
        expect(result).toEqual({ _id: '123', username: 'test', password: 'hashedPassword' });
    });

    it('should throw an Error if password is missing.', async () => {
        const newUser = { userName: 'test' };
        await expect(createUser(newUser as any)).rejects.toThrow('Password is required');
    });

});

describe('getAllUsers', () => {
    it('has to get all users', async () => {
        const mockUsers = [{ userName: 'user1' }, { useName: 'user2' }, { userName: 'user3' }];
        (User.find as jest.Mock).mockResolvedValue(mockUsers);
        const result = await getAllUsers();
        expect(result).toEqual(mockUsers);
    });
});

describe('getUserById', () => {
    it('should get user by id', async () => {
        const mockUser = { id: '123', userName: 'tester', password: '123' };
        (User.findById as jest.Mock).mockResolvedValue(mockUser);
        const result = await getUserById('123');
        expect(result).toEqual(mockUser);
    });
});
