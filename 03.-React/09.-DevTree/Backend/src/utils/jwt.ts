import jwt, {JwtPayload} from 'jsonwebtoken';



export const generateJWT = (payload: JwtPayload): string => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '2d'
    });

    return token;
}
