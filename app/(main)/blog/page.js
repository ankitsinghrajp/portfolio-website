const Page = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl pb-3 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
            What I&apos;ve Learned
          </h2>
          <div className="text-[18px] dark:text-gray-400 text-gray-700 leading-relaxed">
            Over the past few months, I’ve grown tremendously as a full-stack developer by building and deploying 
            <b> real-world projects</b> and gaining valuable <b>industry experience</b> through my internship. 
            Two milestones stand out the most in my journey — 
            creating a <b>production-ready MERN Chat Application with Socket.io</b> 
            and working on a <b>large-scale React + PHP eCommerce project</b> during my internship. 
            Both experiences taught me the true meaning of learning fast, solving real problems, and working independently under pressure.
          </div>
        </div>

        {/* MERN Chat App */}
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
            I also integrated features like <b>“typing…” indicators</b>, <b>read receipts</b>, <b>file uploads (images, videos, documents)</b>, 
            and <b>authentication using JWT</b> to make it truly production-ready.
            <br /><br />
            For deployment, I optimized the backend API hosted on <b>Render</b> and ensured the frontend (React + Vite) 
            remained fast and responsive across devices. The biggest learning came from debugging real-time events, 
            handling CORS issues between frontend and backend, and maintaining database synchronization under heavy user load.
          </div>

          <h4 className="text-xl dark:text-gray-300 text-gray-700 my-2 font-bold">What I learned</h4>
          <ul className="list-disc flex flex-col gap-1 pl-5 text-[18px] dark:text-gray-400 text-gray-700">
            <li>Setting up Socket.io for bidirectional real-time communication between client and server.</li>
            <li>Building secure authentication with JWT and role-based user access.</li>
            <li>Managing chat data efficiently in MongoDB with Mongoose schemas.</li>
            <li>Optimizing media uploads with <b>Multer</b> and integrating <b>Cloudinary</b> for image hosting.</li>
            <li>Deploying full-stack apps on cloud platforms and resolving real-time CORS and latency issues.</li>
            <li>Handling real-time state management using <b>React Query</b> and <b>Redux Toolkit</b>.</li>
            <li>Creating a clean, user-friendly, and responsive chat UI that scales across all devices.</li>
          </ul>
          <div className="text-[18px] dark:text-gray-400 text-gray-700 mt-3">
            This project taught me the difference between just “building an app” and building something that’s 
            <b> truly production-ready</b> — where scalability, security, and smooth user experience all matter equally. 
            It also gave me the confidence to handle <b>complex real-time systems</b> independently.
          </div>
        </div>

        {/* Internship Experience */}
        <div className="my-10">
          <h3 className="text-2xl dark:text-gray-200 text-gray-600 mb-2 font-bold">
            My Internship Journey — From Learning PHP in 3 Days to Managing a Live Project
          </h3>
          <div className="text-[18px] dark:text-gray-400 text-gray-700 leading-relaxed">
            During my internship, I faced one of the biggest learning curves of my career. 
            On the very first week, my mentor told me, <b>“You have 3 days to learn PHP because you’ll be handling a live project.”</b>  
            That project was a <b>large-scale eCommerce website</b> — built on a <b>React frontend</b> with a <b>PHP backend</b> and deployed using <b>cPanel</b>.
            <br /><br />
            At first, it felt impossible. I had never written PHP before, and now I had to read someone else’s codebase, 
            fix bugs, build new features, and manage deployment — all within tight deadlines. 
            But I accepted the challenge and started learning PHP day and night. Within a few days, I became comfortable with its syntax, 
            structure, and how it connected with databases and APIs.
            <br /><br />
            Deploying on <b>cPanel</b> was another big challenge. Unlike cloud platforms or local servers, cPanel deployment 
            required configuring domains, SSL, environment variables, and version control manually. 
            I learned how to handle file permissions, optimize server performance, and use Git for smooth deployments. 
            Through constant trial and error, I finally got the website live — and it felt like a huge win.
          </div>

          <h4 className="text-xl dark:text-gray-300 text-gray-700 my-2 font-bold">What I learned</h4>
          <ul className="list-disc flex flex-col gap-1 pl-5 text-[18px] dark:text-gray-400 text-gray-700">
            <li>Learning PHP from scratch in 3 days and understanding backend logic quickly.</li>
            <li>Debugging and maintaining large, existing codebases written by other developers.</li>
            <li>Connecting React frontend with a PHP backend using RESTful APIs.</li>
            <li>Handling production deployment using cPanel, managing databases, and SSL configurations.</li>
            <li>Improving backend security, optimizing queries, and fixing broken API endpoints.</li>
            <li>Learning real-world communication and problem-solving in a professional work environment.</li>
          </ul>

          <div className="text-[18px] dark:text-gray-400 text-gray-700 mt-3">
            This internship taught me that real growth happens outside your comfort zone. 
            It gave me the confidence to face any stack, learn fast, and deliver results even under pressure. 
            It was more than just coding — it was about <b>responsibility, ownership, and adaptability</b>. 
            That experience shaped the way I approach every new technology today.
          </div>
        </div>

        {/* Conclusion */}
        <div className="my-12">
          <h3 className="text-2xl dark:text-gray-200 text-gray-600 mb-3 font-bold">
            My Journey Forward
          </h3>
          <div className="text-[18px] dark:text-gray-400 text-gray-700 leading-relaxed">
            Both the <b>MERN Chat App</b> and my <b>internship experience</b> gave me something priceless — 
            the mindset of a developer who can take on challenges, learn rapidly, and execute with confidence. 
            From learning new technologies overnight to deploying production-ready systems, 
            I’ve realized that true growth comes from being curious, persistent, and never afraid to fail.
            <br /><br />
            Moving forward, I’m focusing on <b>building scalable full-stack and AI-driven systems</b>, 
            refining my backend expertise, and continuously learning advanced tools that shape the future of software engineering.
            <br /><br />
            Every project, every late-night debug session, and every real-world challenge has shaped me into who I am today — 
            a passionate developer with the hunger to build, innovate, and lead.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
