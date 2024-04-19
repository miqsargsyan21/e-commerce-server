import authMiddleware from "./../Middlewares/auth"
import { Router } from "express";
import {
    getProductById,
    getAllProducts,
    deleteProduct,
    updateProduct,
    addProduct,
} from "../Controllers/ProductControllers";

const router: Router = Router();

router.route('/')
    .post(authMiddleware, addProduct)
    .get(getAllProducts);

router.route('/:id')
    .delete(authMiddleware, deleteProduct)
    .put(authMiddleware, updateProduct)
    .get(getProductById);

export default router;