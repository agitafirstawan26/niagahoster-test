export const currencyFormat = (currency) => {
  if (!currency) {
    return ''
  }
  currency = currency.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  const dot = currency.split('.')
  const remove = dot.splice(0, 1)
  const suffix = dot.join().replace(',', '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  console.log(dot.join(), remove, suffix, 'kaka')
  return {
    prefix: `${remove[0]}.`,
    suffix
  }
}
