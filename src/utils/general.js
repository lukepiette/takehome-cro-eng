import { converge, divide, sum, length } from "ramda"

export const average = converge(divide, [sum, length])
