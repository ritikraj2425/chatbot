require('dotenv').config();
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;
const refreshSecret = process.env.REFRESH_SECRET;

function generateJwt(payload) {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "3d" });
    return token;
}

function generateRefreshToken(payload) {
    const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: "7d" });
    return refreshToken;
}

function jwtVerification(jwtToken) {
    try {
        const payload = jwt.verify(jwtToken, jwtSecret);
        return payload;
    } catch (err) {
        return false;
    }
}

function refreshVerification(refreshToken) {
    try {
        const payload = jwt.verify(refreshToken, refreshSecret);
        return payload;
    } catch (err) {
        return false;
    }
}

function verifyJwt(jwtToken, refreshToken) {
    const jwtPayload = jwtVerification(jwtToken);
    const refreshPayload = refreshVerification(refreshToken);

    if (jwtPayload && refreshPayload) {
        return {
            message: "Valid user",
            credentials: {
                payload: jwtPayload,
                jwtToken: jwtToken,
                refreshToken: refreshToken
            }
        };
    }

    if (!jwtPayload && refreshPayload) {
        const newPayload = {
            name: refreshPayload.name,
            username: refreshPayload.username,
            email: refreshPayload.email
        };
        const newJwtToken = generateJwt(newPayload);

        return {
            message: "Valid user",
            credentials: {
                payload: refreshPayload,
                jwtToken: newJwtToken,
                refreshToken: refreshToken
            }
        };
    }

    if (jwtPayload && !refreshPayload) {
        const newPayload = {
            name: jwtPayload.name,
            username: jwtPayload.username,
            email: jwtPayload.email
        };
        const newRefreshToken = generateRefreshToken(newPayload);

        return {
            message: "Valid user",
            credentials: {
                payload: jwtPayload,
                jwtToken: jwtToken,
                refreshToken: newRefreshToken
            }
        };
    }

    return false;
}

module.exports = {
    generateJwt,
    generateRefreshToken,
    jwtVerification,
    refreshVerification,
    verifyJwt
};
