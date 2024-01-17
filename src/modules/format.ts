export function formatCurrency(amount: number, currency: string): string {
  try {
    return amount.toLocaleString('en-us', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    })
  } catch {
    return '?'
  }
}
