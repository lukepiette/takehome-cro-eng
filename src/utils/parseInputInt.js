export const parseInputInt = (input) => {
  const parsed = parseInt(input)
  if (isNaN(parsed)) {
    return 0
  } else {
    return parsed
  }
}
