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
    ]
}