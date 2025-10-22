import React from 'react';
import BlogPostCard from './BlogPostCard';
import { useBlogPosts } from '../../hooks/useContentful';
import { convertContentfulToBlogPost } from '../../utils/contentfulHelpers';
import { blogPosts as staticBlogPosts } from '../../data/blogPosts';

const BlogGrid: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();

  if (loading) {
    return (
      <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Error loading blog posts: {error}</p>
      </div>
    );
  }

  // Use Contentful posts if available, otherwise fallback to static data
  const displayPosts = posts.length > 0 ? posts : staticBlogPosts;

  if (displayPosts.length === 0) {
    return (
      <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>No blog posts found.</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '500px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '0 -15px' }}>
        {displayPosts.map((post) => {
          // Check if it's a Contentful post or static post
          if ('fields' in post) {
            // Contentful post
            const convertedPost = convertContentfulToBlogPost(post);
            return <BlogPostCard key={convertedPost.id} post={convertedPost} />;
          } else {
            // Static post
            return <BlogPostCard key={post.id} post={post} />;
          }
        })}
        <div style={{ width: '100%', padding: '0 15px', margin: 'auto' }}>
          <a href="/blog/page/2" style={{ color: 'rgb(255, 98, 80)', fontWeight: 500, display: 'block', float: 'right' }}>
            Next Page &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;