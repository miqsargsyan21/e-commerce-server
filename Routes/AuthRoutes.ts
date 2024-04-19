import { authenticateUser } from "../Controllers/AuthControllers";
import { Router } from "express";

const router: Router = Router();

router.route('/login')
    .post(authenticateUser);

export default router;