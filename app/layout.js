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
  title: "Ankit Singh | Full Stack Developer | Student",
  description:
    "I am a full stack developer skilled in Next.js, React, Node.js, MySQL and MongoDB. Open to placements and freelance projects. Check out my projects, resume, and contact info.",
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
        <header className="">
          <Header/>
        </header>
        <main className="min-h-screen mt-20 mb-2">
                 {children}
        </main>
   
        <footer className="">
          contact
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

