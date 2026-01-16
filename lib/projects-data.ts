export interface ProjectData {
  slug: string
  title: string
  description: string
  challenge: string
  solution: string
  impact: string
  tech: string[]
  images: ImageDescription[]
  videos?: string[]
  links?: {
    live?: string
    github?: string
  }
}

export interface ImageDescription {
  image: string;
  description?: string;
}

export interface TechStack {
  id: string;        
  name?: string;   
}

export const projectsData: ProjectData[] = [
  {
    slug: "customer-feedback-system",
    title: "Customer Feedback System",
    description: "Real-time customer feedback collection system for pharmacy",
    challenge:
      "A pharmacy needed a seamless way to collect in-store customer feedback and analyze responses in real-time. Traditional paper surveys were inefficient, and customers often didn't provide feedback at all.",
    solution:
      "Built a dual-platform solution: a React Native tablet app for customers to provide instant feedback in-store, and a Next.js admin dashboard for staff to monitor responses and analyze trends. Supabase handles real-time data synchronization, ensuring staff can act on feedback immediately.",
    impact:
      "Collected 3,000+ in-store customer feedback entries and is currently running in production, replacing paper surveys with a real-time, actionable feedback system that improves customer satisfaction tracking",
    tech: ["react-native", "nextjs", "supabase", "typescript", "tailwindcss"],
    images: [
      { image: "/pharmacy-project/main.png", description: "Interactive tablet interface where customers rate their pharmacy experience" },
      { image: "/pharmacy-project/admin-login.png", description: "Secure admin login interface with username and password authentication" },
      { image: "/pharmacy-project/admin-dashboard1.png", description: "Real-time dashboard displaying customer feedback analytics and trends" },
      { image: "/pharmacy-project/admin-dashboard2.png", description: "Real-time dashboard displaying customer feedback analytics and trends" },
      { image: "/pharmacy-project/tablet-question.jpeg", description: "Interactive tablet interface where customers rate their pharmacy experience" },
      { image: "/pharmacy-project/tablet-end.jpeg", description: "Thank you screen shown to customers after completing their feedback" }
    ],
  },
  {
    slug: "project-scaffolding-spa",
    title: "Project Scaffolding SPA",
    description: "Automated project generation and scaffolding tool",
    challenge:
      "Development teams wasted hours on repetitive project setup tasks: creating directory structures, configuring build tools, setting up linters, installing dependencies, and initializing repositories. This manual process was error-prone and inconsistent across teams.",
    solution:
      "Created an API and single-page application that automates the entire project generation process. Teams select a template (React, Vue, Node.js, etc.), customize configurations through an intuitive UI, and the system generates a complete project with all dependencies, pre-configured tools, and repository initialization.",
    impact:
      "Reduced project setup time from 2-3 hours to under 5 minutes. Improved consistency across team projects, reduced configuration errors, and allowed developers to focus on building features instead of boilerplate setup.",
    tech: ["NestJS", "React", "TypeScript", "Git APIs", "Docker"],
    images: [
      "/project-scaffolding-automation-dashboard.jpg",
      "/template-selection-interface.jpg",
      "/configuration-wizard.jpg",
    ],
    links: {
      github: "#",
    },
  },
  {
    slug: "photographer-portfolio",
    title: "Photographer & Makeup Portfolio",
    description: "SEO-optimized portfolio website for professional photographer and makeup artist",
    challenge:
      "A professional photographer and makeup artist needed an online presence that beautifully showcased their work while ranking well in search results. The site needed to load quickly despite high-resolution images, work perfectly on mobile devices, and attract organic traffic.",
    solution:
      "Designed and developed a responsive Next.js landing page with optimized image loading using next/image, implemented comprehensive SEO best practices (structured data, meta tags, sitemaps), and ensured fast performance through code splitting and lazy loading. Added a contact form that allows visitors to reach out directly from the page, with email notifications sent to the photographer and makeup artist using Resend.",
    impact:
      "Delivered a visually compelling portfolio that achieves 95+ Lighthouse scores across all metrics. The site loads in under 2 seconds and attracts consistent organic traffic through search engines, resulting in increased client inquiries.",
    tech: ["nextjs", "typescript", "tailwindcss", "resend"],
    images: [
      { image: "/photography-landing/hero.png"},
      { image: "/photography-landing/portfolio.png"},
      { image: "/photography-landing/gallery.png"},
      { image: "/photography-landing/gallery-modal.png"},
      { image: "/photography-landing/about-me.png"},
      { image: "/photography-landing/contact.png"},
      { image: "/photography-landing/hero-mobile.png"},
      { image: "/photography-landing/menu-mobile.png"},
      { image: "/photography-landing/portfolio-mobile.png"},
      { image: "/photography-landing/gallery-mobile.png"},
      { image: "/photography-landing/contact-mobile.png"},
    ],
    links: {
      live: "https://gabrielabissoni.com.ar/"
    },
  },
  {
    slug: "municipalidad-tandil",
    title: "Municipalidad de Tandil Website",
    description: "Government website maintenance and internal systems",
    challenge:
      "The city government needed ongoing maintenance and new features for their public-facing website and internal systems. The existing infrastructure used multiple technologies (Vue, React, Oracle) that needed to be maintained and extended while serving thousands of citizens daily.",
    solution:
      "Maintained and extended the public website using Vue and React, built internal APIs with Node.js for data management, and developed Oracle APEX applications for government operations. Ensured high availability and implemented new citizen-facing features regularly.",
    impact:
      "Delivered reliable public services online with 99.9% uptime while modernizing internal tools that improved city staff efficiency. Enabled citizens to access government services digitally, reducing in-person visits and wait times.",
    tech: ["Vue", "React", "Node.js", "Oracle Database", "Oracle APEX", "REST APIs"],
    images: ["/government-website-vue-react-interface.jpg", "/government-services-portal.jpg", "/admin-management-system.jpg"],
    links: {
      live: "#",
    },
  },
]
