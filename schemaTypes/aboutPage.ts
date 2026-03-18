import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: () => 'A',
  fields: [
    defineField({
      name: 'portraitImage',
      title: 'Portrait Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'bio',
      title: 'Bio Line',
      type: 'localeString',
    }),
    defineField({
      name: 'artistStatement',
      title: 'Artist Statement',
      type: 'localePortableText',
    }),
    defineField({
      name: 'exhibitions',
      title: 'Exhibitions & Education',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'exhibitionEntry',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Education', value: 'education'},
                  {title: 'Residency (Projects)', value: 'residency'},
                  {title: 'Publication (Bibliography)', value: 'publication'},
                  {title: 'Solo Exhibition', value: 'solo-exhibition'},
                  {title: 'Group Exhibition', value: 'group-exhibition'},
                ]
              }
            },
            {
              name: 'year',
              title: 'Year Range',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title / Exhibition Name / Publication',
              type: 'localeString',
            },
            {
              name: 'institution',
              title: 'Institution / Publisher / Gallery',
              type: 'localeString',
            },
            {
              name: 'description',
              title: 'Description / Degree',
              type: 'localeString',
            },
            {
              name: 'role',
              title: 'Role (e.g. featured artist)',
              type: 'localeString',
            },
            {
              name: 'link',
              title: 'Optional Link',
              type: 'url',
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'networkLinks',
      title: 'Network Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'networkLink',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'url', type: 'url', title: 'URL'},
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'bio.en',
      media: 'portraitImage',
    },
    prepare({title, media}) {
      return {
        title: title || 'About Page',
        media,
      }
    }
  }
})
