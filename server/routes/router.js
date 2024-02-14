import { Express } from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/paymentController";

const router = Express.Router();

router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;
