import User from "../models/User";
import { comparePasswords, hashPassword } from "../utils/auth";

export const signUp = async (req) => {
    const { username, password, email } = req.body;
    const hashedPassword = await hashPassword(password) 
    await User.create({
        password: hashedPassword,
        username,
        email,
    })
}

export const login = async (req) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username })

    if (!user) {
        throw AppError(404, 'Kullanıcı bulunamadı!')
    }
    
    const isValid = await comparePasswords(password, user.password)

    if (!isValid) {
        throw AppError(401, 'Giriş yapmadınız!')
    }

    // jwt eklenecek
}