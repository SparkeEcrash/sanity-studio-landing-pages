import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label for Tag',
      type: 'string',
    }),
  ],
})
