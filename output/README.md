# Anima Blog Clone with Contentful Integration

A modern React blog application that combines the power of Anima SDK for design-to-code generation with Contentful CMS for dynamic content management.

## 🚀 Features

- **Anima SDK Integration**: Cloned from Anima's blog using their SDK
- **Contentful CMS**: Dynamic content management with fallback to static data
- **React + TypeScript**: Modern development stack
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Real-time Content**: Live content updates from Contentful
- **Netlify Ready**: Optimized for deployment

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Contentful account
- Netlify account (for deployment)

## 🛠️ Installation & Setup

### 1. Clone and Install Dependencies

```bash
# Navigate to the project directory
cd /path/to/anima-blog-cloner/output

# Install dependencies
npm install
```

### 2. Environment Configuration

The project uses the following environment variables (already configured):

```env
CONTENTFUL_SPACE_ID=dah4a45wn7nn
CONTENTFUL_ACCESS_TOKEN=jCvVaykeWWgUO4E44IdS_SMJXjdcTGhMTvfDP6ityoo
CONTENTFUL_PREVIEW_TOKEN=T9d_qyekWu3LWFfQKkL0x4AUxVRACnJC9wNWk4JNz6A
CONTENTFUL_CMA_TOKEN=CFPAT-2qRIvQtKUGNJMB-tiSTFbJ0jeKgg8Fh-WRpommJFwoo
```

### 3. Contentful Setup

The project includes a "Blog Post" content model with the following fields:
- `title` (Short text)
- `slug` (Short text)
- `excerpt` (Long text)
- `content` (Rich text)
- `coverImage` (Media)
- `category` (Short text)
- `publishedAt` (Date & time)
- `authorName` (Short text)

**Dummy content has already been created** with 3 sample blog posts.

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your blog in action!

## 🏗️ Project Structure

```
src/
├── components/
│   ├── blog/
│   │   ├── BlogGrid.tsx          # Blog posts grid with Contentful integration
│   │   ├── BlogPostCard.tsx      # Individual blog post card
│   │   ├── CategoryFilters.tsx   # Category navigation
│   │   └── HeroSection.tsx       # Hero section
│   └── layout/
│       ├── Header.tsx            # Site header
│       ├── Footer.tsx            # Site footer
│       ├── MobileMenu.tsx        # Mobile navigation
│       └── NavItem.tsx           # Navigation item component
├── hooks/
│   └── useContentful.ts          # Custom hooks for Contentful data
├── lib/
│   └── contentful.ts             # Contentful client configuration
├── utils/
│   └── contentfulHelpers.ts      # Helper functions for data conversion
├── data/                         # Static fallback data
└── types/                        # TypeScript type definitions
```

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Create dummy blog posts in Contentful
node create-dummy-posts.js

# Get Contentful space information
node get-space-id.js
```

## 🌐 Deployment to Netlify

### Option 1: Deploy from Git (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/anima-blog-clone.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Environment variables: Add all Contentful variables

### Option 2: Manual Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder
   - Add environment variables in Site settings

### Environment Variables for Netlify

Add these in Netlify's Environment Variables section:

```
CONTENTFUL_SPACE_ID=dah4a45wn7nn
CONTENTFUL_ACCESS_TOKEN=jCvVaykeWWgUO4E44IdS_SMJXjdcTGhMTvfDP6ityoo
CONTENTFUL_PREVIEW_TOKEN=T9d_qyekWu3LWFfQKkL0x4AUxVRACnJC9wNWk4JNz6A
CONTENTFUL_CMA_TOKEN=CFPAT-2qRIvQtKUGNJMB-tiSTFbJ0jeKgg8Fh-WRpommJFwoo
```

## 📝 Content Management

### Adding New Blog Posts

1. **Via Contentful Dashboard**:
   - Go to your Contentful space
   - Click "Add entry"
   - Select "Blog Post" content type
   - Fill in all required fields
   - Publish the entry

2. **Via Script** (for bulk creation):
   ```bash
   node create-dummy-posts.js
   ```

### Managing Categories

Categories are automatically generated from the `category` field in your blog posts. To add new categories, simply use them in new blog posts.

## 🔄 Data Flow

1. **Contentful Integration**: The app fetches blog posts and categories from Contentful
2. **Fallback System**: If Contentful is unavailable, the app falls back to static data
3. **Real-time Updates**: Content changes in Contentful are reflected immediately
4. **Type Safety**: Full TypeScript support for all data structures

## 🎨 Customization

### Styling
- The project uses inline styles (generated by Anima SDK)
- Tailwind CSS is configured and available
- Custom styles can be added to `tailwind.css`

### Components
- All components are modular and reusable
- Easy to extend with new features
- TypeScript interfaces ensure type safety

## 🐛 Troubleshooting

### Common Issues

1. **Contentful Connection Issues**:
   - Verify your Space ID and Access Token
   - Check if the content type ID matches (`blogPost`)
   - Ensure your Contentful space has the correct content model

2. **Build Errors**:
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors with `npm run build`

3. **Environment Variables**:
   - Ensure all required environment variables are set
   - For Netlify, add variables in Site Settings > Environment Variables

### Getting Help

- Check the browser console for error messages
- Verify Contentful API responses in Network tab
- Review the fallback system logs

## 📄 License

This project is created for educational purposes as part of an assignment demonstrating Anima SDK and Contentful integration.

## 🎯 Assignment Deliverables

✅ **Runnable codebase** with working React code  
✅ **Anima SDK integration** for design-to-code generation  
✅ **Contentful integration** for dynamic content management  
✅ **Netlify deployment ready** with environment configuration  
✅ **Complete documentation** with setup and deployment instructions  

---

**Ready to deploy!** 🚀

Your blog is now fully integrated with Contentful and ready for Netlify deployment. The combination of Anima's design-to-code capabilities with Contentful's content management provides a powerful, scalable solution for modern web development.
