module.exports = {
  siteMetadata: {
    title: `Notaría Mínguez`,
    description: `ES: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque blandit egestas. Etiam ac elit a erat dictum imperdiet. In enim nunc, fringilla sit amet dictum non, tempor vel augue. Integer scelerisque sem varius fermentum tincidunt. Mauris sagittis dignissim tortor vel dictum. Nulla eu condimentum leo.`,
    author: `@jgarciatorralba`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/demo/emblem.png`,
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
  ],
}
