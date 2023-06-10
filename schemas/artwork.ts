import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'name',
      title: "Artwork's Name",
      type: 'string',
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'reference', to: {type: 'artworkImage'}}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    defineField({
      name: 'posted',
      title: 'Is it Posted?',
      type: 'boolean',
    }),
    defineField({
      name: 'uid',
      title: "Uploader's ID",
      type: 'string',
    }),
    defineField({
      name: 'dateUploaded',
      title: 'Date Uploaded',
      type: 'date',
    }),
  ],
})
