import User from '../models/user.model';

export async function findOrCreateUser(email: string, name: string) {
    let user = await User.findOne({ email });

    if (!user) {
        user = await User.create({
            email,
            fullName: name,
            google: true,
            username: name,
            password: '1444', // סיסמה "פיקטיבית"
        });
    }

    return user;
}
