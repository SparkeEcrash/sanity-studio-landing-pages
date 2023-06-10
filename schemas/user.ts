import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: "User's Name",
      type: 'string',
    }),
    defineField({
      name: 'username',
      title: "User's Username",
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: "User's Email",
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: "User's Image",
      type: 'string',
    }),
    defineField({
      name: 'uid',
      title: "User's ID",
      type: 'string',
    }),
    defineField({
      name: 'dateJoined',
      title: 'Member Since',
      type: 'date',
    }),
  ],
})
