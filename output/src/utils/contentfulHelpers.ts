import { Entry } from 'contentful';
import { ContentfulBlogPost } from '../lib/contentful';

export interface BlogPost {
  id: string;
  imageSrc: string;
  imageAlt: string;
  tags: Array<{ label: string; href: string }>;
  title: string;
  description: string;
  author: {
    name: string;
    avatarSrc: string;
    href: string;
  };
  date: string;
  readTime: number;
  url: string;
  content?: any;
}

export function convertContentfulToBlogPost(contentfulPost: Entry<ContentfulBlogPost>): BlogPost {
  const { fields } = contentfulPost;

  // Basic conversion, adjust as needed based on your BlogPost type
  return {
    id: contentfulPost.sys.id,
    imageSrc: fields.coverImage?.fields?.file?.url ? `https:${fields.coverImage.fields.file.url}` : 'https://via.placeholder.com/768x477',
    imageAlt: fields.coverImage?.fields?.description || fields.title,
    tags: fields.category ? [{ label: fields.category, href: `/blog/category/${fields.category.toLowerCase()}/` }] : [],
    title: fields.title,
    description: fields.excerpt,
    author: {
      name: fields.authorName || 'Unknown Author',
      avatarSrc: 'https://via.placeholder.com/150', // Placeholder, as author avatar is not in Contentful model
      href: `/blog/author/${fields.authorName?.toLowerCase().replace(/\s+/g, '-')}/`,
    },
    date: fields.publishedAt ? new Date(fields.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A',
    readTime: 5, // Placeholder, as read time is not in Contentful model
    url: `/blog/posts/${fields.slug}`,
    content: fields.content, // Rich text content
  };
}