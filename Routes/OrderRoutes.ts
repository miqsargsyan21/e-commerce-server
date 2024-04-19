import { createOrder } from "../Controllers/OrderControllers";
import { Request, Response, Router } from "express";
import authMiddleware from "./../Middlewares/auth";

const router: Router = Router();

router.route('/')
    .post(authMiddleware, createOrder);

router.route('/:id')
    .get((req: Request, res: Response) => {
        res.send('listOrdersForCustomer');
    });

router.route('/customer/:customerId')
    .get((req: Request, res: Response) => {
        res.send('getOrdersByCustomerId');
    });

export default router;