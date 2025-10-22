# Anima Blog Cloner

A simple script that uses the Anima SDK to generate React code from any blog URL.

## Features

- 🚀 Clone any blog page using Anima SDK
- 📁 Generate organized React/TypeScript code
- 🎨 Preserve styling and layout
- 📦 Handle assets automatically
- 🔧 Easy to use command-line interface

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure API Key:**
   The Anima API key is already configured in the `.env` file. If you need to use a different key, update the `ANIMA_API_KEY` value in `.env`.

## Usage

### Basic Usage
```bash
npm run clone
```
This will clone the default Anima blog (https://www.animaapp.com/blog) and save the generated code to the `./output` directory.

### Custom URL
```bash
node cloneBlog.js "https://your-blog-url.com"
```

### Custom Output Directory
```bash
node cloneBlog.js "https://your-blog-url.com" "./my-custom-output"
```

### Command Line Arguments
- **First argument**: Blog URL (optional, defaults to https://www.animaapp.com/blog)
- **Second argument**: Output directory (optional, defaults to ./output)

## Output

The script generates:
- React components in TypeScript
- Styling files (CSS/Tailwind)
- Asset files
- Project configuration files

All files are organized in the specified output directory with proper folder structure.

## Example

```bash
# Clone the Anima blog
npm run clone

# Clone a custom blog
node cloneBlog.js "https://example.com/blog"

# Clone with custom output directory
node cloneBlog.js "https://example.com/blog" "./my-blog-clone"
```

## Requirements

- Node.js
- Valid Anima API Key
- Internet connection

## Notes

- The script uses the Anima SDK to analyze the target website and generate React code
- Generated code includes TypeScript types and modern React patterns
- Assets are handled automatically with proper references
- The output is ready to use in a React project
- **Important**: The Anima SDK works best with websites that are compatible with their analysis engine. Some websites may not be supported or may require specific configurations.

## Limitations

- The Anima SDK may not work with all websites
- Some websites may require authentication or have restrictions
- The generated code quality depends on the source website's structure
- Complex interactive elements may not be fully replicated
