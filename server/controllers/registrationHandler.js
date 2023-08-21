import User from "../models/Users.js";
import { createToken } from "./loginHandler.js";

export default async function handleRegistration(req, res) {
    const { username, email, password } = req.body;

    try {
        const user = await User.signup(username, email, password);
        const sessionToken = createToken(user._id);
        res.status(201).json({ username, sessionToken });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
