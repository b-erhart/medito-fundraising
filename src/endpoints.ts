import { getDummyFinancialDetails, getDummyLatestDonations } from '@/modules/dummyData'
import type { Donation, FinancialDetails } from '@/modules/interfaces'

export const ENDPOINT_UPDATE_INTERVAL = 5000

export async function getFinancialDetails(): Promise<FinancialDetails> {
  // Hint: This function is expected to throw an error if the data can't be fetched successfully.
  // Hint: Make sure your server tells clients not to cache the response, or you may not get live updates.

  // Example implementation:
  // const response = await fetch('https://<endpoint>', {
  //   cache: 'no-cache'
  // })
  // if (!response.ok) {
  //   throw new Error(`Unable to fetch financial details: ${response.status} ${response.statusText}`)
  // }
  // const responseJson = await response.json()
  // return { currency: 'USD', moneyDonated: responseJson.donated, moneyGoal: responseJson.goal }

  return await getDummyFinancialDetails()
}

export async function getLatestDonations(): Promise<Donation[]> {
  // Hint: This function is expected to throw an error if the data can't be fetched successfully.
  // Hint: Make sure your server tells clients not to cache the response, or you may not get live updates.

  // Example implementation:
  // const response = await fetch('https://<endpoint>', {
  //   cache: 'no-cache'
  // })
  // if (!response.ok) {
  //   throw new Error(`Unable to fetch financial details: ${response.status} ${response.statusText}`)
  // }
  // const responseJson = await response.json()
  // return responseJson.donations as Donation[]
  return await getDummyLatestDonations()
}

export async function sendQuestions(email: string, questionsMessage: string) {
  // Hint: This function is expected to throw an error if the data can't be sent successfully.

  // Example implementation:
  // const response = await fetch('http://<endpoint>', {
  //   method: 'POST',
  //   body: JSON.stringify({ email: email, message: questionsMessage })
  // })

  // if (!response.ok) {
  //   throw new Error(`Unable to submit questions message: ${response.status} ${response.statusText}`)
  // }

  console.log(`Question submitted by ${email}: ${questionsMessage}`)
}
