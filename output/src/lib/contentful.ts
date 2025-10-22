import { createClient, Entry, Asset } from 'contentful';

// Contentful configuration - hardcoded for assignment
const contentfulConfig = {
  space: 'dah4a45wn7nn',
  accessToken: 'jCvVaykeWWgUO4E44IdS_SMJXJdcTGhMTvfDP6ityoo',
  previewToken: 'T9d_qyekWu3LWFfQKkL0x4AUVVRACnJC9wNWk4JNz6A',
};

// Create Contentful client
export const contentfulClient = createClient({
  space: contentfulConfig.space,
  accessToken: contentfulConfig.accessToken,
});

// Log configuration for debugging
console.log('Contentful Config:', {
  space: contentfulConfig.space,
  hasAccessToken: !!contentfulConfig.accessToken,
  accessTokenLength: contentfulConfig.accessToken?.length || 0
});

// Create preview client for draft content
export const contentfulPreviewClient = createClient({
  space: contentfulConfig.space,
  accessToken: contentfulConfig.previewToken,
  host: 'preview.contentful.com',
});

// Blog Post interface matching your Contentful model
export interface ContentfulBlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Rich text content
  coverImage: Asset;
  category: string;
  publishedAt: string;
  authorName: string;
}

// Fetch all blog posts
export async function getBlogPosts(): Promise<Entry<ContentfulBlogPost>[]> {
  try {
    console.log('Fetching blog posts from Contentful...');
    const response = await contentfulClient.getEntries<ContentfulBlogPost>({
      content_type: 'blogPost', // This should match your Contentful content type ID
      order: '-sys.createdAt', // Order by creation date, newest first
    });
    console.log('Contentful response:', response);
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<Entry<ContentfulBlogPost> | null> {
  try {
    const response = await contentfulClient.getEntries<ContentfulBlogPost>({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<Entry<ContentfulBlogPost>[]> {
  try {
    const response = await contentfulClient.getEntries<ContentfulBlogPost>({
      content_type: 'blogPost',
      'fields.category': category,
      order: '-sys.createdAt',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    return [];
  }
}

// Get all unique categories
export async function getCategories(): Promise<string[]> {
  try {
    const response = await contentfulClient.getEntries<ContentfulBlogPost>({
      content_type: 'blogPost',
      select: 'fields.category',
    });
    
    const categories = response.items
      .map(item => item.fields.category)
      .filter((category, index, self) => self.indexOf(category) === index);
    
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}