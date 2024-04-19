import { Request, Response } from "express";
import { Product } from "../Models/product";

async function getAllProducts (req: Request, res: Response) {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            products,
        });
    } catch (e: any) {
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
}

async function getProductById (req: Request, res: Response) {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        if (!product) {
            throw new Error("There is no product with that id.");
        }

        res.status(200).json({
            success: true,
            product,
        });
    } catch (e: any) {
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
}

async function addProduct (req: Request, res: Response) {
    try {
        const {
            description,
            price,
            stock,
            name,
        } = req.body;

        const newProduct = new Product({
            description,
            price,
            stock,
            name,
        });

        await newProduct.save();

        res.status(200).json({
            success: true,
            message: 'New product successfully added to database',
        });
    } catch (e: any) {
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
}

async function updateProduct (req: Request, res: Response) {
    try {
        const {
            description,
            price,
            stock,
            name,
        } = req.body;

        const { id } = req.params;

        const productDoc: any = await Product.findById(id);

        productDoc.description = description;
        productDoc.price = price;
        productDoc.stock = stock;
        productDoc.name = name;

        await productDoc.save();

        res.status(200).json({
            success: true,
            message: 'Product successfully modified.',
        });
    } catch (e: any) {
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
}

async function deleteProduct (req: Request, res: Response) {
    try {
        const { id } = req.params;

        await Product.deleteOne({_id: id});

        res.status(200).json({
            success: true,
            message: 'Product successfully deleted.',
        });
    } catch (e: any) {
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
}

export {
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    addProduct,
};