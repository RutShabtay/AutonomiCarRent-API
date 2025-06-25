import { Request, Response, RequestHandler, NextFunction } from 'express';

export const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user; 

    if (!user) {
        res.status(403).json({ message: 'Access denied. No user information found.' });
        return;
    }

    // Check if the user has the required role
    if (user.role !== 'admin') {
        res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        return;
    }

    next();
};
