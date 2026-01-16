// lib/tech-icons.tsx
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
  SiNestjs,
  SiDocker,
  SiVuedotjs,
  SiOracle,
  SiResend,
  SiGit
} from 'react-icons/si';

export const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'react': SiReact,
  'react-native': SiReact, // or use a React Native specific icon if available
  'nextjs': SiNextdotjs,
  'next.js': SiNextdotjs,
  'typescript': SiTypescript,
  'tailwindcss': SiTailwindcss,
  'tailwind': SiTailwindcss,
  'supabase': SiSupabase,
  'nodejs': SiNodedotjs,
  'node.js': SiNodedotjs,
  'nestjs': SiNestjs,
  'docker': SiDocker,
  'vue': SiVuedotjs,
  'oracle': SiOracle,
  'resend': SiResend,
  'git': SiGit,
  // Add more mappings as needed
};

export const techNames: Record<string, string> = {
  'react': 'React',
  'react-native': 'React Native',
  'nextjs': 'Next.js',
  'next.js': 'Next.js',
  'typescript': 'TypeScript',
  'tailwindcss': 'Tailwind CSS',
  'tailwind': 'Tailwind CSS',
  'supabase': 'Supabase',
  'nodejs': 'Node.js',
  'node.js': 'Node.js',
  'nestjs': 'NestJS',
  'docker': 'Docker',
  'vue': 'Vue.js',
  'oracle': 'Oracle',
  'resend': 'Resend',
  'git': 'Git',
};