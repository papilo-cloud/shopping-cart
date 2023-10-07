const   CURRENCY_FORMARTTER = new Intl.NumberFormat(undefined, {
    currency:'EUR', style: 'currency'
})
export const formatCurrency = (number: number) => {
  return CURRENCY_FORMARTTER.format(number)
}
