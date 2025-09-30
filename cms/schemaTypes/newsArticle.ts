import {defineField, defineType} from 'sanity'

export const newsArticleType = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorImage',
      title: 'Author Image Link',
      type: 'url',
      description: 'URL to the author\'s profile image',
    }),
    defineField({
      name: 'authorDescription',
      title: 'Author Description',
      type: 'text',
      description: 'Brief description about the author',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: 'Add tags to categorize this article',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      publishedAt: 'publishedAt',
      content: 'content'
    },
    prepare(selection) {
      const {title, author, publishedAt, content} = selection
      const formattedDate = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Not published'
      const excerpt = content ? content.substring(0, 50) + (content.length > 50 ? '...' : '') : 'No content'
      return {
        title: title || 'Untitled Article',
        subtitle: `By ${author || 'Unknown'} • ${formattedDate} • ${excerpt}`
      }
    }
  }
})
