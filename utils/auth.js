import bcrypt from 'bcrypt'

export const hashPassword = async (password) => await bcrypt.hash(password, 12)
export const comparePasswords = async (password, hashedPassword) => bcrypt.compare(password, hashedPassword)