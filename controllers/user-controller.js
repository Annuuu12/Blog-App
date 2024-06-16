import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if(!users || users.length === 0) {   //
        return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
    const {name, email, password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch(err) {
        return console.log(err);
    }
    if (existingUser) {
        return res.status(400).json({ message: "User already exists"});
    }
    const hashedPassword = bcrypt.hashSync(password, 8);   //

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: [],
    });

    try { 
        await user.save();
    } catch(err) {
        return console.log(err);
    }
    return res.status(201).json( {user} );
}

export const login = async (req, res, next) => {
    const { email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch(err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(404).json({ message: "Couldn't find user with this id"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect) {
        return res.status(400).json({message: "Incorrect password"});
    }
    return res.status(200).json({message: "LoggedIn successfully"});

}






