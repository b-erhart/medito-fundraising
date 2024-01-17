import moment from 'moment'
import type { Donation, FinancialDetails } from '@/modules/interfaces'

/**
 * Delay randomly for 20ms to 600ms before returning the data.
 */
export async function delay<T>(data: T): Promise<T> {
  // wait for a random amount of time between 20ms and 600ms
  const waitTime = 20 + Math.floor(Math.random() * 580)
  await new Promise((resolve) => setTimeout(resolve, waitTime))

  return data
}

export async function getDummyFinancialDetails(): Promise<FinancialDetails> {
  return await delay(financialDetails)
}

export async function getDummyLatestDonations(): Promise<Donation[]> {
  if (callsSinceLastUpdate >= callsBetweenUpdates) {
    callsSinceLastUpdate = 0
    callsBetweenUpdates += 2
    const newDonation = futureDonations.pop()

    if (!newDonation) {
      return await delay(latestDonations)
    }

    newDonation.time = new Date(Date.now())
    latestDonations.push(newDonation)
    financialDetails.moneyDonated += newDonation.amount
  } else {
    callsSinceLastUpdate++
  }

  return await delay(latestDonations)
}

const financialDetails: FinancialDetails = {
  currency: 'USD',
  moneyGoal: 15000,
  moneyDonated: 6435.3
}

let callsSinceLastUpdate = 0
let callsBetweenUpdates = 1

const latestDonations: Donation[] = [
  {
    name: 'Ed Hocchuli',
    currency: 'USD',
    amount: 50,
    time: new Date(moment(Date.now()).subtract(3, 'minutes').format())
  },
  {
    name: 'someone',
    currency: 'EUR',
    amount: 10,
    time: new Date(moment(Date.now()).subtract(2, 'hours').format())
  },
  {
    name: 'Taysom Hill',
    currency: 'chf',
    amount: 500,
    time: new Date(moment(Date.now()).subtract(19, 'minutes').format())
  }
]

const futureDonations: Donation[] = [
  {
    name: 'Heinz Strunk',
    currency: 'USD',
    amount: 24,
    time: new Date(Date.now())
  },
  {
    name: 'someone',
    currency: 'EUR',
    amount: 20,
    time: new Date(Date.now())
  },
  {
    name: 'Hans Sturber',
    currency: 'GBP',
    amount: 3000,
    time: new Date(moment(Date.now()).subtract(2, 'hours').format())
  }
]
