/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({
  actions,
  graphql
}) => {
  const {
    createPage
  } = actions;

  const patternTemplate = path.resolve('src/templates/pattern.js');
  const tagTemplate = path.resolve('src/templates/tag.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              tags
              title
              description
              source
              demo
              photo {
                childImageSharp {
                  fluid(maxHeight: 250, maxWidth: 350, quality: 100) {
                    aspectRatio
                    src
                    sizes
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const tags = {};
    result.data.allMarkdownRemark.edges.forEach(({
      node
    }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach((tag) => {
          if (!tags[tag]) {
            tags[tag] = [];
          }
          tags[tag].push(node);
        });
      }
      createPage({
        path: node.frontmatter.path,
        component: patternTemplate,
      });
    });

    Object.keys(tags).forEach((tag) => {
      createPage({
        path: `/tag/${tag.toLowerCase()}`,
        component: tagTemplate,
        context: {
          posts: tags[tag],
          title: tag,
        },
      });
    })

    return Promise.resolve();
  });
};
