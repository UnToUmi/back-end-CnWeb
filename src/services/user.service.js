const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

async function createUser(userData) {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            throw new Error("User already exist with email: ", email)
        }

        password = await bcrypt.hash(password, 8);

        const user = await User.create({ firstName, lastName, email, password });


        return user;


    } catch (error) {
        throw new Error(error.message)
    }
}

async function findUserById(userId) {
    try {
        const user = await User.findById(userId);
        // .populate("address");
        if (!user) {
            throw new Error("User not found with id: ", userId)
        }
        return user;

    } catch (error) {
        throw new Error(error.message)

    }
}

async function getUserByEmail(email) {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User not found with email: ", email)
        }
        return user;

    } catch (error) {
        throw new Error(error.message)

    }
}

async function getUserProfileByToken(token) {

    try {
        const userId = await jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId)
        if (!user) {
            throw new Error("User not found with id: ", userId)
        }
        return user;

    } catch (error) {
        throw new Error(error.message)

    }
}

async function getAllUsers() {


    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    createUser,
    getUserByEmail,
    findUserById,
    getUserProfileByToken,
    getAllUsers
}