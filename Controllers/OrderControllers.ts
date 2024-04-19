import { Product } from "../Models/product";
import { Request, Response } from "express";
import { Order } from "../Models/order";

async function createOrder (req: Request, res: Response) {
    try {
        const { products } = req.body;

        const modifiedProducts = [];

        let totalPrice = 0;

        for (let i = 0; i < products.length; i++) {
            const { productId, quantity } = products[i];

            const productDoc = await Product.findById(productId);

            if (productDoc) {
                totalPrice += productDoc.price * quantity;

                productDoc.stock -= quantity;

                modifiedProducts.push({
                    product: productDoc,
                    quantity,
                });

                productDoc.save();
            } else {
                throw new Error('There is no product with that id');
            }
        }

        const newOrder = new Order({
            totalPrice,
            products: modifiedProducts,
        });

        await newOrder.save();

        res.status(200).json({
            success: true,
            message: 'New order successfully added to database',
        });
    } catch (e: any) {
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
}

export { createOrder };