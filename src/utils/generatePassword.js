import { customAlphabet } from "nanoid"

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz"
export const generatePassword = customAlphabet(alphabet, 20)
