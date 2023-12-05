import { gql } from "@apollo/client"

export const COUNTRY_CODES = gql`
  query CountryCodes {
    countryCodes
  }
`
