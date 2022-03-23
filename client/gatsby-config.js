require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Notaría Mínguez`,
    description: `En la Notaría Mínguez, ubicada en Vic, nos ponemos a su entera disposición para resolver cualquier duda relacionada con trámites y actos jurídicos. Ofrecemos un asesoramiento personalizado, profesional y de calidad, esencial para la toma de decisiones y la preparación de documentos notariales. Elaboramos sus escrituras de compraventa, testamento, donación y creación de empresas, entre otros.`,
    author: `jgarciatorralba`,
    keywords: [
      `Notaría`,
      `Notaria`,
      `Jorge Mínguez Balaguer`,
      `Vic`,
      `Servicios notariales`,
      `Serveis notarials`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
          cookieName: "cookies_agreed",
          anonymize: true,
          allowAdFeatures: false,
        },
        environments: ["production", "development"],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Notaría Mínguez en Vic`,
        short_name: `Notaría Mínguez`,
        lang: `es`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#22223b`,
        display: `minimal-ui`,
        icon: `src/assets/favicon/emblem.png`,
        localize: [
          {
            start_url: `/ca/`,
            lang: `ca`,
            name: `Notaria Mínguez a Vic`,
            short_name: `Notaria Mínguez`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/sobre-nosotros/`, `/servicios/`, `/contacto/`],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`es`, `ca`],
        defaultLanguage: `es`,
        siteUrl: process.env.SITE_URL,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets\/svgs/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        },
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/services`,
      },
    },
  ],
}
