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
      initialValue: {en: 'Contact', de: 'Kontakt'},
    }),
    defineField({
      name: 'emailLabel',
      title: 'Email Section Label',
      type: 'localeString',
      initialValue: {en: 'Email', de: 'E-Mail'},
    }),
    defineField({
      name: 'instagramLabel',
      title: 'Instagram Section Label',
      type: 'localeString',
      initialValue: {en: 'Instagram', de: 'Instagram'},
    }),
    defineField({
      name: 'formNameLabel',
      title: 'Form Name Label',
      type: 'localeString',
      initialValue: {en: 'Name', de: 'Name'},
    }),
    defineField({
      name: 'formEmailLabel',
      title: 'Form Email Label',
      type: 'localeString',
      initialValue: {en: 'Email', de: 'E-Mail'},
    }),
    defineField({
      name: 'formMobileLabel',
      title: 'Form Mobile Label',
      type: 'localeString',
      initialValue: {en: 'Mobile Number', de: 'Mobilnummer'},
    }),
    defineField({
      name: 'formSubjectLabel',
      title: 'Form Subject Label',
      type: 'localeString',
      initialValue: {en: 'Subject', de: 'Betreff'},
    }),
    defineField({
      name: 'formMessageLabel',
      title: 'Form Message Label',
      type: 'localeString',
      initialValue: {en: 'Message', de: 'Nachricht'},
    }),
    defineField({
      name: 'formSubmitLabel',
      title: 'Form Submit Button Label',
      type: 'localeString',
      initialValue: {en: 'Send Message', de: 'Nachricht senden'},
    }),
    defineField({
      name: 'paintingsTitle',
      title: 'Paintings Page Title',
      type: 'localeString',
      initialValue: {en: 'Paintings', de: 'Malerei'},
    }),
    defineField({
      name: 'drawingsTitle',
      title: 'Drawings Page Title',
      type: 'localeString',
      initialValue: {en: 'Drawings', de: 'Zeichnungen'},
    }),
    defineField({
      name: 'photographyTitle',
      title: 'Photography Page Title',
      type: 'localeString',
      initialValue: {en: 'Photography', de: 'Fotografie'},
    }),
    defineField({
      name: 'newsletterTitle',
      title: 'Newsletter Title',
      type: 'localeString',
      initialValue: {en: 'Stay updated', de: 'Bleibe auf dem Laufenden'},
    }),
    defineField({
      name: 'newsletterSubmitLabel',
      title: 'Newsletter Submit Label',
      type: 'localeString',
      initialValue: {en: 'Subscribe', de: 'Abonnieren'},
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
