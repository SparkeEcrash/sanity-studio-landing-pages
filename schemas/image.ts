import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'artworkImage',
  title: 'Artwork Image',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
    }),
    defineField({
      name: 'aid',
      title: "Artwork's ID",
      type: 'string',
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
