import type { ContentConfig } from '@/modules/interfaces'

export const content: ContentConfig = {
  // Title section consisting of the fundraiser title description.
  titleSection: {
    // Fundraiser title.
    title: 'Translating Our Meditations into 3 New Languages',
    // Fundraiser description (HTML elements can be used here).
    description: ` 
      With the rise in popularity of medito, the request for meditations in more languages
      has increased significantly, to the point that is has become the most popular request.<br><br>
      Translating our meditations into French, Portuguese, and Spanish will provide millions more
      people with our free meditations. Since medito is run largely by volunteers, we don't have
      the capacity to do the translations ourselves. That is why we want to hire InterAudio Corp.
      to translate and record our meditations. Since this high-quality service is not cheap, we
      need your help. To make our meditations accessible to millions more people, we will need $15,000.
      `
  },
  // Donation section consisting of the live status of the fundraiser and the donation button.
  donationSection: {
    // Define available currencies and their corresponding Stripe Payment Links.
    paymentLinks: [
      {
        // Text that will be displayed in the currency drop-down.
        currencyDescription: '$ USD',
        // URL of the Stripe Payment Link for US-Dollar donations.
        url: 'https://donate.stripe.com/test_fZecQ9eXy16e7xSfYZ'
      },
      {
        currencyDescription: '€ EUR',
        url: 'https://donate.stripe.com/test_cN203n8za16ef0k5kk'
      },
      {
        currencyDescription: '£ GBP',
        url: 'https://donate.stripe.com/test_3cs17rg1Cg184lG28a'
      },
      {
        currencyDescription: '₹ INR',
        url: 'https://donate.stripe.com/test_fZe17r02E4iq5pK28b'
      }
    ]
  },
  // Q&A section consisting of collapsable Q&As aswell as a question form.
  qnaSection: {
    qnas: [
      {
        question: 'Why did you choose these three languages?',
        answer:
          "We chose these languages based on an analysis of our user base and hired a market research firm to determine the languages that would reach the most possible users. We're sorry if your language is not part of the campaign, but we can't possibly add support for all languages at once."
      },
      {
        question: 'Will you add more languages in the future?',
        answer:
          'That depends on the outcome of this fundraiser, and whether the new languages will have the anticipated effect. If this project is successful, we will probably add more languages in the future.'
      },
      {
        question: "What happens if you don't raise the targetted amount of money?",
        answer:
          'Depending on how much money we raise, we may do translations to one or two languages. If it is too little for that, the money will go towards the development of the app and our server infrastructure.'
      }
    ]
  },
  // Rewards section displaying possible rewards.
  rewardsSection: {
    rewards: [
      {
        title: 'Medito International Postcard',
        amount: '$8',
        description:
          'We will send you a postcard with the "Medito International" motive, personally signed by all team members.'
      },
      {
        title: 'Medito International Mug',
        amount: '$15',
        description:
          'You will receive our limited edition campaign mug. This is the only way to get one.'
      },
      {
        title: 'Medito International Shirt',
        amount: '$30',
        description:
          'You will receive our limited edition campaign shirt. This is the only way to get one.'
      },
      {
        title: 'Shirt, Mug and Cap',
        amount: '$100',
        description:
          'Our top supportes will receive all the campaign swag we have to offer. Also, you will receive an exclusive campaign baseball cap.'
      }
    ]
  },
  // Message to display upon successful donation.
  thankYouMessage: 'Donation successful. Thank you for your support!',
  // Text to display in the page footer (HTML elements can be used here).
  footerText: `
    Medito Foundation or in Dutch, Stichting Medito Non-profit organisation registered in the
    Netherlands 🇳🇱 hi@meditofoundation.org - KvK-nummer: 75284251 - RSIN: 860222627
  `
}
