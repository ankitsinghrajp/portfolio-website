import BlogContent from "./_components/BlogContent";


export const metadata = {
  title:
    "Blog | Ankit Singh Chouhan | Full Stack Developer | Backend Engineer",

  description:
    "Read blogs by Ankit Singh Chouhan — Full Stack Developer and Backend Engineer from VIT Bhopal. Learn about Next.js, React, Node.js, system design, scalable backend systems, and real-world project building.",

  keywords: [
    "Ankit Singh Chouhan blog",
    "Ankit Singh Chouhan VIT",
    "Ankit Singh backend engineer",
    "Full stack developer blog",
    "Node.js tutorials",
    "Next.js blog",
    "React development blog",
    "System design basics",
    "Ankit Backend engineering blog",
    "Ankit Web development tutorials",
  ],

  authors: [{ name: "Ankit Singh Chouhan" }],
  creator: "Ankit Singh Chouhan",

  openGraph: {
    title: "Blog | Ankit Singh Chouhan",
    description:
      "Explore blogs on full stack development, backend engineering, and scalable systems by Ankit Singh Chouhan.",
    url: "https://ankits-portfolio-omega.vercel.app/blog",
    siteName: "Ankit Singh Portfolio",
    images: [
      {
        url: "https://ankits-portfolio-omega.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankit Singh Chouhan Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog | Ankit Singh Chouhan",
    description:
      "Read blogs on Next.js, Node.js, React, and system design by Ankit Singh Chouhan.",
    images: ["https://ankits-portfolio-omega.vercel.app/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// This server component simply renders the interactive client component.
export default function BlogPage() {
  return <BlogContent />;
}