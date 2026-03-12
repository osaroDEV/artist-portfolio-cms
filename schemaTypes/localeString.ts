import {defineField, defineType} from 'sanity'

const supportedLanguages = [
  {id: 'en', title: 'English', isDefault: true},
  {id: 'de', title: 'German'},
  {id: 'fr', title: 'French'},
]

export const localeString = defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: supportedLanguages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: 'string',
      fieldset: lang.isDefault ? undefined : 'translations',
      validation: lang.isDefault ? (Rule) => Rule.required() : undefined,
    }),
  ),
})

export const localeText = defineType({
  name: 'localeText',
  title: 'Localized Text',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: supportedLanguages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: 'text',
      fieldset: lang.isDefault ? undefined : 'translations',
    }),
  ),
})

export const localePortableText = defineType({
  name: 'localePortableText',
  title: 'Localized Portable Text',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: supportedLanguages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading', value: 'h3'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        },
      ],
      fieldset: lang.isDefault ? undefined : 'translations',
    }),
  ),
})
