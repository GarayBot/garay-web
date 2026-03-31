import portfolioRaw from "../../portfolio-data.json";

export interface PortfolioProject {
  slug: string;
  folder: string;
  title: string;
  general: string;
  reto: string;
  solucion: string;
  techs_raw: string;
  images: string[];
  image_count: number;
  techs: string[];
}

const TECH_KEYWORDS = [
  "Next.js", "React", "Node.js", "WordPress", "PHP", "Laravel", "Vue",
  "TypeScript", "Tailwind CSS", "Supabase", "MySQL", "PostgreSQL", "MongoDB",
  "Stripe", "WooCommerce", "Shopify", "Three.js", "Docker", "Express",
  "Prisma", "SQLite", "Symfony", "Bootstrap", "Vite", "Inertia.js",
  "Socket.io", "OpenAI", "Framer Motion", "shadcn/ui", "Radix UI",
  "Elementor", "Figma", "WooCommerce", "Capacitor",
];

function extractTechs(raw: string): string[] {
  const found: string[] = [];
  for (const tech of TECH_KEYWORDS) {
    if (raw.toLowerCase().includes(tech.toLowerCase()) && !found.includes(tech)) {
      found.push(tech);
    }
  }
  // Limit to 5 most relevant
  return found.slice(0, 5);
}

export const portfolioProjects: PortfolioProject[] = (portfolioRaw as any[]).map((p) => ({
  ...p,
  techs: extractTechs(p.techs_raw || ""),
}));

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): PortfolioProject[] {
  const featuredSlugs = ["spikes", "mundoctor", "pecadocarnal", "impakta-jugadores", "chefs"];
  return featuredSlugs
    .map((slug) => portfolioProjects.find((p) => p.slug === slug))
    .filter(Boolean) as PortfolioProject[];
}
