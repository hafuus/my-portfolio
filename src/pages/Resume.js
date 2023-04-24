import { MdDownload } from "react-icons/md";
import Skills from "../components/Skills";


function Resume() {

      return (
        <div >
            <a href="assets/resume semi.pdf" download>
                <button className=" mt-28 md:ml-36  flex mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full p-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <MdDownload size={20}/> Download my Resume</button>
              </a>

            <div className="md:pl-48 pl-10 rounded-sm pt-12">
                <h2 className="text-2xl font-semibold text-cyan-800 pb-5 font-bold">Education Background</h2>
                <div className="pl-7 space-y-0.5">
                    <h3 className=" text-blacks text-lg">Abaarso Tech University</h3>
                    <p className="text-gray-800 text-base">Software Engineering</p>
                    <p className="text-xs text-gray-600">2017 - 2021</p>
                </div>

                <div className="pl-7 space-y-0.5 pt-10">
                    <h3 className=" text-blacks text-lg">Fikrcamp</h3>
                    <p className="text-gray-800 text-base">full stack development bootcamp</p>
                    <p className="text-xs text-gray-600">March 2022 - Aug 2022</p>
                </div>


                <div className="pl-7 space-y-0.5 pt-10">
                    <h3 className=" text-blacks text-lg">Noradin Girls High School</h3>
                    <p className="text-gray-800 text-base">High School</p>
                    <p className="text-xs text-gray-600">2017 - 2021</p>
                </div>
            </div>

        <Skills/>
 </div>
  )
}

export default Resume
