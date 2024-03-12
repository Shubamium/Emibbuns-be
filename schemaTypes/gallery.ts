import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
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
