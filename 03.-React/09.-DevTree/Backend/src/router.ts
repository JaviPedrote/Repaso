//cSpell:disable
import { Router } from "express";
import { body } from "express-validator";
import { createUser, getUser, login } from "./handlers/index";
import { handleInputErrors } from "./middleware/validations";
import { authenticate } from "./middleware/auth";

const router = Router();

// Autenticacion y registro
router.post(
  "/api/auth/register",
  [
    body("handle").notEmpty().withMessage("El nombre de usuario es requerido"),
    body("name").notEmpty().withMessage("El nombre es requerido"),
    body("email").isEmail().withMessage("Email no válido"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("La contraseña debe tener al menos 6 caracteres")
  ],
  handleInputErrors,
  createUser
);

router.post(
  "/api/auth/login",
  body("email").isEmail().withMessage("Email no valido"),
  body("password").notEmpty().withMessage("La contraseña puede estar vacía"),
  handleInputErrors,
  login
);

router.get("/user",authenticate, getUser);

export default router;
