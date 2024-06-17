import express from "express";
import registerController, {
  forgotPasswordController,
  loginController,
  testController,
  updateProfileController,
} from "../Controllers/AuthController.js";
import { isAdmin, requireSignIn } from "../Middlewares/AuthMiddleware.js";
//router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post("/register", registerController);
router.post("/login", loginController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);
//protected user routes
router.get("/userauth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: "true" });
});
//protectd admin routes
router.get("/adminauth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: "true" });
});
//forgot password
router.post("/forgot-password", forgotPasswordController);
//udate Profile
router.put("/profile", requireSignIn, updateProfileController);

export default router;
