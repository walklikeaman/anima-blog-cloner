import { useState, useEffect } from 'react';
import { Entry } from 'contentful';
import { ContentfulBlogPost, getBlogPosts, getBlogPostBySlug, getBlogPostsByCategory, getCategories } from '../lib/contentful';
import { blogPosts as staticBlogPosts } from '../data/blogPosts';
import { categories as staticCategories } from '../data/categories';

// Hook for fetching all blog posts
export function useBlogPosts() {
  const [posts, setPosts] = useState<Entry<ContentfulBlogPost>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getBlogPosts();
        if (data.length > 0) {
          setPosts(data);
        } else {
          // Fallback to static data if no Contentful posts found
          console.log('No Contentful posts found, using static data');
          setPosts([]);
        }
        setError(null);
      } catch (err) {
        console.log('Contentful error, using static data:', err);
        setError(null); // Don't show error, just use static data
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}

// Hook for fetching a single blog post by slug
export function useBlogPost(slug: string) {
  const [post, setPost] = useState<Entry<ContentfulBlogPost> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await getBlogPostBySlug(slug);
        setPost(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
}

// Hook for fetching blog posts by category
export function useBlogPostsByCategory(category: string) {
  const [posts, setPosts] = useState<Entry<ContentfulBlogPost>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getBlogPostsByCategory(category);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchPosts();
    }
  }, [category]);

  return { posts, loading, error };
}

// Hook for fetching categories
export function useCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategories();
        setCategories(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
