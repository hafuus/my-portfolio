import { Link } from "react-router-dom"

function About() {
  return (
    <div>




    <div className=" mt-28 container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center bg-slate-200">
        <div className="flex flex-col w-full md:w-3/5 justify-center items-center text-center md:text-left "></div>
    <p class="text-navy-800 dark:text-black  block font-sans text-base font-normal leading-relaxed text-inherit antialiased dark:text-white  pt-8 lg:px-48">
    I'm a full stack web developers with a passion for creating and building websites and web applications. 
             I am proficient in React, Node.js and MongoDB, as well as other front-end and back-end technologies such as HTML, CSS, JavaScript, PHP, MySQL, tailwind css, and Git.<br></br>
             Recently, I have been focusing on building full-stack web application projects using the MERN stack to demonstrate and showcase my skills. 
             I am a quick learner, with a constantly seeking new challenges and opportunities to apply my creativity and problem-solving skills to real-world projects.  
              I believe that collaboration and open communication are key to success, and I am excited to work with clients and team members
               to bring their ideas to life on the web.
</p>
<Link to = "/resume" className ="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 md:px-8 px-10 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out lg:ml-80 ">
            view my profile
          </Link>
</div>

 </div>
  )
}

export default About
