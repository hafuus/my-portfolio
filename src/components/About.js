import { Link } from "react-router-dom"
import { MdVisibility } from 'react-icons/md';


function About() {
  return (
    <div>




    <div className=" mt-28 container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center bg-slate-200">
        <div className="flex flex-col w-full md:w-3/5 justify-center items-center text-center md:text-left "></div>
    <p class="text-navy-800 dark:text-gray-900  block font-sans font-normal leading-relaxed text-inherit antialiased   pt-8 lg:px-48">
    I'm a full stack web developers with a passion for creating and building websites and web applications. 
             I am proficient in React, Node.js and MongoDB, as well as other front-end and back-end technologies such as HTML, CSS, JavaScript, PHP, MySQL, tailwind css, and Git.<br></br>
             Recently, I have been focusing on building full-stack web application projects using the MERN stack to demonstrate and showcase my skills. 
             I am a quick learner, with a constantly seeking new challenges and opportunities to apply my creativity and problem-solving skills to real-world projects.  
              I believe that collaboration and open communication are key to success, and I am excited to work with clients and team members
               to bring their ideas to life on the web.
</p>
{/* <Link to = "/resume" className ="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 md:py-4 md:px-8 px-16 py-2 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out lg:ml-80 ">
            view my profile
          </Link> */}
         <Link
      to="/resume"
      className=" mx-auto lg:mx-96 my-6 md:py-4 md:px-8 py-2 rounded-lg btn bg-gray-800 text-white inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-gray-900 hover:text-white focus:outline-none focus:shadow-outline-blue active:transform active:scale-95 "
    >
      <MdVisibility className="mr-2" />
      View My Profile
    </Link>

</div>

 </div>
  )
}

export default About
