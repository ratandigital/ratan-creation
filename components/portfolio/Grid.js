

import React, { useState } from 'react'
import DetailsTab from '../test2';


export default function Grid({titleControl}) {
  const [blogDetails, setBlogDetails] = useState(false);

  const [test, setTest] = useState(false);
  function blog_details (){
    console.log("Blog detail page")
  }

  function mousOut(){
    setHover('block')
  }
   function hoverEffects(){
   titleControl('none')
   setTest(true)
   
   }

   function closModal (){
    titleControl('')
    setTest(false)
   }
  return (
    <>
         <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {/* Portfolio Grid Item Starts */}
                <li onClick={hoverEffects} className="isb w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0 ">
                  <figure className="isb transition duration-300 rounded-5 relative overflow-hidden ${hidden}" >
                    
                    <img
                      className="block relative w-full rounded-5 transition duration-300" 
                      src="assets/img/projects/project-1.jpg"
                      alt=""
                      // style={{display:`${hover}`}}
                    />
                    {/* <h2>This is test content</h2> */}
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                      <span className="uppercase text-fs-18 text-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                {/* Portfolio Grid Item Ends */}
                {/* Portfolio Grid Item Starts */}
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src="assets/img/projects/project-2.jpg"
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                      <span className="uppercase text-fs-18 tex-white">
                        youtube project
                      </span>
                    </div>
                  </figure>
                </li>
                {/* Portfolio Grid Item Ends */}
                {/* Portfolio Grid Item Starts */}
                <li onClick={blog_details} className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src="assets/img/projects/project-3.jpg"
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                      <span className="uppercase text-fs-18 tex-white">
                        Local Video project
                      </span>
                    </div>
                  </figure>
                </li>
                {/* Portfolio Grid Item Ends */}
                {/* Portfolio Grid Item Starts */}
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src="assets/img/projects/project-4.jpg"
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                      <span className="uppercase text-fs-18 tex-white">
                        Image Project
                      </span>
                    </div>
                  </figure>
                </li>
                {/* Portfolio Grid Item Ends */}
                {/* Portfolio Grid Item Starts */}
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src="assets/img/projects/project-5.jpg"
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                {/* Portfolio Grid Item Ends */}
                {/* Portfolio Grid Item Starts */}
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src="assets/img/projects/project-6.jpg"
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                {/* Portfolio Grid Item Ends */}
                {/* Portfolio Grid Item Starts */}
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src="assets/img/projects/project-7.jpg"
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                {/* Portfolio Grid Item Ends */}
                {/* Portfolio Grid Item Starts */}
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src="assets/img/projects/project-8.jpg"
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                {/* Portfolio Grid Item Ends */}
                {/* Portfolio Grid Item Starts */}
                <li className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0">
                  <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                    <img
                      className="block relative w-full rounded-5 transition duration-300"
                      src="assets/img/projects/project-9.jpg"
                      alt=""
                    />
                    <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                      <span className="uppercase text-fs-18 tex-white">
                        image project
                      </span>
                    </div>
                  </figure>
                </li>
                {/* Portfolio Grid Item Ends */}
              </ul>
            </div>
            {test ? <DetailsTab closModal={closModal}/> : ''}
            
    </>
  )
}
