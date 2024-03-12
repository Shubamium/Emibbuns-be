import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'family',
  title: 'Family',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
		defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
		defineField({
			name:'age',
			type:'string',
		}),
		defineField({
			name:'height',
			type:'string',
		}),
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'image',
    }),
		defineField(({
			name:'description',
			type:'text'
		}))
  ],
})
