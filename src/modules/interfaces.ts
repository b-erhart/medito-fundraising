export interface ContentConfig {
  titleSection: {
    title: string
    description: string
  }
  donationSection: {
    paymentLinks: {
      currencyDescription: string
      url: string
    }[]
  }
  qnaSection: {
    qnas: {
      question: string
      answer: string
    }[]
  }
  rewardsSection: {
    rewards: {
      title: string
      amount: string
      description: string
    }[]
  }
  thankYouMessage: string
  footerText: string
}

export interface FinancialDetails {
  currency: string // Three digit ISO 4217 currency code (https://www.iban.com/currency-codes)
  moneyGoal: number
  moneyDonated: number
}

export interface Donation {
  name: string
  currency: string // Three digit ISO 4217 currency code (https://www.iban.com/currency-codes)
  amount: number
  time: Date
}
