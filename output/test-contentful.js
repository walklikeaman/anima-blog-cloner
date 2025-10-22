// Test script to verify Contentful connection and data
import { getBlogPosts, getCategories } from './src/lib/contentful.ts';

console.log('🔍 Testing Contentful connection...\n');

async function testContentful() {
  try {
    console.log('📡 Fetching blog posts from Contentful...');
    const posts = await getBlogPosts();
    console.log(`✅ Found ${posts.length} blog posts:`);
    
    posts.forEach((post, index) => {
      console.log(`  ${index + 1}. ${post.fields.title} (${post.fields.category})`);
    });
    
    console.log('\n📡 Fetching categories from Contentful...');
    const categories = await getCategories();
    console.log(`✅ Found ${categories.length} categories:`);
    
    categories.forEach((category, index) => {
      console.log(`  ${index + 1}. ${category}`);
    });
    
    console.log('\n🎉 Contentful integration is working correctly!');
    
  } catch (error) {
    console.error('❌ Contentful connection failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your Space ID and Access Token');
    console.log('2. Verify the content type ID is "blogPost"');
    console.log('3. Ensure you have published content in Contentful');
  }
}

testContentful();
