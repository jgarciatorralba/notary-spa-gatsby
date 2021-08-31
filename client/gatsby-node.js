const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Services {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/servicios/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/service-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
