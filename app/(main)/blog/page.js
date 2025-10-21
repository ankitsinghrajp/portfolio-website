// ✅ SEO Metadata for Blog Page
export const metadata = {
  title: "What I’ve Learned | Ankit Singh Chouhan | Full Stack Developer",
  description:
    "Ankit Singh Chouhan shares his journey as a Full Stack Developer — from building a production-ready MERN Chat App with Socket.io to managing a live React + PHP eCommerce project during his internship. Learnings, challenges, and growth insights included.",
  keywords: [
    "Ankit Singh Chouhan blog",
    "MERN Chat App",
    "Socket.io project",
    "React PHP internship",
    "Full Stack Developer journey",
    "MERN stack developer",
    "PHP backend project",
    "Web development experience",
    "React projects",
    "Next.js blog portfolio",
  ],
  openGraph: {
    title: "What I’ve Learned | Ankit Singh Chouhan",
    description:
      "Journey of Ankit Singh Chouhan — from learning PHP in 3 days to building a real-time MERN Chat App and deploying production-ready full-stack projects.",
    url: "https://your-portfolio-link.com/blog", // replace with your blog page URL
    siteName: "Ankit Singh Portfolio",
    images: [
      {
        url: "https://your-portfolio-link.com/og-blog-image.jpg", // optional preview image
        width: 1200,
        height: 630,
        alt: "Ankit Singh Chouhan Blog - Developer Journey",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What I’ve Learned | Ankit Singh Chouhan",
    description:
      "From building a MERN Chat App to managing a live React + PHP eCommerce project — the journey of Full Stack Developer Ankit Singh Chouhan.",
    images: ["https://your-portfolio-link.com/og-blog-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl pb-3 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
            What I&apos;ve Learned
          </h2>
          <div className="text-[18px] dark:text-gray-400 text-gray-700 leading-relaxed">
            Over the past few months, I’ve grown tremendously as a full-stack developer by building and deploying{" "}
            <b>real-world projects</b> and gaining valuable <b>industry experience</b> through my internship.
            Two milestones stand out the most in my journey — creating a{" "}
            <b>production-ready MERN Chat Application with Socket.io</b> and working on a{" "}
            <b>large-scale React + PHP eCommerce project</b> during my internship.
            Both experiences taught me the true meaning of learning fast, solving real problems, and working independently under pressure.
          </div>
        </div>

        {/* MERN Chat App Section */}
        <div className="my-10">
          <h3 className="text-2xl dark:text-gray-200 text-gray-600 mb-2 font-bold">
            MERN Chat App — Real-Time Communication at Scale
          </h3>
          <div className="text-[18px] dark:text-gray-400 text-gray-700 leading-relaxed">
            The <b>MERN Chat App</b> was one of the most challenging yet rewarding projects I’ve ever built.
            It’s a full-stack, real-time chat platform developed using <b>MongoDB, Express, React, Node.js, and Socket.io</b>.
            I wanted it to feel like a professional, scalable messaging app — not just a demo — so I focused on creating a
            complete end-to-end experience where users can chat in groups, send media files, and stay connected in real time.
            <br /><br />
            One of the biggest challenges was implementing <b>real-time communication</b> without delays or inconsistencies.
            Socket.io became the backbone for instant message delivery and online status tracking.
            I also integrated features like <b>“typing…” indicators</b>, <b>read receipts</b>, <b>file uploads</b>, 
            and <b>authentication using JWT</b> to make it truly production-ready.
            <br /><br />
            For deployment, I optimized the backend API hosted on <b>Render</b> and ensured the frontend (React + Vite)
            remained fast and responsive across devices. The biggest learning came from debugging real-time events,
            handling CORS issues, and maintaining database synchronization under heavy load.
          </div>

          <h4 className="text-xl dark:text-gray-300 text-gray-700 my-2 font-bold">What I learned</h4>
          <ul className="list-disc flex flex-col gap-1 pl-5 text-[18px] dark:text-gray-400 text-gray-700">
            <li>Setting up Socket.io for bidirectional communication between client and server.</li>
            <li>Building secure authentication with JWT and role-based access.</li>
            <li>Managing chat data efficiently with MongoDB and Mongoose.</li>
            <li>Optimizing uploads with Multer and integrating Cloudinary for media hosting.</li>
            <li>Handling deployment, CORS, and real-time synchronization challenges.</li>
          </ul>
        </div>

        {/* Internship Experience */}
        <div className="my-10">
          <h3 className="text-2xl dark:text-gray-200 text-gray-600 mb-2 font-bold">
            My Internship Journey — From Learning PHP in 3 Days to Managing a Live Project
          </h3>
          <div className="text-[18px] dark:text-gray-400 text-gray-700 leading-relaxed">
            During my internship, I was challenged to learn <b>PHP in just 3 days</b> and work on a live <b>React + PHP eCommerce project</b> deployed via <b>cPanel</b>.
            I had to understand the backend logic, debug existing code, and deploy updates independently.
            <br /><br />
            I faced real-world production issues like managing databases, configuring domains and SSL, and fixing broken API endpoints.
            Through constant trial and error, I not only got the site live but also improved performance, backend security, and deployment workflows.
          </div>

          <h4 className="text-xl dark:text-gray-300 text-gray-700 my-2 font-bold">What I learned</h4>
          <ul className="list-disc flex flex-col gap-1 pl-5 text-[18px] dark:text-gray-400 text-gray-700">
            <li>Learning PHP from scratch and integrating it with React frontend.</li>
            <li>Debugging large codebases and understanding backend structures.</li>
            <li>Managing cPanel deployments and database configurations.</li>
            <li>Improving backend performance and security.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="my-12">
          <h3 className="text-2xl dark:text-gray-200 text-gray-600 mb-3 font-bold">My Journey Forward</h3>
          <div className="text-[18px] dark:text-gray-400 text-gray-700 leading-relaxed">
            These experiences taught me how to learn fast, solve complex problems, and deliver results independently.
            Moving forward, I’m focusing on building scalable full-stack and AI-driven systems and mastering backend performance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
