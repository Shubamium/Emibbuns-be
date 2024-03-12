import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recent',
  title: 'Recent Works',
  type: 'document',
  fields: [
    defineField({
      name: 'artist',
      title: 'Name',
      type: 'string',
    }),
		defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'art',
      title: 'Art',
      type: 'image',
    }),
	
  ],
})
