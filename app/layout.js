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
  title:
    "Ankit Singh Chouhan | Full Stack Developer | Backend Engineer | VIT Bhopal",

  description:
    "Ankit Singh Chouhan is a Full Stack Developer and Backend Engineer from VIT Bhopal, India. Skilled in Next.js, React, Node.js, Express, MongoDB, MySQL, and PHP. Built apps with 1800+ users and real revenue.",

  keywords: [
    "Ankit Singh Chouhan",
    "Ankit Singh Chouhan VIT",
    "Ankit Singh backend engineer",
    "Ankit Singh product engineer",
    "Ankit Singh Ujjain",
    "Full Stack Developer India",
    "MERN Developer",
    "Next.js Developer",
    "Node.js Developer"
  ],

  authors: [{ name: "Ankit Singh Chouhan" }],
  creator: "Ankit Singh Chouhan",

  openGraph: {
    title: "Ankit Singh Chouhan | Full Stack Developer",
    description:
      "Portfolio of Ankit Singh Chouhan — Full Stack Developer & Backend Engineer building scalable web apps.",
    url: "https://ankits-portfolio-omega.vercel.app/",
    siteName: "Ankit Singh Portfolio",
    images: [
      {
        url: "https://ankits-portfolio-omega.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankit Singh Chouhan Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ankit Singh Chouhan",
    description: "Full Stack Developer | Backend Engineer",
    creator: "@AnkitSingh84347",
    images: ["https://ankits-portfolio-omega.vercel.app/og-image.png"],
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
