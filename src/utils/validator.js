import { isEmpty, isNil } from "ramda"
import * as yup from "yup"

const isNilOrEmpty = (thing) => isNil(thing) || isEmpty(thing)

export const podOrMachineNameValidator = yup
  .string()
  .min(3, "Name must be at least 5 characters")
  .max(50, "Name must be less than 50 characters")
  .matches(new RegExp("^[a-zA-Z0-9_\\-\\s]*$"), "Invalid Name")
  .required("Required")

export const dockerArgumentsValidator = yup.string().max(2000).nullable()

export const dockerImageNameValidator = yup
  .string()
  .min(3, "Container image name is too short")
  .required("Container image name is required")
  .nullable()

export function emptyStringToNull(value, originalValue) {
  if (typeof originalValue === "string" && originalValue === "") {
    return null
  }
  return value
}

export const tcpPortValidator = yup
  .number()
  .integer()
  .positive("Must be positive")
  .lessThan(65535, "A valid port must be less than 65535")
  .transform(emptyStringToNull)
  .nullable()
  .typeError("Port must be a number")

export const httpPortValidator = yup
  .number()
  .integer()
  .positive("Must be positive")
  .when("tcpPort", {
    is: isNilOrEmpty,
    then: (schema) => schema,
    otherwise: (schema) =>
      schema.notOneOf([yup.ref("tcpPort")], "TCP and HTTP ports cannot be equal"),
  })
  .lessThan(65535, "A valid port must be less than 65535")
  .transform(emptyStringToNull)
  .nullable()
  .typeError("Port must be a number")

export const diskVolumeValidator = (diskRemaining) =>
  yup
    .number()
    .lessThan(diskRemaining - 2, "Not enough disk remaining")
    .integer("Volume disk must be an integer")
    .typeError("Volume Disk must be a number")

export const powerLimitValidator = yup
  .number()
  .min(1, "Power limit must be greater than 1")
  .max(100, "Power limit must be less than or equal to 100")

export const pathValidator = yup
  .string()
  .notOneOf(["/"])
  .max(100, "Mount path must be less than 100 characters")

export const containerDiskValidator = yup
  .number()
  .required("Container disk is required")
  .integer("Container disk must be an integer")
  .positive("Container disk must be positive")
  .min(5, "Container disk must be at least 5GB")
  .typeError("Container disk must be a number")
