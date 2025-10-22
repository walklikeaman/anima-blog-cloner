import pkg from 'contentful-management';
const { createClient } = pkg;
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown';
import { blogPosts } from './blogPostsData.js';

// Hardcoded Contentful credentials for assignment
const SPACE_ID = 'dah4a45wn7nn';
const CMA_TOKEN = 'jCvVaykeWWgUO4E44IdS_SMJXjdcTGhMTvfDP6ityoo';
const ENVIRONMENT_ID = 'master';

const client = createClient({
  accessToken: CMA_TOKEN,
});

async function createBlogPost(postData) {
  try {
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // Create rich text content from markdown
    const richTextContent = await richTextFromMarkdown(postData.description);

    const entry = await environment.createEntry('blogPost', {
      fields: {
        title: { 'en-US': postData.title },
        slug: { 'en-US': postData.url.split('/').pop().replace(/\/$/, '') || 'untitled' },
        excerpt: { 'en-US': postData.description },
        content: { 'en-US': richTextContent },
        coverImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'placeholder-asset-id', // We'll need to create assets first
            },
          },
        },
        category: { 'en-US': postData.tags[0]?.label || 'general' },
        publishedAt: { 'en-US': new Date(postData.date).toISOString() },
        authorName: { 'en-US': postData.author.name },
      },
    });

    await entry.publish();
    console.log(`✅ Created post: "${postData.title}"`);
    return entry;
  } catch (error) {
    console.error(`❌ Error creating post "${postData.title}":`, error);
    return null;
  }
}

async function populateContentful() {
  console.log('🚀 Populating Contentful with blog posts...\n');

  try {
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // First, let's check if we already have entries
    const existingEntries = await environment.getEntries({
      content_type: 'blogPost',
      limit: 1,
    });

    if (existingEntries.items.length > 0) {
      console.log('⚠️  Blog posts already exist in Contentful. Skipping population.');
      console.log('💡 To repopulate, delete existing entries first.');
      return;
    }

    // Create blog posts
    const createdPosts = [];
    for (const post of blogPosts) {
      const entry = await createBlogPost(post);
      if (entry) {
        createdPosts.push(entry);
      }
    }

    console.log(`\n🎉 Successfully created ${createdPosts.length} blog posts in Contentful!`);
    console.log('📝 You can now view them in your Contentful dashboard.');
    
  } catch (error) {
    console.error('❌ Error populating Contentful:', error);
  }
}

populateContentful();
