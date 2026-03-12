import {defineField, defineType} from 'sanity'

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  icon: () => '🖼',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
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
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Paintings', value: 'paintings'},
          {title: 'Drawings', value: 'drawings'},
          {title: 'Photography', value: 'photography'},
          {title: 'Installations', value: 'installations'},
          {title: 'Works on Paper', value: 'works-on-paper'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g. "100 x 120 cm" or "A4"',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'Year the work was created',
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'localeString',
      description: 'e.g. "Pencil on paper", "Pigment ink on canvas"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localePortableText',
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'localeString',
      description: 'Series name if part of a series (e.g. "SERIES 2011-2016 | PIGMENT INK")',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Year, New to Old',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{field: 'category', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      category: 'category',
      media: 'image',
    },
    prepare({title, category, media}) {
      return {
        title: title || 'Untitled',
        subtitle: category,
        media,
      }
    },
  },
})
