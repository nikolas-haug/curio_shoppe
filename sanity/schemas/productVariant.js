export default {
    title: 'Product variant',
    name: 'productVariant',
    type: 'object',
    fields: [
        {
            title: 'Sizes',
            name: 'sizes',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'XLarge', value: 'xlarge'},
                    {title: 'Large', value: 'large'},
                    {title: 'Medium', value: 'medium'},
                    {title: 'Small', value: 'small'},
                ]
            }
        },
    ]
  }