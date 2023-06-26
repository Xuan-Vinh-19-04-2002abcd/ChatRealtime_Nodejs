import jwt from 'jsonwebtoken';
import {createAccessToken} from "../Services/tokenService.js";

const authenticateMiddleware = (req, res, next) => {
    const accessToken = req.headers.authorization?.split(' ')[1];
    const refreshToken = req.cookies.refreshToken;

    if (!accessToken) {
        return res.status(401).json({ message: 'Access token is missing' });
    }

    try {
        const jwtKey = process.env.JWT_SECRET_KEY;
        const decodedToken = jwt.verify(accessToken, jwtKey);
        const userId = decodedToken.id;

        req.userId = userId;

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
            if (!refreshToken) {
                return res.status(401).json({ message: 'Please log in again' });
            }

            try {
                const jwtKey = process.env.JWT_SECRET_KEY;
                const decodedRefreshToken = jwt.verify(refreshToken, jwtKey);
                const userId = decodedRefreshToken.id;

                req.userId = userId;

                const newAccessToken = createAccessToken(userId);

                res.setHeader('Authorization', `Bearer ${newAccessToken}`);

                next();
            } catch (error) {
                return res.status(401).json({ message: 'Refresh token is expired or invalid please login again' });
            }
        } else {
            return res.status(401).json({ message: 'Authentication failed' });
        }
    }
};

export default authenticateMiddleware;
