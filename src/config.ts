export interface Config {
  titleSection: {
    title: string
    shortDescription: string
  }
  donationSection: {
    paymentLinks: {
      currencyDescription: string
      url: URL
    }[]
  }
  qnaSection: {
    contactForm: {
      enabled: boolean
      heading: string
    }
    qnas: {
      question: string
      answer: string
    }[]
  }
  rewardsSection: {
    currencySymbol: string
    rewards: {
      title: string
      amount: number
      description: string
    }[]
  }
}

export const config: Config = {
  titleSection: {
    title: 'Our Fundraising Campaign',
    shortDescription:
      "This is just a simple example for a fundraising campaign. It doesn't really do anything, except showing how a campaign might look."
  },
  donationSection: {
    paymentLinks: [
      {
        currencyDescription: '$ US-Dollar',
        url: new URL('https://donate.stripe.com/test_fZecQ9eXy16e7xSfYZ')
      },
      {
        currencyDescription: '€ Euro',
        url: new URL('https://donate.stripe.com/test_cN203n8za16ef0k5kk')
      }
    ]
  },
  qnaSection: {
    contactForm: {
      enabled: true,
      heading: 'Any more questions?'
    },
    qnas: [
      {
        question: 'This is the most pressing Question people have about our fundraiser.',
        answer:
          "This is indeed a very important question. And the answer is that... we don't actually know"
      },
      {
        question:
          "Another question people have about our fundraiser and this is a really really really long question. Why does it have to be so long you may ask. Well, that's because we need to test some stuff, okay? You can't really test without testing out the limits...",
        answer: 'Well at least the answer is short ;)'
      },
      {
        question: 'One final question',
        answer:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer'
      }
    ]
  },
  rewardsSection: {
    currencySymbol: '$',
    rewards: [
      {
        title: 'Thank You Letter',
        amount: 8.0,
        description:
          'We will send you a letter personally signed by all team members, thanking you for your support.'
      },
      {
        title: 'Mug',
        amount: 15.0,
        description:
          'You will receive our limited edition campaign mug. This is the only way to get one.'
      },
      {
        title: 'Shirt',
        amount: 30.0,
        description:
          'You will receive our limited edition campaign shirt. This is the only way to get one.'
      },
      {
        title: 'Shirt, Mug and Cap',
        amount: 100.0,
        description:
          'Our top supportes will receive all the campaign swag we have to offer. Also, you will receive an exclusive handmade campaign cap.'
      }
    ]
  }
}
