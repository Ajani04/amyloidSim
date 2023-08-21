import mongoose from "mongoose";
import bcrypt from "bcrypt";

mongoose.set("strictQuery", false);

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

// static signup method
userSchema.statics.signup = async function (username, email, password) {
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("This email already exists, try again!");
    }

    // hashing the password for new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({
        name: username,
        email,
        password: hashedPassword,
    });

    return user;
};

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });

    if (!user) {
        throw Error("Incorrect email or Password! Try again...");
    }
    const expectedPassword = await bcrypt.compare(password, user.password);

    if (!expectedPassword) {
        throw Error("Incorrect email or Password! Try again...");
    }

    // otherwise
    return user;
};

// creating and exporting the User model
const User = mongoose.model("User", userSchema);
export default User;
