import { createClient, Entry, Asset } from 'contentful';

// Contentful configuration (use Vite env vars in browser)
const contentfulConfig = {
  space:
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_CONTENTFUL_SPACE_ID) ||
    (process.env as any)?.CONTENTFUL_SPACE_ID ||
    'your_space_id_here',
  accessToken:
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_CONTENTFUL_ACCESS_TOKEN) ||
    (process.env as any)?.CONTENTFUL_ACCESS_TOKEN ||
    'jCvVaykeWWgUO4E44IdS_SMJXjdcTGhMTvfDP6ityoo',
  previewToken:
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_CONTENTFUL_PREVIEW_TOKEN) ||
    (process.env as any)?.CONTENTFUL_PREVIEW_TOKEN ||
    'T9d_qyekWu3LWFfQKkL0x4AUxVRACnJC9wNWk4JNz6A',
};

// Create Contentful client
export const contentfulClient = createClient({
  space: contentfulConfig.space,
  accessToken: contentfulConfig.accessToken,
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
    const response = await contentfulClient.getEntries<ContentfulBlogPost>({
      content_type: 'blogPost', // This should match your Contentful content type ID
      order: '-publishedAt', // Order by published date, newest first
    });
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
      order: '-publishedAt',
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
