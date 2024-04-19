import { Order } from "../Models/order";
import { User } from "../Models/user";
import bcrypt from "bcrypt";

async function seedUsers () {
    await User.deleteMany({});

    const orders = await Order.find();

    const usersData = [
        {
            orders: orders,
            username: "user1",
            password: await bcrypt.hash("password123", 7),
        },
        {
            username: "admin",
            password: await bcrypt.hash("admin123", 7),
            isAdmin: true,
        }
    ];

    await User.insertMany(usersData);
}

export default seedUsers;