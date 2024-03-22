import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'goals',
  title: 'Goals',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
		defineField({
			name:'completed',
			type:'boolean',
		})
	
  ],
})
