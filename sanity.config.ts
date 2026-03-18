import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ella Becker Studio',
  projectId: '2pbl3mwi',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings'),
              ),
            S.listItem()
              .title('About Page')
              .id('aboutPage')
              .child(
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage'),
              ),
            S.divider(),
            S.listItem()
              .title('Gallery Items')
              .schemaType('galleryItem')
              .child(
                S.documentTypeList('galleryItem')
                  .title('Gallery Items')
                  .defaultOrdering([{field: 'order', direction: 'asc'}]),
              ),
            S.listItem()
              .title('Recently Feed')
              .schemaType('recentlyFeed')
              .child(
                S.documentTypeList('recentlyFeed')
                  .title('Recently Feed')
                  .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
