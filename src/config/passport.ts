import passport from 'passport';
import { findOrCreateUser } from '../services/auth.service';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
dotenv.config();

passport.use(new GoogleStrategy(
    {
        clientID: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET!,
        callbackURL: process.env.GOOGLE_CALLBACK_URL!
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const email = profile.emails?.[0].value;

            if (!email) {
                return done(new Error('No email found in Google profile'));
            }

            // כאן את מחפשת/יוצרת את המשתמש במסד נתונים
            const user = await findOrCreateUser(email, profile.displayName);
            done(null, user);
        } catch (error) {
            done(error);
        }
    }
));

export default passport;
