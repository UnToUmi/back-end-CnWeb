const jwtProvider = require("../config/jwtProvider")
const userService = require("../services/user.service")

const authenticate = async (req, res, next) => {
    try {

        const token = await req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(404).send({ error: "Token not found" })
        }
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = userService.findUserById(userId);

        req.user = user;


    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
    next();
}

module.exports = authenticate;