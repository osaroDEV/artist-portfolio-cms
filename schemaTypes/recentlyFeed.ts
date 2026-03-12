import {defineField, defineType} from 'sanity'

export const recentlyFeed = defineType({
  name: 'recentlyFeed',
  title: 'Recently Feed',
  type: 'document',
  icon: () => '📅',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title (not displayed)',
      type: 'string',
      description: 'Used only for internal CMS organization',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image Post', value: 'image'},
          {title: 'Text Post', value: 'text'},
          {title: 'Exhibition Announcement', value: 'exhibition'},
          {title: 'Mixed (Image + Text)', value: 'mixed'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'localeString',
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'localeString',
        }),
      ],
      hidden: ({document}) =>
        document?.contentType !== 'image' && document?.contentType !== 'mixed',
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'localePortableText',
      hidden: ({document}) =>
        document?.contentType !== 'text' && document?.contentType !== 'mixed',
    }),
    defineField({
      name: 'exhibitionDetails',
      title: 'Exhibition Details',
      type: 'object',
      hidden: ({document}) => document?.contentType !== 'exhibition',
      fields: [
        defineField({
          name: 'exhibitionTitle',
          title: 'Exhibition Title',
          type: 'localeString',
        }),
        defineField({
          name: 'venue',
          title: 'Venue',
          type: 'localeString',
        }),
        defineField({
          name: 'location',
          title: 'Location / City',
          type: 'string',
        }),
        defineField({
          name: 'startDate',
          title: 'Start Date',
          type: 'date',
        }),
        defineField({
          name: 'endDate',
          title: 'End Date',
          type: 'date',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'localePortableText',
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Exhibition', value: 'exhibition'},
          {title: 'Studio', value: 'studio'},
          {title: 'Residency', value: 'residency'},
          {title: 'Publication', value: 'publication'},
          {title: 'Award', value: 'award'},
          {title: 'New Work', value: 'new-work'},
        ],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'linkedGalleryItems',
      title: 'Linked Gallery Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'galleryItem'}],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Date, New to Old',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      contentType: 'contentType',
      date: 'publishedAt',
      media: 'image',
    },
    prepare({title, contentType, date, media}) {
      const formattedDate = date ? new Date(date).toLocaleDateString('en-GB') : ''
      return {
        title,
        subtitle: `${contentType} · ${formattedDate}`,
        media,
      }
    },
  },
})
