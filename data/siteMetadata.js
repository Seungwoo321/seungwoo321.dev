// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "SEUNGWOO's TECH LOG",
  author: 'Seungwoo Lee',
  headerTitle: "SEUNGWOO's TECH LOG",
  description: 'JavaScript 등 프론트엔드 개발자의 학습 및 성장 과정을 기록합니다.',
  language: 'ko-KR',
  theme: 'system', // system, dark or light
  siteUrl: 'https://seungwoo321.vercel.app/',
  siteRepo: 'https://github.com/Seungwoo321/seungwoo321.dev',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/template2.png',
  email: 'seungwoo321@gmail.com',
  github: 'https://github.com/Seungwoo321',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  locale: 'ko-KR',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: null,
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'utterances', // supported providers: giscus, utterances, disqus
    // giscusConfig: {
    //   // Visit the link below, and follow the steps in the 'configuration' section
    //   // https://giscus.app/
    //   repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
    //   repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    //   category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    //   categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    //   mapping: 'pathname', // supported options: pathname, url, title
    //   reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
    //   // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
    //   metadata: '0',
    //   // theme example: light, dark, dark_dimmed, dark_high_contrast
    //   // transparent_dark, preferred_color_scheme, custom
    //   theme: 'light',
    //   // theme when dark mode
    //   darkTheme: 'transparent_dark',
    //   // If the theme option above is set to 'custom`
    //   // please provide a link below to your custom theme css file.
    //   // example: https://giscus.app/themes/custom_example.css
    //   themeURL: '',
    // },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: 'pathname', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: 'github-light',
      // theme when dark mode
      darkTheme: 'dark-blue',
    },
  },
  // search: {
  //   provider: 'kbar', // kbar or algolia
  //   kbarConfig: {
  //     searchDocumentsPath: 'search.json', // path to load documents to search
  //   },
  //   provider: 'algolia',
  //   algoliaConfig: {
  //     // The application ID provided by Algolia
  //     appId: 'R2IYF7ETH7',
  //     // Public API key: it is safe to commit it
  //     apiKey: '599cec31baffa4868cae4e79f180729b',
  //     indexName: 'docsearch',
  //   },
  // },
}

module.exports = siteMetadata
