import jwt from "jsonwebtoken";
import User from "../models/Users.js";

export default async function handleLogin(req, res) {
    const { email, password } = req.body;

    // checking if user credentials are valid
    try {
        const user = await User.login(email, password);
        const sessionToken = createToken(user._id);
        const username = user.name;

        res.status(200).json({ username, sessionToken });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export function createToken(_sessionId) {
    return jwt.sign({ _id: _sessionId }, process.env.SECRET, {
        expiresIn: "1h",
    });
}
