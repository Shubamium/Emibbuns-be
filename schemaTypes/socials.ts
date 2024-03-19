import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
		defineField({
      name: 'handle',
      type: 'string',
    }),		
		defineField({
      name: 'link',
      type: 'url',
    }),
		defineField({
			name:'icon',
			type:'image',
		}),

  ],
})
