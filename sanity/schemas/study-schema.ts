const study = {
    name: 'studies',
    title: 'Case Studies',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'heading' }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [{
                name: 'alt',
                title: 'Alt',
                type: 'string',
            }]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{  type: "block" }]
        }
    ]
}
export default study;