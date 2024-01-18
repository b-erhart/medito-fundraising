# Medito Fundraising Website

This is my submission for the Medito Fundation's competition to create a simple fundraising website. Visit [this site](https://medito-fnd.pages.dev) for a live demo.

## Table of Contents

- [Overview](#overview)
- [Development, Build, and Deployment](#development-build-and-deployment)
- [Configuration](#configuration)
- [Stripe Integration](#stripe-integration)
- [Source Code](#source-code)
- [Feedback and Change Requests](#feedback-and-change-requests)
- [License](#license)

## Overview

This project is my submission for the Medito Foundation's competition to create a simple fundraising website. It features a clean, modern, and responsive design that is inspired by [Polar](https://polar.sh/). The site is built with a modern and established tech stack, featuring [Vue.js](https://vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Radix Vue](https://www.radix-vue.com/). The project is designed to be easy to configure and customize.

## Development, Build, and Deployment

### Getting Started

To start the development server, run:

```sh
npm run dev
```

To build the project locally, use:

```sh
npm run build
```

### Deployment

Deploy to [Cloudflare Pages](https://pages.cloudflare.com/):

1. Open the "Workers and Pages" menu in your [Cloudflare Dashboard](https://dash.cloudflare.com/) .
2. Click the "Create application" button.
3. Select "Pages" and connect your fork of this repository.
4. Choose a project name, set the branch to "main," and select the "Vue" framework preset.
5. Click "Save and Deploy."

## Configuration

The project is designed to be easily configurable. There are three configuration files, each serving a specific purpose.

### Content Configuration

The website's content is configured via [`src/content.ts`](./src/content.ts). This file defines a single object containing all available settings. Refer to the comments for clarity on each setting.

### Endpoints Configuration

The logic for all communications with external services is implemented in the [`src/endpoints.ts`](./src/endpoints.ts) file. It contains the implementation of:

- `ENDPOINT_UPDATE_INTERVAL`: Define the intervals in which the `getFinancialDetails` and `getLatestDonations` functions are called in milliseconds to fetch live data.
- `getFinancialDetails`: Fetch the fundraising goal and currently donated amount of money from a web service. The function is expected to throw an error if the data cannot be retrieved successfully. If an error is thrown, the function will simply be called again after the amount of time specified in `ENDPOINT_UPDATE_INTERVAL`.
- `getLatestDonations`: Fetch the latest donations from a web service. The function is expected to throw an error if the data cannot be retrieved successfully. If an error is thrown, the function will simply be called again after the amount of time specified in `ENDPOINT_UPDATE_INTERVAL`.
- `sendQuestions`: Send the data submitted via the questions form to a web service. The function is expected to throw an error if the data cannot be sent successfully. If an error is thrown, the UI will display an error message to the user, telling them to reload the page and try again later.

Currently the functions fetch dummy data defined in `src/modules/dummyData.ts`. These calls should be removed and replaced by actual fetching logic. The function source code contains commented out examples for fetching/sending corresponding data from/to web service endpoints. You can use this as a starting point to implement the actual data integration.

### Styles Configuration

The colors used in the application can easily be modified via the [`src/styles.ts`](./src/styles.ts) file.

#### Donation Button

To modify the colors of the donation button, simply modify the corresponding HEX color codes.

#### Base and Accent Colors

The base color is used for the site's background, borders and text elemtents. The accent color is used for stand-out elements such as the progress bar, donation amounts, and so on. Both are not made up of a single color, but instead each color has 11 different shades. There are two ways to set these colors:

**Option 1: Using a predefined Tailwind CSS shaded color (recommended).** Go to the [Tailwind Docs](https://tailwindcss.com/docs/customizing-colors) and look at the available colors. Pick one and copy its name. Then set the corresponding color to `colors.<shaded color name in lowercase letters>`. Example:

```ts
export default {
  // ...
  accentColor: {
    ...colors.amber
  }
  // ...
}
```

**Option 2: Manually define each shade.** Instead of using a predefined color, you can define a shaded color manually. To do this, define the shades' HEX color codes via following attributes in the corresponding color object: `'50'`, `'100'`, `'200'`,`'300'`, `'400'`, `'500'`, `'600'`, `'700'`, `'800'`, `'900'`, `'950'`. The higher the number the darker the shade should be. Example:

```ts
export default {
  // ...
  accentColor: {
    '50': '#f9fafb',
    '100': '#f3f4f6',
    '200': '#e5e7eb',
    '300': '#d1d5db',
    '400': '#9ca3af',
    '500': '#6b7280',
    '600': '#4b5563',
    '700': '#374151',
    '800': '#1f2937',
    '900': '#111827',
    '950': '#030712'
  }
  // ...
}
```

## Stripe Integration

The website currently only supports Stripe integration via [Stripe Payment Links](https://stripe.com/de/payments/payment-links). Users select a currency on the fundraising page and are redirected to Stripe to enter the donation amount and payment details.

An alternative option would be [Stripe Checkout](https://stripe.com/docs/payments/checkout), allowing users to enter the amount directly on the fundraising page. However, this requires a backend service. Personally, I don't feel like the added complexity and potential costs that this solution brings with it is worth it.

If you prefer the Checkout variant though, feel free reach out, and I'll be happy to integrate it.

### Setting up Payment Links

For each currency, create a Payment Link in the [Stripe dashboard](https://dashboard.stripe.com/payment-links/create). For a seamless experience, in the tab "After payment", choose "Don't show confirmation page" and enter the URL `https://<fundraising_site_url>/?success`. This will redirect users back to the fundraising site and display a success message there (for an example see [here](https://medito-fnd.pages.dev/?success)).

## Source Code

Project configuration files are in the root, and the source code is in the `src` folder, structured as follows:

- `src/assets`: static assets
- `src/components`: Vue.js components
- `src/modules`: TypeScript files with application logic

## Feedback and Change Requests

Feel free to reach out if you want any changes to be made, or need help with the setup of the site. Also, I'd be happy to hear some feedback about what you did and what you didn't like about my solution.

## License

This project is licensed under the [MIT License](./LICENSE.txt). Feel free to use, modify, and distribute the code.
