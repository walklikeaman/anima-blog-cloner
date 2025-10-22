// Script to create dummy blog posts in Contentful
// Run this with: node create-dummy-posts.js

import https from 'https';

// Your Contentful credentials
const SPACE_ID = 'dah4a45wn7nn';
const CMA_TOKEN = 'CFPAT-2qRIvQtKUGNJMB-tiSTFbJ0jeKgg8Fh-WRpommJFwoo';

// Dummy blog posts data
const dummyPosts = [
  {
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-react-typescript',
    excerpt: 'Learn how to set up a modern React application with TypeScript for better development experience and type safety.',
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'React and TypeScript are a powerful combination for building modern web applications. In this guide, we\'ll walk through setting up a new project and explore the benefits of using TypeScript with React.',
              marks: [],
              data: {}
            }
          ]
        }
      ]
    },
    category: 'Tutorial',
    publishedAt: new Date().toISOString(),
    authorName: 'John Doe'
  },
  {
    title: 'Building Responsive Web Design with CSS Grid',
    slug: 'responsive-design-css-grid',
    excerpt: 'Master CSS Grid layout to create beautiful, responsive web designs that work across all devices.',
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'CSS Grid is a powerful layout system that makes it easy to create complex, responsive designs. Learn the fundamentals and best practices in this comprehensive guide.',
              marks: [],
              data: {}
            }
          ]
        }
      ]
    },
    category: 'Design',
    publishedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    authorName: 'Jane Smith'
  },
  {
    title: 'Introduction to Contentful CMS',
    slug: 'introduction-contentful-cms',
    excerpt: 'Discover how Contentful can streamline your content management workflow and improve your development process.',
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Contentful is a headless CMS that provides a flexible and scalable solution for managing content across multiple platforms. Learn how to get started and integrate it with your applications.',
              marks: [],
              data: {}
            }
          ]
        }
      ]
    },
    category: 'CMS',
    publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    authorName: 'Mike Johnson'
  }
];

console.log('🚀 Creating dummy blog posts in Contentful...\n');

// Function to create a blog post
function createBlogPost(postData) {
  return new Promise((resolve, reject) => {
    const postBody = JSON.stringify({
      fields: {
        title: {
          'en-US': postData.title
        },
        slug: {
          'en-US': postData.slug
        },
        excerpt: {
          'en-US': postData.excerpt
        },
        content: {
          'en-US': postData.content
        },
        category: {
          'en-US': postData.category
        },
        publishedAt: {
          'en-US': postData.publishedAt
        },
        authorName: {
          'en-US': postData.authorName
        }
      }
    });

    const options = {
      hostname: 'api.contentful.com',
      port: 443,
      path: `/spaces/${SPACE_ID}/entries`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CMA_TOKEN}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        'X-Contentful-Content-Type': 'blogPost',
        'Content-Length': Buffer.byteLength(postBody)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const entry = JSON.parse(data);
          console.log(`✅ Created post: "${postData.title}"`);
          resolve(entry);
        } else {
          console.error(`❌ Failed to create post "${postData.title}":`, data);
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      console.error(`❌ Error creating post "${postData.title}":`, error.message);
      reject(error);
    });

    req.write(postBody);
    req.end();
  });
}

// Create all dummy posts
async function createAllPosts() {
  try {
    for (const post of dummyPosts) {
      await createBlogPost(post);
      // Add a small delay between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('\n🎉 All dummy blog posts created successfully!');
    console.log('📝 You can now view them in your Contentful dashboard or refresh your blog to see them.');
    
  } catch (error) {
    console.error('\n💥 Error creating blog posts:', error.message);
  }
}

createAllPosts();
