import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { cn, Footer, Header, siteConfig } from "./shared";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(sora.variable, inter.variable, "h-full antialiased")}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only rounded-lg bg-white text-sm font-semibold text-teal-dark shadow-lift focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
