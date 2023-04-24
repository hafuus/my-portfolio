
import { BsTwitter } from "react-icons/bs";
import {BsLinkedin } from "react-icons/bs";
import {BsGithub } from "react-icons/bs";
import {ImMobile2} from "react-icons/im";
import {ImLocation} from "react-icons/im";
import { SiGmail} from "react-icons/si";



function footer() {
  return (
    <div>
      
      <footer class="relative bg-blueGray-200 pt-24 pb-6 bg-gray-200 mt-24 ">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
          Find me on these platforms
        </h5>
        <div class="mt-6 lg:mb-0 mb-6  flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none ml-16 space-x-6">

                    {/* <!-- Linkedin --> */}
                    <a href="https://www.linkedin.com/in/hafsa-ahmed-227a0923b/" className="socialMedia">
                    <BsLinkedin size={25}/>
                    </a>

                    {/* <!-- Github --> */}
                    <a href=" https://github.com/hafuus" className="socialMedia">
                    <BsGithub size={25}/>
                    </a>

                     {/* <!-- Twitter --> */}
                     <a href=" https://twitter.com/" className="socialMedia">
                    <BsTwitter size={25}/>
                    </a>
                    
        </div>
      </div>
      {/* <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6"> */}
          
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold pb-2 pl-4">contact me</span>
            <div className="py-2 px-7 space-y-3 pl-4">
                {/* <h3 className=" text-xl font-bold text-red-300 ">call us..</h3> */}
                <div className="text-gray-900 flex text-center">
                    <ImMobile2 size={25}/>
                    <h3 className="pl-2">+252-63-3151145</h3>
                </div>
                <div className="text-gray-900 flex text-center ">
                    <SiGmail size={25}/>
                    <h3 className="pl-2">hafsa.ahmede7@gmail.com</h3>

                </div>
                <div className="text-gray-900 flex text-center ">
                    <ImLocation size={25}/>
                    <h3 className="pl-2">Hargeisa, Somaliland</h3>
                </div>
            </div>
          {/* </div>
        </div> */}
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"></hr>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © 2023
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default footer
