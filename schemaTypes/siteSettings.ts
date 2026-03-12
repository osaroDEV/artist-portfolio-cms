import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'SEO Site Title',
      type: 'localeString',
      description: 'Default title used in browser tabs and search engines',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'localeText',
    }),
    defineField({
      name: 'artistStatement',
      title: 'Artist Statement',
      type: 'localePortableText',
    }),
    defineField({
      name: 'aboutText',
      title: 'About / Bio Text',
      type: 'localePortableText',
    }),
    defineField({
      name: 'cvText',
      title: 'CV / Exhibition History',
      type: 'localePortableText',
      description: 'Full CV with exhibitions, residencies, and education',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'impressum',
      title: 'Impressum / Legal Notice',
      type: 'localePortableText',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'localeString',
    }),
    defineField({
      name: 'contactTitle',
      title: 'Contact Page Title',
      type: 'localeString',
      initialValue: {en: 'Contact', de: 'Kontakt', fr: 'Contact'},
    }),
    defineField({
      name: 'emailLabel',
      title: 'Email Section Label',
      type: 'localeString',
      initialValue: {en: 'Email', de: 'E-Mail', fr: 'Email'},
    }),
    defineField({
      name: 'instagramLabel',
      title: 'Instagram Section Label',
      type: 'localeString',
      initialValue: {en: 'Instagram', de: 'Instagram', fr: 'Instagram'},
    }),
    defineField({
      name: 'formNameLabel',
      title: 'Form Name Label',
      type: 'localeString',
      initialValue: {en: 'Name', de: 'Name', fr: 'Nom'},
    }),
    defineField({
      name: 'formEmailLabel',
      title: 'Form Email Label',
      type: 'localeString',
      initialValue: {en: 'Email', de: 'E-Mail', fr: 'Email'},
    }),
    defineField({
      name: 'formMobileLabel',
      title: 'Form Mobile Label',
      type: 'localeString',
      initialValue: {en: 'Mobile Number', de: 'Mobilnummer', fr: 'Numéro de mobile'},
    }),
    defineField({
      name: 'formMessageLabel',
      title: 'Form Message Label',
      type: 'localeString',
      initialValue: {en: 'Message', de: 'Nachricht', fr: 'Message'},
    }),
    defineField({
      name: 'formSubmitLabel',
      title: 'Form Submit Button Label',
      type: 'localeString',
      initialValue: {en: 'Send Message', de: 'Nachricht senden', fr: 'Envoyer le message'},
    }),
    defineField({
      name: 'paintingsTitle',
      title: 'Paintings Page Title',
      type: 'localeString',
      initialValue: {en: 'Paintings', de: 'Malerei', fr: 'Peintures'},
    }),
    defineField({
      name: 'drawingsTitle',
      title: 'Drawings Page Title',
      type: 'localeString',
      initialValue: {en: 'Drawings', de: 'Zeichnungen', fr: 'Dessins'},
    }),
    defineField({
      name: 'photographyTitle',
      title: 'Photography Page Title',
      type: 'localeString',
      initialValue: {en: 'Photography', de: 'Fotografie', fr: 'Photographie'},
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
