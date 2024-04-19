import ProductRoutes from "./ProductRoutes";
import Routes, { Express } from 'express';
import OrderRoutes from "./OrderRoutes";
import AuthRoutes from "./AuthRoutes";

const router: Express = Routes();

router.use('/product', ProductRoutes);
router.use('/order', OrderRoutes);
router.use('/auth', AuthRoutes);

export default router;