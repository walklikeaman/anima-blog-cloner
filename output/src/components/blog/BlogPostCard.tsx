import React from 'react';
import { BlogPost } from '@/types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', flex: '0 0 33.3333%', maxWidth: '33.3333%', marginBottom: '90px', padding: '0 15px' }}>
      <div style={{ height: '235px', borderRadius: '6px', overflow: 'hidden', width: 'auto' }}>
        <a href={post.url}>
          <img src={post.imageSrc} alt={post.imageAlt} style={{ width: '100%', height: '235px', objectFit: 'cover', borderRadius: '7px', maxWidth: '100%', verticalAlign: 'middle' }} />
        </a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-start', marginTop: '0px', padding: '0 20px' }}>
        <div style={{ marginTop: '20px', marginBottom: '10px' }}>
          <span>
            {post.tags.map((tag, index) => (
              <a key={index} href={tag.href} title={tag.label} style={{ color: 'rgb(255, 98, 80)', fontWeight: 500, textTransform: 'lowercase' }}>
                {tag.label}{index < post.tags.length - 1 ? ' ' : ''}
              </a>
            ))}
          </span>
        </div>
        <h2 style={{ color: 'rgb(41, 41, 41)', fontFamily: 'Roslindale-DeckNarrowBold', fontSize: '24px', fontWeight: 700, lineHeight: '35px', marginBottom: '20px', minHeight: '80px' }}>
          <a href={post.url} style={{ color: 'rgb(20, 20, 20)' }}>
            {post.title}
          </a>
        </h2>
        <p style={{ color: 'rgb(128, 128, 128)', fontSize: '16px', lineHeight: '25px', marginBottom: '14px', flexGrow: 1 }}>
          {post.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', width: '50%', marginBottom: '16px', minHeight: '30px' }}>
            <img alt="" src={post.author.avatarSrc} style={{ width: '40px', height: '40px', borderRadius: '100px', marginRight: '6px', display: 'block', maxWidth: '100%', verticalAlign: 'middle' }} />
            <div>
              <a href={post.author.href} title={`Posts by ${post.author.name}`} style={{ color: 'rgb(43, 43, 43)', fontSize: '12px', fontWeight: 500, opacity: 0.6 }}>
                {post.author.name}
              </a>
            </div>
          </div>
          <div style={{ color: 'rgb(128, 128, 128)', fontSize: '15px', lineHeight: '14px', marginBottom: '15px', width: '50%', textAlign: 'right' }}>
            <span style={{ color: 'rgb(43, 43, 43)', fontSize: '12px', borderRight: '1px solid rgb(210, 210, 210)', paddingRight: '5px', opacity: 0.6 }}>
              {post.date}
            </span>
            <span style={{ color: 'rgb(43, 43, 43)', fontSize: '12px', marginLeft: '1px', opacity: 0.6 }}>
              <span style={{ display: 'inline-block', marginRight: '3px', opacity: 0.6 }}>
                <span></span>
                <span> {post.readTime}</span>
                <span style={{ opacity: 0.6 }}></span>
              </span>
              min
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;