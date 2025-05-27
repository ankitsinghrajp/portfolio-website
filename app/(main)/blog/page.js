
const Page = () => {
  return (
    <div className='p-2'>
       <div className='container mx-auto'>
        <div>
          <h2 className='text-3xl  md:text-5xl pb-3 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent  pr-2'>What I&apos;ve Learned</h2>
          <div className="text-[18px] dark:text-gray-400 research-paragraph text-gray-700">In the last few months, I’ve been working on three really cool projects: SprintBoard, AI Car Market, and Elevate AI. Each one helped me learn something new about full-stack development, solving real-life problems, and bringing AI into the mix. Now, I want to share what I picked up while building them.</div>
       </div>
       <div className="my-10">
        <h3 className="text-2xl dark:text-gray-200 text-gray-600 mb-2 font-bold"> SprintBoard — Organizing Work the Agile Way</h3>
        <div className="text-[18px] dark:text-gray-400 research-paragraph text-gray-700">SprintBoard, which is similar to tools like Jira, showed me how to create fancy drag-and-drop interfaces and build boards where multiple people can work together in real time. A big lesson I learned was figuring out how to keep everything organized and updated across different parts of the app without making the screen feel slow or confusing.</div>
        <h4 className="text-xl dark:text-gray-300 text-gray-700 my-2 font-bold">What I learned</h4>
        <ul className="list-disc flex flex-col gap-1 research-paragraph pl-5 dark:text-gray-400 text-[18px] text-gray-700">
          <li>Managing state in React with hooks. </li>
          <li>Logic that works with drag-and-drop in real time.</li>
          <li>Building flexible backend APIs with Next.js.</li>
          <li>Challenges: Keeping tasks in sync between columns and handling performance when the screen changes often.</li>
        </ul>
       </div>


       <div className="my-10">
        <h3 className="text-2xl dark:text-gray-200 text-gray-600 mb-2 font-bold"> AI Car Market — Smarter Car Buying Decisions</h3>
        <div className="text-[18px] dark:text-gray-400 research-paragraph text-gray-700">The AI Car Market let me explore how AI helps with recommendation systems. I looked at how people search for and compare cars and how machine learning can help them make smarter choices.</div>
        <h4 className="text-xl dark:text-gray-300 text-gray-700 my-2 font-bold">What I learned</h4>
        <ul className="list-disc flex flex-col gap-1 research-paragraph pl-5 dark:text-gray-400 text-[18px] text-gray-700">
          <li>Offering personalized suggestions and price predictions with AI. </li>
          <li>Dynamic filters and smart comparison tools.</li>
          <li>Designing a user interface that’s both simple and functional.(UI/UX)</li>
          <li>Challenges: Sharing big sets of data clearly and finding useful information from how users act.</li>
        </ul>
       </div>


       <div className="my-10">
        <h3 className="text-2xl dark:text-gray-200 text-gray-600 mb-2 font-bold">Elevate AI — Career Coaching with AI</h3>
        <div className="text-[18px] dark:text-gray-400 research-paragraph text-gray-700">My personal favorite was Elevate AI, an AI-powered career coach that assists users with their resumes, skill assessments, and getting ready for jobs. Working on this project really helped me improve my skills in connecting third-party AI tools and building interactive forms.</div>
        <h4 className="text-xl dark:text-gray-300 text-gray-700 my-2 font-bold">What I learned</h4>
        <ul className="list-disc flex flex-col gap-1 research-paragraph pl-5 dark:text-gray-400 text-[18px] text-gray-700">
          <li>Working with AI APIs to auto-generate resumes and cover letters.</li>
          <li>Creating forms that change depending on what users enter.</li>
          <li>Exporting clean PDFs from dynamic HTML templates.</li>
          <li>Challenges: Handling edge cases in AI-generated content and ensuring resume formatting looked professional across devices.</li>
        </ul>
       </div>
       </div>
    </div>
  )
}

export default Page