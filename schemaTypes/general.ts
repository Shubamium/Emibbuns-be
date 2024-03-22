import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'preset',
      title: 'Preset ID',
			description:`Set the active one as 'main'`,
      type: 'string',
    }),
		defineField({
      name: 'reference_sheet',
      title: 'Reference Sheet',
      type: 'image',
    }),
 
	
  ],
})
