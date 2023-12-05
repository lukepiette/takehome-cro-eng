import { isEmpty, trim, isNil } from "ramda"

export const sanitizeEnv = (env) => {
  return env
    ?.map(({ key, value }) => ({
      key: trim(key),
      value: trim(value),
    }))
    .filter(({ key, value }) => !isEmpty(key) && !isEmpty(value) && !isNil(key) && !isNil(value))
}
