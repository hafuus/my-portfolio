     // import { ProjectCard } from "./ProjectCard";
        import projImg1 from "../images/projimg1.jpg";
        import projImg2 from "../images/projimg2.jpeg";
        // import TrackVisibility from 'react-on-screen';

function Projects() {
    const projects = [
        {
          title: "me.bakes",
          description: "this is a responsive React JS-based frontend project that serves as an informative website for a cupcake shop. It provides a user-friendly interface and unique design.",
          imgUrl: projImg1,
          codeurl: "https://github.com/hafuus/me.bakes/",
          siteurl: "https://mebakes.netlify.app/"
        },
        {
          title: "me.socialmedia",
          description: "MERN Stack social media project allows registration, post creation, friend management, profile customization with light/dark mode. ",
          imgUrl: projImg2,
          codeurl: "https://github.com/hafuus/mmesocialmedia.git",
          siteurl: "https://mesocialmedia.netlify.app/"
        }
    ];
   

    
  return (

        // return (
            // <ProjectCard
            //   key={index}
            //   {...project}
            //   />
        //   )

    <div className='pt-16' >
        <h3 className="text-2xl text-cyan-900 font-bold text-center mb-5">my latest projects</h3>
   
    <div className=' grid' >
        <div class="grid lg:grid-cols-2">
        {projects.map((project, index) => (
        <div 
        // key={index}
        > 
        
        <a href="https://mesocialmedia.netlify.app/" class=" bg-gray-100 hover:bg-white  ">
       <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg">
        <img src={project.imgUrl}
            class="w-1/1 lg:w-1/2 rounded-l-2xl"/>
        <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">{project.title}</h2>
            <p class="text-gray-600">{project.description}</p>
        </div>
    </div>
    </a>

    <div className="md:pl-24 md:space-x-24 pt-3 pl-3">
    <a type="button"href= {project.codeurl} class="focus:outline-none text-white bg-teal-700 hover:bg-green-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-10 py-3 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">code</a>
    <a type="button"href={project.siteurl} class="focus:outline-none text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:ring-rose-100 font-medium rounded-lg text-sm px-10 py-3 mr-2 mb-2 dark:bg-rose-400 dark:hover:bg-rose-500 dark:focus:ring-rose-600">visit site</a>
    </div>
    </div>
    ))}


    {/* <a href="#" class=" bg-gray-100 hover:bg-white  ">
    <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            class="w-1/1 lg:w-1/2 rounded-l-2xl"/>
        <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">horizantal Image</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum
                ab
                rem, consequuntur autem totam sit minima porro?</p>
        </div>
    </div>
    </a> */}
  
 </div>

    </div>
    </div>
  )
}

export default Projects

