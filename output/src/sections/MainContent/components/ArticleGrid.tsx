import { BlogCard } from "@/components/BlogCard";

export const ArticleGrid = () => {
  return (
    <div className="box-border caret-transparent min-h-[500px]">
      <div className="box-border caret-transparent flex flex-col flex-nowrap mx-0 md:flex-row md:flex-wrap md:ml-[-15px] md:mr-[-15px]">
        <BlogCard
          articleUrl="/blog/design-to-code/clone-website/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Remix-Website-Blog-Thumbnail-768x477.jpg"
          imageAlt="Remix Website Blog Thumbnail"
          imageSizeVariant="aspect-[auto_768_/_477]"
          categories={[
            {
              url: "/blog/design-to-code/",
              title: "design to code",
              label: "design to code",
            },
            { url: "/blog/genai/", title: "genAI", label: "genAI" },
            {
              url: "/blog/product-updates/",
              title: "product updates",
              label: "product updates",
            },
          ]}
          title="Remix website: Turn any website into React or HTML code instantly✨"
          titleUrl="/blog/design-to-code/clone-website/"
          description="Turn any website into clean, editable frontend code. Anima’s new Link to Code lets you paste a URL and instantly generate responsive React or HTML code—perfect for prototyping, refactoring, or remixing the web."
          readingTime="2"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Michal_Cohen_200-150x150.png"
          authorImageAlt=""
          authorName="Michal Cohen"
          authorUrl="/blog/author/michal/"
          publishDate="July 21, 2025"
        />
        <BlogCard
          articleUrl="/blog/api/anima-api-bringing-figma-to-coding-ai-agents/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Anima-API-768x477.jpg"
          imageAlt="Anima API: Bringing Figma to coding AI agents"
          imageSizeVariant="379px"
          categories={[
            { url: "/blog/api/", title: "api", label: "api" },
            { url: "/blog/genai/", title: "genAI", label: "genAI" },
          ]}
          title="Anima API: Bringing Figma to coding AI agents"
          titleUrl="/blog/api/anima-api-bringing-figma-to-coding-ai-agents/"
          description="Anima API bridges Figma and coding AI agents, delivering pixel-perfect, production-ready code in React, HTML, and Tailwind. Power vibe coding platforms, prototypes, and automation tools with the same engine trusted by 1.5M Figma users."
          readingTime="4"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ofer-5869-scaled-e1716386801881-150x150.jpg"
          authorImageAlt=""
          authorName="Ofer LaOr"
          authorUrl="/blog/author/oferlaor/"
          publishDate="May 26, 2025"
        />
        <BlogCard
          articleUrl="/blog/playground-en/full-figma-prototypes-into-anima-ai-playground-vibe-coding/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Blog-Intro-Thumbnail-768x477.jpg"
          imageAlt="Vibe code full prototypes"
          imageSizeVariant="379px"
          categories={[
            {
              url: "/blog/playground-en/",
              title: "playground",
              label: "playground",
            },
            {
              url: "/blog/product-updates/",
              title: "product updates",
              label: "product updates",
            },
            {
              url: "/blog/vibe-coding/",
              title: "vibe coding",
              label: "vibe coding",
            },
          ]}
          title="Big update: Bring full Figma prototypes into Anima AI Playground and start vibe coding"
          titleUrl="/blog/playground-en/full-figma-prototypes-into-anima-ai-playground-vibe-coding/"
          description="Anima Playground now lets you convert full Figma prototype flows into working code with multi-screen import, allowing you to vibe code from a flow with intact design."
          readingTime="2"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Avishay_Cohen_200-150x150.png"
          authorImageAlt=""
          authorName="Avishay Cohen"
          authorUrl="/blog/author/avishay/"
          publishDate="May 5, 2025"
        />
        <BlogCard
          articleUrl="/blog/product-updates/introducing-anima-playground-and-anima-api-ui-first-ai-code-generation/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/video-thumbnail-genai-768x432.jpg"
          imageAlt=""
          imageSizeVariant="418px"
          categories={[
            {
              url: "/blog/design-to-code/",
              title: "design to code",
              label: "design to code",
            },
            { url: "/blog/genai/", title: "genAI", label: "genAI" },
            {
              url: "/blog/product-updates/",
              title: "product updates",
              label: "product updates",
            },
          ]}
          title="Introducing Anima Playground and Anima API: UI-First AI Code Generation"
          titleUrl="/blog/product-updates/introducing-anima-playground-and-anima-api-ui-first-ai-code-generation/"
          description="Discover Anima Playground and Anima API—AI tools that generates high-end code with UI awareness for the age of agents and vibe-coding."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Avishay_Cohen_200-150x150.png"
          authorImageAlt=""
          authorName="Avishay Cohen"
          authorUrl="/blog/author/avishay/"
          publishDate="March 13, 2025"
        />
        <BlogCard
          articleUrl="/blog/design-to-code/how-to-export-figma-to-html/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Figma-to-HTML-full-projects-768x492.jpg"
          imageAlt=""
          imageSizeVariant="aspect-[auto_768_/_492]"
          categories={[
            {
              url: "/blog/design-to-code/",
              title: "design to code",
              label: "design to code",
            },
            { url: "/blog/genai/", title: "genAI", label: "genAI" },
            {
              url: "/blog/vibe-coding/",
              title: "vibe coding",
              label: "vibe coding",
            },
          ]}
          title="Figma to HTML: How to export a Figma design into HTML"
          titleUrl="/blog/design-to-code/how-to-export-figma-to-html/"
          description="Export Figma designs to HTML with AI. Get clean, customizable code for individual frames or full websites using Anima's AI-powered code generator."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="April 3, 2024"
        />
        <BlogCard
          articleUrl="/blog/design-to-code/how-to-export-figma-to-react/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/how-to-export-figma-to-react-cover-768x477.png"
          imageAlt=""
          imageSizeVariant="aspect-[auto_768_/_477]"
          categories={[
            {
              url: "/blog/design-to-code/",
              title: "design to code",
              label: "design to code",
            },
          ]}
          title="Figma to React: Convert and export Figma to React code instantly"
          titleUrl="/blog/design-to-code/how-to-export-figma-to-react/"
          description="Convert Figma to React code instantly with Anima. Use Anima Playground or Figma plugin to export clean, responsive, developer-ready React components in minutes—no manual coding required."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="April 1, 2024"
        />
        <BlogCard
          articleUrl="/blog/genai/building-agentic-workflows-for-code-generation-sharing-the-journey/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/agentic-768x432.jpg"
          imageAlt="Building Agentic workflows for code generation: Sharing the journey"
          imageSizeVariant="aspect-[auto_768_/_432]"
          categories={[
            { url: "/blog/code/", title: "code", label: "code" },
            {
              url: "/blog/design-to-code/",
              title: "design to code",
              label: "design to code",
            },
            { url: "/blog/genai/", title: "genAI", label: "genAI" },
          ]}
          title="Building Agentic workflows for code generation: Sharing the journey"
          titleUrl="/blog/genai/building-agentic-workflows-for-code-generation-sharing-the-journey/"
          description="Agentic workflows were just introduced, but they seem to evolve on a daily basis with new tools and architectures every day, as we learn to leverage them in real world applications. These are my insights from Anima’s ongoing journey to automate Front-end engineering with AI design to code solutions."
          readingTime="5"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ofer-5869-scaled-e1716386801881-150x150.jpg"
          authorImageAlt=""
          authorName="Ofer LaOr"
          authorUrl="/blog/author/oferlaor/"
          publishDate="September 29, 2025"
        />
        <BlogCard
          articleUrl="/blog/case-studies/how-ovrture-scales-with-anima-playground/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ovrture-2-768x477.jpg"
          imageAlt="Ovrture and Anima - use case"
          imageSizeVariant="379px"
          categories={[
            {
              url: "/blog/case-studies/",
              title: "case studies",
              label: "case studies",
            },
          ]}
          title="How Ovrture scales with Anima’s Playground"
          titleUrl="/blog/case-studies/how-ovrture-scales-with-anima-playground/"
          description="With Anima, Ovrture has been automating 80% of the frontend code, sped up project delivery by nearly a week, and scaled donor communications for 60+ nonprofit clients, all with just one designer."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="September 15, 2025"
        />
        <BlogCard
          articleUrl="/blog/playground-en/website-cloning-and-copyright-issues/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/copyright-1-768x477.jpg"
          imageAlt="Copyright but responsibly"
          imageSizeVariant="aspect-[auto_768_/_477]"
          categories={[
            { url: "/blog/genai/", title: "genAI", label: "genAI" },
            { url: "/blog/industry/", title: "industry", label: "industry" },
            {
              url: "/blog/playground-en/",
              title: "playground",
              label: "playground",
            },
          ]}
          title="Website cloning and copyright issues"
          titleUrl="/blog/playground-en/website-cloning-and-copyright-issues/"
          description="Cloning sites isn’t about shortcuts—it’s about context. We share the thinking behind our new website cloning feature: how it helps teams prototype, modernize, and vibe code starting from real products, and the guardrails we’ve built to keep it ethical."
          readingTime="2"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ofer-5869-scaled-e1716386801881-150x150.jpg"
          authorImageAlt=""
          authorName="Ofer LaOr"
          authorUrl="/blog/author/oferlaor/"
          publishDate="August 11, 2025"
        />
        <BlogCard
          articleUrl="/blog/industry/5-essential-chrome-extensions-for-vibe-coding/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Cover-image-1-768x477.jpg"
          imageAlt="5 best Chrome extensions for developers"
          imageSizeVariant="379px"
          categories={[
            { url: "/blog/industry/", title: "industry", label: "industry" },
          ]}
          title="5 essential Chrome extensions for vibe coding"
          titleUrl="/blog/industry/5-essential-chrome-extensions-for-vibe-coding/"
          description="Boost your AI and vibe-coding workflow with 5 essential Chrome extensions for Anima users, including Anima’s new UI Capture tool, JSON Viewer Pro, Lighthouse, WhatFont, and ColorZilla."
          readingTime="2"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="August 6, 2025"
        />
        <BlogCard
          articleUrl="/blog/product-updates/convert-private-sites-internal-pages-to-react-html/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Chrome-Extension-actual-UI-768x477.jpg"
          imageAlt="Anima Chrome Extension -Your UI to vibe coding"
          imageSizeVariant="aspect-[auto_768_/_477]"
          categories={[
            {
              url: "/blog/product-updates/",
              title: "product updates",
              label: "product updates",
            },
          ]}
          title="Clone and convert private sites / internal pages to React/HTML"
          titleUrl="/blog/product-updates/convert-private-sites-internal-pages-to-react-html/"
          description="Convert private or internal web pages into clean, editable React or HTML code with Anima’s on-brand vibe coding extension. Capture secure pages, keep enterprise-grade privacy, and instantly tweak layouts, colors, and content in Anima Playground."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ofer-5869-scaled-e1716386801881-150x150.jpg"
          authorImageAlt=""
          authorName="Ofer LaOr"
          authorUrl="/blog/author/oferlaor/"
          publishDate="August 5, 2025"
        />
        <BlogCard
          articleUrl="/blog/industry/is-vibe-coding-the-new-prototyping/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Vibe-coding-is-the-new-Prototyping-768x477.jpg"
          imageAlt="Vibe coding is the new Prototyping"
          imageSizeVariant="379px"
          categories={[
            { url: "/blog/industry/", title: "industry", label: "industry" },
          ]}
          title="Is vibe coding the new prototyping?"
          titleUrl="/blog/industry/is-vibe-coding-the-new-prototyping/"
          description="Vibe coding is redefining prototyping—skipping static mockups to build functional, on-brand UIs from day one. Compare traditional prototyping vs vibe coding, and see why teams are making the shift."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="August 5, 2025"
        />
        <BlogCard
          articleUrl="/blog/opinions/the-economic-impact-of-vibe-coding/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/3-billion-will-code-768x477.jpeg"
          imageAlt="The economic impact of vibe coding"
          imageSizeVariant="aspect-[auto_768_/_477]"
          categories={[
            { url: "/blog/industry/", title: "industry", label: "industry" },
            { url: "/blog/opinions/", title: "opinions", label: "opinions" },
            {
              url: "/blog/vibe-coding/",
              title: "vibe coding",
              label: "vibe coding",
            },
          ]}
          title="The economic impact of Vibe Coding"
          titleUrl="/blog/opinions/the-economic-impact-of-vibe-coding/"
          description="Vibe coding is transforming software creation. Avishay Cohen, CEO of Anima, explores how AI tools could unlock $1.5 trillion in annual productivity as 3 billion new people gain the ability to code."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Avishay_Cohen_200-150x150.png"
          authorImageAlt=""
          authorName="Avishay Cohen"
          authorUrl="/blog/author/avishay/"
          publishDate="July 21, 2025"
        />
        <BlogCard
          articleUrl="/blog/opinions/rise-of-the-vibe-designgineer/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Designgineer2-768x477.jpg"
          imageAlt="The rise of Designgineer"
          imageSizeVariant="379px"
          categories={[
            { url: "/blog/opinions/", title: "opinions", label: "opinions" },
            {
              url: "/blog/vibe-coding/",
              title: "vibe coding",
              label: "vibe coding",
            },
          ]}
          title="Rise of the vibe designgineer"
          titleUrl="/blog/opinions/rise-of-the-vibe-designgineer/"
          description="Explore the rise of vibe coding and the emerging role of the 'vibe designgineer'—how designers, PMs, and engineers are using AI tools to build functional products without writing code."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ofer-5869-scaled-e1716386801881-150x150.jpg"
          authorImageAlt=""
          authorName="Ofer LaOr"
          authorUrl="/blog/author/oferlaor/"
          publishDate="June 8, 2025"
        />
        <BlogCard
          articleUrl="/blog/industry/figma-make-vs-anima-playground-vibe-code-for-designers/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/playground-vs-make-2-768x477.png"
          imageAlt=""
          imageSizeVariant="aspect-[auto_768_/_477]"
          categories={[
            { url: "/blog/industry/", title: "industry", label: "industry" },
            {
              url: "/blog/playground-en/",
              title: "playground",
              label: "playground",
            },
            {
              url: "/blog/vibe-coding/",
              title: "vibe coding",
              label: "vibe coding",
            },
          ]}
          title="Figma Make vs Anima Playground: Vibe code for designers"
          titleUrl="/blog/industry/figma-make-vs-anima-playground-vibe-code-for-designers/"
          description="Figma Make introduces vibe coding inside Figma, but how does it compare to Anima Playground? Explore the differences."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Avishay_Cohen_200-150x150.png"
          authorImageAlt=""
          authorName="Avishay Cohen"
          authorUrl="/blog/author/avishay/"
          publishDate="May 12, 2025"
        />
        <BlogCard
          articleUrl="/blog/industry/vibe-coding-101/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/vibe-coding-101-Ofer-768x432.jpg"
          imageAlt="Vibe coding 101 by Ofer"
          imageSizeVariant="418px"
          categories={[
            { url: "/blog/industry/", title: "industry", label: "industry" },
            {
              url: "/blog/vibe-coding/",
              title: "vibe coding",
              label: "vibe coding",
            },
          ]}
          title="11 Vibe Coding tips"
          titleUrl="/blog/industry/vibe-coding-101/"
          description="Learn 11 practical vibe coding tips to avoid hitting walls when building with AI—from smart prompting and context management to saving progress and choosing the right tech stack."
          readingTime="6"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ofer-5869-scaled-e1716386801881-150x150.jpg"
          authorImageAlt=""
          authorName="Ofer LaOr"
          authorUrl="/blog/author/oferlaor/"
          publishDate="May 4, 2025"
        />
        <BlogCard
          articleUrl="/blog/playground-en/dating-apps-for-ui-partner-playful-experience/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/ui-match-blog-prototyping-playground-768x484.jpg"
          imageAlt=""
          imageSizeVariant="aspect-[auto_768_/_484]"
          categories={[
            {
              url: "/blog/playground-en/",
              title: "playground",
              label: "playground",
            },
            {
              url: "/blog/vibe-coding/",
              title: "vibe coding",
              label: "vibe coding",
            },
          ]}
          title="Dating apps for UI partner: a playful experience using Anima Playground"
          titleUrl="/blog/playground-en/dating-apps-for-ui-partner-playful-experience/"
          description="A fun prototype powered by Anima Playground: how we turned a dating app Figma community file into a UI library matcher using Anima Playground. Confetti included."
          readingTime="5"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="March 28, 2025"
        />
        <BlogCard
          articleUrl="/blog/vibe-coding/vibe-coding-in-anima-playground/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/myriamco_create_a_visual_for_vibe_coding_landscape_nerdy_yet__c7cf4efa-7bde-47c6-a78f-15295de30fdf_3-768x578.jpg"
          imageAlt="Vibe coding landscape by Midjourney"
          imageSizeVariant="aspect-[auto_768_/_578]"
          categories={[
            { url: "/blog/genai/", title: "genAI", label: "genAI" },
            { url: "/blog/industry/", title: "industry", label: "industry" },
            {
              url: "/blog/vibe-coding/",
              title: "vibe coding",
              label: "vibe coding",
            },
          ]}
          title="Vibe coding in Anima’s Playground"
          titleUrl="/blog/vibe-coding/vibe-coding-in-anima-playground/"
          description="Vibe coding lets you design with AI – describe what you want, and watch it come to life in code. Anima’s Playground makes it easy to build real apps without touching a dev environment."
          readingTime="7"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="March 25, 2025"
        />
        <BlogCard
          articleUrl="/blog/product-updates/anima-is-now-soc-2-certified/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/myriamco_Lock_of_security_in_a_purple_background_in_an_AI_sty_7deced27-11d7-4105-b183-ffdf5ffaf7e5_3-768x578.jpg"
          imageAlt="Anima is SOC 2 Type II certified"
          imageSizeVariant="312px"
          categories={[
            {
              url: "/blog/enterprise/",
              title: "enterprise",
              label: "enterprise",
            },
            {
              url: "/blog/product-updates/",
              title: "product updates",
              label: "product updates",
            },
          ]}
          title="Anima is now SOC 2 certified – Securing your designs, code, and AI-powered workflows"
          titleUrl="/blog/product-updates/anima-is-now-soc-2-certified/"
          description="Anima is now SOC 2 (Type II) certified! 🚀 Learn how our enterprise-grade security ensures your designs, code, and AI-powered workflows remain protected."
          readingTime="2"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Avishay_Cohen_200-150x150.png"
          authorImageAlt=""
          authorName="Avishay Cohen"
          authorUrl="/blog/author/avishay/"
          publishDate="February 16, 2025"
        />
        <BlogCard
          articleUrl="/blog/opinions/how-ai-agents-are-reshaping-design-platforms-what-designers-and-pms-need-to-know-about-ax/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/myriamco_change_colors_to_blue_red_yellow_with_some_purple_to_14f37a2c-fadb-43b4-a85d-09a3279bb017_1-768x578.jpg"
          imageAlt="Agentic AI vs API - abstract"
          imageSizeVariant="aspect-[auto_768_/_578]"
          categories={[
            { url: "/blog/genai/", title: "genAI", label: "genAI" },
            { url: "/blog/industry/", title: "industry", label: "industry" },
            { url: "/blog/opinions/", title: "opinions", label: "opinions" },
          ]}
          title="How AI agents are reshaping design platforms: What designers and PMs need to know about AX"
          titleUrl="/blog/opinions/how-ai-agents-are-reshaping-design-platforms-what-designers-and-pms-need-to-know-about-ax/"
          description="Discover how AI agents are reshaping design platforms through Agent Experience (AX), enabling automation, collaboration, and innovation for designers and product managers."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ofer-5869-scaled-e1716386801881-150x150.jpg"
          authorImageAlt=""
          authorName="Ofer LaOr"
          authorUrl="/blog/author/oferlaor/"
          publishDate="February 12, 2025"
        />
        <BlogCard
          articleUrl="/blog/design-to-code/can-chatgpt-convert-figma-to-code/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/myriamco_a_visual_representing_an_image_being_turned_into_htm_f585d07a-b263-4c72-a28a-2751a8cfb6c0_3-768x578.jpg"
          imageAlt="Image to code with AI"
          imageSizeVariant="aspect-[auto_768_/_578]"
          categories={[
            {
              url: "/blog/design-to-code/",
              title: "design to code",
              label: "design to code",
            },
          ]}
          title="Can ChatGPT convert Figma to code?"
          titleUrl="/blog/design-to-code/can-chatgpt-convert-figma-to-code/"
          description="The short answer is: No, ChatGPT cannot directly convert Figma files to code. However, that doesn’t mean it’s not useful in your workflows."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="December 24, 2024"
        />
        <BlogCard
          articleUrl="/blog/genai/the-evolution-of-ai-in-digital-products/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/evolution-of-ai-in-digital-products-768x470.jpg"
          imageAlt="Evolution of AI in digital products"
          imageSizeVariant="384px"
          categories={[
            { url: "/blog/genai/", title: "genAI", label: "genAI" },
            { url: "/blog/industry/", title: "industry", label: "industry" },
          ]}
          title="The evolution of AI in digital products"
          titleUrl="/blog/genai/the-evolution-of-ai-in-digital-products/"
          description="Explore the evolution of AI in digital products, from early rule-based systems to cutting-edge language models like GPT-3 and LLaMA. Discover key innovations, essential developer tools, and insights into what the future holds for product and software development."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="December 17, 2024"
        />
        <BlogCard
          articleUrl="/blog/product-updates/generate-responsive-react-code-from-any-figma-design/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Cover-responsive-4-768x477.png"
          imageAlt=""
          imageSizeVariant="aspect-[auto_768_/_477]"
          categories={[
            {
              url: "/blog/product-updates/",
              title: "product updates",
              label: "product updates",
            },
          ]}
          title="Generate responsive React code from any Figma design"
          titleUrl="/blog/product-updates/generate-responsive-react-code-from-any-figma-design/"
          description="Simply define how you want your design to look for different screen sizes in Figma, and Anima will automatically generate code that adapts to each one."
          readingTime="2"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Michal_Cohen_200-150x150.png"
          authorImageAlt=""
          authorName="Michal Cohen"
          authorUrl="/blog/author/michal/"
          publishDate="December 1, 2024"
        />
        <BlogCard
          articleUrl="/blog/opinions/design-and-code-an-ever-evolving-challenge/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/design-and-code-an-ever-evolving-challenge-768x477.png"
          imageAlt="design and code - an ever evolving challenge"
          imageSizeVariant="379px"
          categories={[
            {
              url: "/blog/design-systems/",
              title: "design systems",
              label: "design systems",
            },
            {
              url: "/blog/enterprise/",
              title: "enterprise",
              label: "enterprise",
            },
            { url: "/blog/opinions/", title: "opinions", label: "opinions" },
          ]}
          title="Design and code – an ever evolving challenge"
          titleUrl="/blog/opinions/design-and-code-an-ever-evolving-challenge/"
          description="Explore the evolving challenges of bridging design and code as companies scale. Learn how design systems, Figma integrations, and AI tools like Anima's Frontier can address design drift, documentation gaps, and onboarding hurdles, creating a seamless collaboration between designers and developers."
          readingTime="6"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ofer-5869-scaled-e1716386801881-150x150.jpg"
          authorImageAlt=""
          authorName="Ofer LaOr"
          authorUrl="/blog/author/oferlaor/"
          publishDate="November 27, 2024"
        />
        <BlogCard
          articleUrl="/blog/product-updates/transform-figma-designs-into-shadcn-components-with-anima/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/shadcn-4-with-right-code-1-768x477.jpg"
          imageAlt="Figma to shadcn - payment method"
          imageSizeVariant="aspect-[auto_768_/_477]"
          categories={[
            {
              url: "/blog/product-updates/",
              title: "product updates",
              label: "product updates",
            },
          ]}
          title="Transform Figma designs into shadcn components with Anima"
          titleUrl="/blog/product-updates/transform-figma-designs-into-shadcn-components-with-anima/"
          description="Transform your Figma designs into production-ready shadcn components with Anima. Streamline your workflow, maintain design consistency, and generate Tailwind-based code effortlessly. "
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Orit-150x150.png"
          authorImageAlt=""
          authorName="Orit Golowinski"
          authorUrl="/blog/author/orit/"
          publishDate="November 24, 2024"
        />
        <BlogCard
          articleUrl="/blog/genai/understanding-ai-agents-assistants-tools/"
          imageUrl="/blog/wp-content/uploads/2024/11/DALL·E-2024-11-20-15.55.28-A-vibrant-colorful-thumbnail-design-for-a-blog-post-featuring-dynamic-AI-elements-like-a-glowing-neural-network-a-virtual-assistant-icon-and-abstr-768x439.webp"
          imageAlt=""
          imageSizeVariant="aspect-[auto_768_/_439]"
          categories={[{ url: "/blog/genai/", title: "genAI", label: "genAI" }]}
          title="Understanding the differences between AI agents, assistants, and other intelligent tools"
          titleUrl="/blog/genai/understanding-ai-agents-assistants-tools/"
          description="Explore the differences between AI agents, assistants, and tools, understanding their unique roles, capabilities, and applications in technology."
          readingTime="3"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Myriam-Cohen-150x150.jpg"
          authorImageAlt=""
          authorName="Myriam Cohen"
          authorUrl="/blog/author/myriam-cohen/"
          publishDate="November 20, 2024"
        />
        <BlogCard
          articleUrl="/blog/enterprise/modernize-frontend-in-2025-future-proof-your-web-and-app-development/"
          imageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/modernize-frontend-2025-768x432.png"
          imageAlt="Modernize frontend in 2025"
          imageSizeVariant="418px"
          categories={[
            {
              url: "/blog/enterprise/",
              title: "enterprise",
              label: "enterprise",
            },
            { url: "/blog/industry/", title: "industry", label: "industry" },
          ]}
          title="Modernize Frontend in 2025: Future-proof your web and app development"
          titleUrl="/blog/enterprise/modernize-frontend-in-2025-future-proof-your-web-and-app-development/"
          description="Discover essential strategies for modernizing your frontend in 2025. Learn how component-based architectures, design systems, edge rendering, microfrontends, and tools like Anima and Frontier by Anima can future-proof your web and app development, enhancing scalability, security, and performance."
          readingTime="4"
          authorImageUrl="https://c.animaapp.com/mh1uo1b9FcJfkA/assets/Ofer-5869-scaled-e1716386801881-150x150.jpg"
          authorImageAlt=""
          authorName="Ofer LaOr"
          authorUrl="/blog/author/oferlaor/"
          publishDate="November 13, 2024"
        />
        <div className="box-border caret-transparent w-full m-auto px-[15px]">
          <a
            href="/blog/page/2"
            className="text-red-500 font-medium box-border caret-transparent block float-right"
          >
            Next Page &gt;
          </a>
        </div>
      </div>
    </div>
  );
};
