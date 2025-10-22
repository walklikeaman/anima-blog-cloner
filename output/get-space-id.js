// Script to help you find your Contentful Space ID
// Run this with: node get-space-id.js

import https from 'https';

// Your Contentful Management API token
const CMA_TOKEN = 'CFPAT-2qRIvQtKUGNJMB-tiSTFbJ0jeKgg8Fh-WRpommJFwoo';

console.log('🔍 Fetching your Contentful spaces...\n');

const options = {
  hostname: 'api.contentful.com',
  port: 443,
  path: '/spaces',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${CMA_TOKEN}`,
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
      const spaces = JSON.parse(data);
      
      if (spaces.items && spaces.items.length > 0) {
        console.log('✅ Found your Contentful spaces:\n');
        
        spaces.items.forEach((space, index) => {
          console.log(`${index + 1}. Space Name: ${space.name}`);
          console.log(`   Space ID: ${space.sys.id}`);
          console.log(`   Environment: ${space.sys.type}`);
          console.log('');
        });
        
        console.log('📝 Copy the Space ID and update your .env file:');
        console.log('CONTENTFUL_SPACE_ID=your_space_id_here');
        console.log('\nReplace "your_space_id_here" with the actual Space ID from above.');
        
      } else {
        console.log('❌ No spaces found. Please check your CMA token.');
      }
    } catch (error) {
      console.error('❌ Error parsing response:', error.message);
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error fetching spaces:', error.message);
});

req.end();
