import { Request, Response } from "express";
import { User } from "../Models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function authenticateUser (req: Request, res: Response) {
    try {
        const { username, password } = req.body;

        const users = await User.find({ username });

        const isCorrectPassword = users.length ? bcrypt.compareSync(password, users[0].password) : null;

        if (isCorrectPassword) {
            const accessToken = jwt.sign(
                {
                    username: users[0].username,
                    password: users[0].password,
                },
                'public-key',
                { expiresIn: '24h' },
            );

            res.status(200).json({
                accessToken,
                success: true,
                message: "Success",
            });
        } else {
            throw new Error("User not found");
        }
    } catch (e: any) {
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
}

export { authenticateUser };