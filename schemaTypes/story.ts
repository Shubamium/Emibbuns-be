import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'image',
    }),
		defineField({
			name:'text',
			title:'Text',
			type:'array',
			of:[
				{
					type:'text'
				}
			]
		})
  ],
})
