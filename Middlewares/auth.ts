import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export default function verifyToken(req: Request, res: Response, next: () => void ) {
    try {
        const token = req.headers["x-access-token"];

        if (!token) {
            throw new Error('Token is required.');
        } else {
            if (typeof token === "string") {
                jwt.verify(token, 'public-key', (error) => {
                    if (error) {
                        res.status(403).json({
                            success: false,
                            message: "Forbidden access",
                        });
                    } else {
                        return next();
                    }
                });
            }
        }
    } catch (e: any) {
        res.status(401).json({
            success: false,
            message: e.message,
        });
    }
}