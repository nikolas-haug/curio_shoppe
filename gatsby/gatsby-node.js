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

async function turnCategoriesIntoPages({ graphql, actions }) {
    // 1. get the template
    const categoriesTemplate = path.resolve('./src/pages/index.js');
    // 2. query all the categories
    const { data } = await graphql(`
        query {
            categories: allSanityCategory {
                nodes {
                    id
                    name
                }
            }
        }
    `);
    // 3. createpage for that category
    data.categories.nodes.forEach((category) => {
        actions.createPage({
            // url for the new page
            path: `category/${(category.name).toLowerCase()}`,
            component: categoriesTemplate,
            // 4. pass category data to index.js
            context: {
                category: category.name,
                // regex for category
                categoryRegex: `/${category.name}/i`
            }
        })
    });
}

exports.createPages = async (params) => {
    // Create pages dynamically
    // Wait for all promises to be resolved before finishing this function
    await Promise.all([
        // ALL PRODUCTS
        turnProductsIntoPages(params),
        // ALL CATEGORIES
        turnCategoriesIntoPages(params),
    ]);
}