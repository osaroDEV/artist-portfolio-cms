import {localeString, localeText, localePortableText} from './localeString'
import {galleryItem} from './galleryItem'
import {recentlyFeed} from './recentlyFeed'
import {siteSettings} from './siteSettings'
import {aboutPage} from './aboutPage'
import {series} from './series'

export const schemaTypes = [
  // Locale helper types (must come first)
  localeString,
  localeText,
  localePortableText,
  // Documents
  galleryItem,
  recentlyFeed,
  siteSettings,
  aboutPage,
  series,
]
