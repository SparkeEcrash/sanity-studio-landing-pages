import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export default defineType({
  name: 'pic',
  title: 'Pic',
  type: 'image',
  icon: TagIcon,
})
