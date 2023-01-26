import bcrypt from "bcrypt";
import { generateToken, loginService } from "../services/auth.service.js";

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    try {
        const admin = await loginService(email);

        if (!admin) {
            return res.status(404).json({ message: "User or password not found" });
        }

        const passwordIsValid = await bcrypt.compare(password, admin.password);

        if (!passwordIsValid) {
            return res.status(404).json({ message: "User or password not found" });
        }

        const token = generateToken(admin.id);

        res.send({token});
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}