import { Entry, Asset } from 'contentful';
import { ContentfulBlogPost } from '../lib/contentful';
import { BlogPost } from '../types';

// Convert Contentful blog post to the format expected by existing components
export function convertContentfulToBlogPost(contentfulPost: Entry<ContentfulBlogPost>): BlogPost {
  const fields = contentfulPost.fields;
  
  return {
    id: contentfulPost.sys.id,
    imageSrc: fields.coverImage?.fields?.file?.url || '',
    imageAlt: fields.coverImage?.fields?.title || fields.title,
    tags: [
      { label: fields.category, href: `/blog/category/${fields.category.toLowerCase()}/` }
    ],
    title: fields.title,
    description: fields.excerpt,
    author: {
      name: fields.authorName,
      avatarSrc: 'https://via.placeholder.com/40x40/cccccc/666666?text=' + fields.authorName.charAt(0).toUpperCase(),
      href: `/blog/author/${fields.authorName.toLowerCase().replace(/\s+/g, '-')}/`,
    },
    date: new Date(fields.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: '5 min read', // Default read time since it's not in Contentful model
    url: `/blog/${fields.slug}/`,
  };
}

// Get image URL from Contentful asset
export function getContentfulImageUrl(asset: Asset, width?: number, height?: number): string {
  if (!asset?.fields?.file?.url) return '';
  
  let url = asset.fields.file.url;
  
  // Add image transformation parameters if width/height provided
  if (width || height) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('fit', 'fill');
    params.set('f', 'faces');
    
    url += `?${params.toString()}`;
  }
  
  return url.startsWith('//') ? `https:${url}` : url;
}

// Format date from Contentful
export function formatContentfulDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
