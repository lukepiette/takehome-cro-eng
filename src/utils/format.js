export const formatCurrencyStringToCents = (currency) => parseFloat(currency) * 100

export const formatCentsToCurrencyString = (cents) => (cents / 100).toFixed(2)
