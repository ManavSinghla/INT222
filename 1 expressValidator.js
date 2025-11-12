import express from "express";
const app = express();
import { body, validationResult } from "express-validator";

app.use(express.json());
[
    body("name")
        .notEmpty()
        .withMessage("Name is required"),
    body("email")
        .isEmail()
        .withMessage("Invalid email address"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
],
(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send("User data is valid");
}
