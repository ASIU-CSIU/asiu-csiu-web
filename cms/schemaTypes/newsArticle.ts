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
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'author'}],
      validation: (Rule) => Rule.required().min(1),
      description: 'Add one or more authors',
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
    {
      name: 'linkedWords',
      title: 'Linked Words',
      description: 'Define specific words in the article content that should become hyperlinks. The matching is case-insensitive.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'word',
              title: 'Word or Phrase',
              type: 'string',
              description: 'The exact word or phrase in the article to be linked.',
              validation: Rule => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'The URL this word should link to.',
              validation: Rule => Rule.required().uri({
                scheme: ['http', 'https']
              }),
            },
          ],
          preview: {
            select: {
              title: 'word',
              subtitle: 'url',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      authors: 'authors',
      publishedAt: 'publishedAt',
      content: 'content',
    },
    prepare(selection) {
      const {title, authors, publishedAt, content} = selection
      const formattedDate =
        publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Not published'
      const excerpt = content ? content.substring(0, 50) + (content.length > 50 ? '...' : '') : 'No content'
      const authorNames = authors && authors.length > 0 ? authors.map((author: any) => author.name).join(', ') : 'Unknown'

      return {
        title: title || 'Untitled Article',
        subtitle: `By ${authorNames} • ${formattedDate} • ${excerpt}`,
      }
    },
  },
})
