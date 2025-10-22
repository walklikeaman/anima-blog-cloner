// Direct API test for Contentful connection
import https from 'https';

const SPACE_ID = 'dah4a45wn7nn';
const ACCESS_TOKEN = 'jCvVaykeWWgUO4E44IdS_SMJXjdcTGhMTvfDP6ityoo';

console.log('🔍 Testing Contentful API connection...\n');

function testContentfulAPI() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'cdn.contentful.com',
      port: 443,
      path: `/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=blogPost`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          
          if (res.statusCode === 200) {
            console.log('✅ Contentful API connection successful!');
            console.log(`📊 Found ${response.items.length} blog posts:`);
            
            response.items.forEach((item, index) => {
              const category = item.fields.category || 'No category';
              console.log(`  ${index + 1}. ${item.fields.title} (${category})`);
            });
            
            if (response.items.length === 0) {
              console.log('⚠️  No blog posts found. Make sure you have published content in Contentful.');
            }
            
            resolve(response);
          } else {
            console.error('❌ API Error:', res.statusCode, data);
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        } catch (error) {
          console.error('❌ Error parsing response:', error.message);
          console.log('Raw response:', data);
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Request failed:', error.message);
      reject(error);
    });

    req.end();
  });
}

// Test categories
function testCategories() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'cdn.contentful.com',
      port: 443,
      path: `/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=blogPost&select=fields.category`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          
          if (res.statusCode === 200) {
            const categories = response.items
              .map(item => item.fields?.category)
              .filter(category => category) // Remove undefined categories
              .filter((category, index, self) => self.indexOf(category) === index);
            
            console.log(`\n📂 Found ${categories.length} unique categories:`);
            categories.forEach((category, index) => {
              console.log(`  ${index + 1}. ${category}`);
            });
            
            resolve(categories);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

async function runTests() {
  try {
    await testContentfulAPI();
    await testCategories();
    
    console.log('\n🎉 All Contentful tests passed!');
    console.log('📝 Your blog should now be loading content from Contentful.');
    
  } catch (error) {
    console.error('\n💥 Contentful test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your Space ID and Access Token');
    console.log('2. Verify the content type ID is "blogPost"');
    console.log('3. Ensure you have published content in Contentful');
    console.log('4. Check your Contentful space permissions');
  }
}

runTests();
