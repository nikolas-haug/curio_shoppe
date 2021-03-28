export default {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product name',
            type: 'string',
            description: 'Name of the product',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Product Description',
            type: 'string',
            description: 'Description of the product',
            validation: Rule => Rule.required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price in USD',
            validation: Rule => Rule.required()
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            validation: Rule => Rule.required().min(1),
        }
    ]
}