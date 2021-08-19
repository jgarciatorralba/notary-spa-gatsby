require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Notaría Mínguez`,
    description: `ES: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque blandit egestas. Etiam ac elit a erat dictum imperdiet. In enim nunc, fringilla sit amet dictum non, tempor vel augue. Integer scelerisque sem varius fermentum tincidunt. Mauris sagittis dignissim tortor vel dictum. Nulla eu condimentum leo.`,
    author: `@jorgartor`,
  },
  plugins: [
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
        theme_color: `#663399`,
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
        siteUrl: `http://localhost:8000/`, // https://notariaminguez.com
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
        }
      }
    },
  ],
}
