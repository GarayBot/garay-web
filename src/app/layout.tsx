import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Garay — Desarrollo Web a Medida | Haz crecer tu negocio",
  description: "Desarrollo web, CRM, chatbots IA y automatización en Barcelona. Haz crecer tu negocio, no tu nómina.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable} bg-[#0f1117] text-white antialiased overflow-x-clip`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
