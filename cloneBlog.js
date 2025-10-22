require('dotenv').config();
const { Anima } = require('@animaapp/anima-sdk');
const fs = require('fs');
const path = require('path');

// Initialize Anima SDK with API key
const anima = new Anima({
  auth: {
    token: process.env.ANIMA_API_KEY,
  },
});

/**
 * Generates React code from a given blog URL using Anima SDK
 * @param {string} blogUrl - The URL of the blog page to clone
 * @param {string} outputDir - Directory to save generated files (optional)
 */
async function generateReactCodeFromURL(blogUrl, outputDir = './output') {
  try {
    console.log(`🚀 Starting to generate React code from: ${blogUrl}`);
    
    // Generate code from website using Anima SDK
    const result = await anima.generateCodeFromWebsite({
      url: blogUrl,
      settings: {
        framework: 'react',
        language: 'typescript',
        styling: 'inline_styles'
      }
    });

    console.log('✅ Code generation completed successfully!');
    console.log(`📁 Found ${Object.keys(result.files).length} files to generate`);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`📂 Created output directory: ${outputDir}`);
    }

    // Write each file to the output directory
    let generatedCount = 0;
    for (const [fileName, fileData] of Object.entries(result.files)) {
      const filePath = path.join(outputDir, fileName);
      const dir = path.dirname(filePath);
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, fileData.content);
      console.log(`📄 Generated: ${fileName}`);
      generatedCount++;
    }

    console.log(`\n🎉 Successfully generated ${generatedCount} files in ${outputDir}`);
    
    // Handle assets if they exist
    if (result.assets && result.assets.length > 0) {
      console.log(`\n📦 Found ${result.assets.length} assets`);
      const assetsDir = path.join(outputDir, 'assets');
      if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir, { recursive: true });
      }
      
      for (const asset of result.assets) {
        console.log(`🖼️  Asset: ${asset.name} - ${asset.url}`);
      }
    }

    return result;
  } catch (error) {
    console.error('❌ Error generating React code:', error.message || error);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    if (error.cause) {
      console.error('Cause:', error.cause);
    }
    throw error;
  }
}

/**
 * Main function to handle command line arguments
 */
async function main() {
  // Get URL from command line arguments or use default
  const blogUrl = process.argv[2] || 'https://www.animaapp.com/blog';
  const outputDir = process.argv[3] || './output';

  console.log('🔧 Anima Blog Cloner');
  console.log('==================');
  console.log(`📝 Target URL: ${blogUrl}`);
  console.log(`📁 Output Directory: ${outputDir}`);
  console.log('');

  // Validate API key
  if (!process.env.ANIMA_API_KEY) {
    console.error('❌ Error: ANIMA_API_KEY not found in environment variables');
    console.log('Please make sure your .env file contains the ANIMA_API_KEY');
    process.exit(1);
  }

  try {
    await generateReactCodeFromURL(blogUrl, outputDir);
    console.log('\n✨ Blog cloning completed successfully!');
  } catch (error) {
    console.error('\n💥 Blog cloning failed:', error.message);
    process.exit(1);
  }
}

// Run the script if called directly
if (require.main === module) {
  main();
}

module.exports = { generateReactCodeFromURL };
