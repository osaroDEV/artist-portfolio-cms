import {defineField, defineType} from 'sanity'

export const series = defineType({
  name: 'series',
  title: 'Series',
  type: 'document',
  icon: () => '📚',
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
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Series',
      }
    },
  },
})
