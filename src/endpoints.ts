import { getDummyFinancialDetails, getDummyLatestDonations } from '@/modules/dummyData'
import type { Donation, FinancialDetails } from '@/modules/interfaces'

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
