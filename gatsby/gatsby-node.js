const path = require('path');

async function turnProductsIntoPages({ graphql, actions }) {
    // 1. get template for this page
    const productTemplate = path.resolve('./src/templates/Product.js');
    // 2. query all products
    const { data } = await graphql(`
        query {
            products: allSanityProduct {
                nodes {
                    id
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    // 3. loop over each product and cretae a page for it
    data.products.nodes.forEach(product => {
        actions.createPage({
            // url for the new page
            path: `product/${product.slug.current}`,
            component: productTemplate,
            context: {
                slug: product.slug.current
            }
        })
    })
}

exports.createPages = async (params) => {
    // Create pages dynamically
    // Wait for all promises to be resolved before finishing this function
    await Promise.all([
        // ALL PRODUCTS
        turnProductsIntoPages(params),
    ]);
}