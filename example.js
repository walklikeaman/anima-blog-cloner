const { generateReactCodeFromURL } = require('./cloneBlog');

async function example() {
  try {
    console.log('🚀 Example: Cloning a blog with custom settings');
    
    // Clone the Anima blog to a custom directory
    const result = await generateReactCodeFromURL(
      'https://www.animaapp.com/blog',
      './my-blog-clone'
    );
    
    console.log('✅ Blog cloned successfully!');
    console.log(`📁 Generated ${Object.keys(result.files).length} files`);
    console.log('🎉 Check the ./my-blog-clone directory for the generated code');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Run the example
example();
