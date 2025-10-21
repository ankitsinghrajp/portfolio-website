import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Ankit Singh Chouhan | Full Stack Developer | MERN & PHP Developer",
  description:
    "Ankit Singh Chouhan — a passionate Full Stack Developer skilled in Next.js, React, Node.js, Express, MongoDB, MySQL, and PHP. Open to placements and freelance opportunities. Explore my projects, resume, and contact info.",
  keywords: [
    "Ankit Singh Chouhan",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "PHP Developer",
    "Web Developer Portfolio",
    "Freelance Developer",
    "Software Engineer",
  ],
  author: "Ankit Singh Chouhan",
  openGraph: {
    title: "Ankit Singh Chouhan | Full Stack Developer",
    description:
      "Portfolio of Ankit Singh Chouhan — Full Stack Developer skilled in MERN stack, PHP, and modern web technologies.",
    url: "https://ankits-portfolio-omega.vercel.app/", 
    siteName: "Ankit Singh Portfolio",
    images: [
      {
        url: "https://your-portfolio-link.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ankit Singh Chouhan Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Singh Chouhan | Full Stack Developer",
    description:
      "Explore Ankit Singh Chouhan’s portfolio — Full Stack Developer skilled in MERN, PHP, and scalable systems.",
    creator: "@AnkitSingh84347", 
    images: ["https://your-portfolio-link.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-[#09090b] bg-[#EEEEFF]`}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <header>
            <Header />
          </header>
          <main className="min-h-screen mt-20 mb-2">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
