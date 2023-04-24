import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='pt-16' >
        <h3 className="text-4xl font-semibold text-cyan-900 font-bold text-center mb-5">my Projects</h3>
    <div className=' grid '>
        <div class="grid lg:grid-cols-3">
        <a href="#" class=" bg-gray-100 hover:bg-white  ">
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
    </a>


    <a href="#" class=" bg-gray-100 hover:bg-white  ">
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
    </a>


    <a href="#" class=" bg-gray-100 hover:bg-white  ">
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
    </a>
 </div>

    </div>
    </div>
  )
}

export default Projects

