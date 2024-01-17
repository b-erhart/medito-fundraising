import { getDummyFinancialDetails, getDummyLatestDonations } from '@/modules/dummyData'

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

export async function getFinancialDetails(): Promise<FinancialDetails> {
  // TODO: implement logic to fetch these details from a web service (don't change the function signature!)
  return await getDummyFinancialDetails()
}

export async function getLatestDonations(): Promise<Donation[]> {
  // TODO: implement logic to fetch these details from a web service (don't change the function signature!)
  return await getDummyLatestDonations()
}

export function sendQuestions(email: string, questionsMessage: string) {
  // TODO: implement logic to upload message to a web service
  console.log(`Question submitted by ${email}: ${questionsMessage}`)
}
