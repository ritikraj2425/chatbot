const bcrypt = require("bcrypt");
require('dotenv').config();
const { generateJwt, generateRefreshToken, verifyJwt } = require("./middleware");
const { Users } = require('../Schemas/schemas');

const AuthenticationRoutes = {
    path: "",
    routes: [
        {
            method: "post",
            path: "/signup",
            handler: async (req, res) => {
                const { name, email, password } = req.body;
                

                if (!name || !email || !password) {
                    res.status(400).send({ message: "All fields are required" });
                    return;
                }

                try {

                    const checkEmail = await Users.findOne({ email });
                    if (checkEmail) {
                        res.status(400).send({ message: "Email is already registered" });
                        return;
                    }
                    const hash = await bcrypt.hash(password, 10);

                    const user = new Users({ ...req.body, password: hash });
                    await user.save();

                    const payload = { name, email };
                    const token = generateJwt(payload);
                    const refreshToken = generateRefreshToken(payload);

                    res.status(200).send({
                        message: "Success",
                        jwtToken: token,
                        refreshToken: refreshToken
                    });
                } catch (e) {
                    res.status(500).send({ message: "Something went wrong" });
                }
            }
        },
        {
            method: "post",
            path: "/login",
            handler: async (req, res) => {
                const { email, password } = req.body;


                if (!email || !password) {
                    res.status(400).send({ message: "All fields are required" });
                    return;
                }

                try {

                    const user = await Users.findOne({ email });
                    if (!user) {
                        res.status(404).send({ message: "User with this email does not exist" });
                        return;
                    }


                    const checkPassword = await bcrypt.compare(password, user.password);
                    if (!checkPassword) {
                        res.status(400).send({ message: "Wrong password" });
                        return;
                    }


                    const payload = { name: user.name, email: user.email };
                    const token = generateJwt(payload);
                    const refreshToken = generateRefreshToken(payload);


                    res.status(200).send({
                        message: "Login successful",
                        jwtToken: token,
                        refreshToken: refreshToken
                    });
                } catch (e) {
                    res.status(500).send({ message: "Something went wrong" });
                }
            }
        },
        {
            method: "post",
            path: "/verifyUser",
            handler: async (req, res) => {
                const { jwttoken, refreshtoken } = req.headers;

                const check = verifyJwt(jwttoken, refreshtoken);
                if (check) {
                    res.status(200).json(check);
                } else {
                    res.status(400).json({ message: "Token expired" });
                }
            }
        }
    ]
};

module.exports = AuthenticationRoutes;
