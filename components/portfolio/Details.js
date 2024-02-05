import React from 'react'

export default function Details({}) {
function closModal(){
console.log('workings...')
}


  return (
    <>
      <div className="slideshow">
    
              <ul >
                {/* Portfolio Item Detail Starts */}
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    {/* Project Details Starts */}
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project 2
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8" />
                          <button  onClick={()=>{console.log('working')}}>test</button>
                          <span className="project-label">Project </span>:{" "}
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8" />
                          <span className="project-label">Client </span>:{" "}
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8" />
                          <span className="project-label">Langages </span>:{" "}
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8" />
                          <span className="project-label">Preview </span>:{" "}
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    {/* Project Details Ends */}
                    {/* Main Project Content Starts */}
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-1.jpg"
                      alt="Portolio Image"
                    />
                    {/* Main Project Content Ends */}
                  </figure>
                </li>
                {/* Portfolio Item Detail Ends */}
                {/* Portfolio Item Detail Starts */}
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    {/* Project Details Starts */}
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Youtube Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8" />
                          <span className="project-label">Project </span>:{" "}
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8" />
                          <span className="project-label">Client </span>:{" "}
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8" />
                          <span className="project-label">Langages </span>:{" "}
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8" />
                          <span className="project-label">Preview </span>:{" "}
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    {/* Project Details Ends */}
                    {/* Main Project Content Starts */}
                    <div className="videocontainer">
                      <iframe
                        className="youtube-video"
                        src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer"
                        allowFullScreen=""
                      />
                    </div>
                    {/* Main Project Content Ends */}
                  </figure>
                </li>
                {/* Portfolio Item Detail Ends */}
                {/* Portfolio Item Detail Starts */}
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    {/* Project Details Starts */}
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Local Video Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8" />
                          <span className="project-label">Project </span>:{" "}
                          <span className="font-semibold">Video</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8" />
                          <span className="project-label">Client </span>:{" "}
                          <span className="font-semibold">Videohive</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8" />
                          <span className="project-label">Langages </span>:{" "}
                          <span className="font-semibold">
                            Adobe After Effects
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8" />
                          <span className="project-label">Preview </span>:{" "}
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.videhive.net
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    {/* Project Details Ends */}
                    {/* Main Project Content Starts */}
                    <video
                      id="video"
                      className="responsive-video"
                      controls=""
                      poster="assets/img/projects/project-3.jpg"
                    >
                      <source
                        src="assets/img/projects/video.mp4"
                        type="video/mp4"
                      />
                    </video>
                    {/* Main Project Content Ends */}
                  </figure>
                </li>
                {/* Portfolio Item Detail Ends */}
                {/* Portfolio Item Detail Starts */}
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    {/* Project Details Starts */}
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8" />
                          <span className="project-label">Project </span>:{" "}
                          <span className="font-semibold">Video</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8" />
                          <span className="project-label">Client </span>:{" "}
                          <span className="font-semibold">Videohive</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8" />
                          <span className="project-label">Langages </span>:{" "}
                          <span className="font-semibold">Adobe Premium</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8" />
                          <span className="project-label">Preview </span>:{" "}
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.videhive.net
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    {/* Project Details Ends */}
                    {/* Main Project Content Starts */}
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-4.jpg"
                      alt="Portolio Image"
                    />
                    {/* Main Project Content Ends */}
                  </figure>
                </li>
                {/* Portfolio Item Detail Ends */}
                {/* Portfolio Item Detail Starts */}
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    {/* Project Details Starts */}
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8" />
                          <span className="project-label">Project </span>:{" "}
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8" />
                          <span className="project-label">Client </span>:{" "}
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8" />
                          <span className="project-label">Langages </span>:{" "}
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8" />
                          <span className="project-label">Preview </span>:{" "}
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    {/* Project Details Ends */}
                    {/* Main Project Content Starts */}
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-5.jpg"
                      alt="Portolio Image"
                    />
                    {/* Main Project Content Ends */}
                  </figure>
                </li>
                {/* Portfolio Item Detail Ends */}
                {/* Portfolio Item Detail Starts */}
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    {/* Project Details Starts */}
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8" />
                          <span className="project-label">Project </span>:{" "}
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8" />
                          <span className="project-label">Client </span>:{" "}
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8" />
                          <span className="project-label">Langages </span>:{" "}
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8" />
                          <span className="project-label">Preview </span>:{" "}
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    {/* Project Details Ends */}
                    {/* Main Project Content Starts */}
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-6.jpg"
                      alt="Portolio Image"
                    />
                    {/* Main Project Content Ends */}
                  </figure>
                </li>
                {/* Portfolio Item Detail Ends */}
                {/* Portfolio Item Detail Starts */}
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    {/* Project Details Starts */}
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8" />
                          <span className="project-label">Project </span>:{" "}
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8" />
                          <span className="project-label">Client </span>:{" "}
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8" />
                          <span className="project-label">Langages </span>:{" "}
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8" />
                          <span className="project-label">Preview </span>:{" "}
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    {/* Project Details Ends */}
                    {/* Main Project Content Starts */}
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-7.jpg"
                      alt="Portolio Image"
                    />
                    {/* Main Project Content Ends */}
                  </figure>
                </li>
                {/* Portfolio Item Detail Ends */}
                {/* Portfolio Item Detail Starts */}
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    {/* Project Details Starts */}
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8" />
                          <span className="project-label">Project </span>:{" "}
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8" />
                          <span className="project-label">Client </span>:{" "}
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8" />
                          <span className="project-label">Langages </span>:{" "}
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8" />
                          <span className="project-label">Preview </span>:{" "}
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    {/* Project Details Ends */}
                    {/* Main Project Content Starts */}
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-8.jpg"
                      alt="Portolio Image"
                    />
                    {/* Main Project Content Ends */}
                  </figure>
                </li>
                {/* Portfolio Item Detail Ends */}
                {/* Portfolio Item Detail Starts */}
                <li className="w-660 absolute left-1/2 top-1/2 -mt-280 -ml-330 invisible">
                  <figure className="w-full h-full bg-black-3 p-30 overflow-auto rounded-10">
                    {/* Project Details Starts */}
                    <figcaption className="mb-15">
                      <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                        Image Project
                      </h3>
                      <div className="flex flex-wrap font-Open-sans text-fs-15">
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-file-text-o pr-8" />
                          <span className="project-label">Project </span>:{" "}
                          <span className="font-semibold">Website</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-user-o pr-8" />
                          <span className="project-label">Client </span>:{" "}
                          <span className="font-semibold">Envato</span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-code pr-8" />
                          <span className="project-label">Langages </span>:{" "}
                          <span className="font-semibold">
                            HTML, CSS, Javascript
                          </span>
                        </div>
                        <div className="w-1/2 xs:w-full mb-8">
                          <i className="fa fa-external-link pr-8" />
                          <span className="project-label">Preview </span>:{" "}
                          <span className="font-semibold">
                            <a
                              className="underline text-accent"
                              href="#"
                              target="_blank"
                            >
                              www.envato.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </figcaption>
                    {/* Project Details Ends */}
                    {/* Main Project Content Starts */}
                    <img
                      className="block w-full rounded-5"
                      src="assets/img/projects/project-9.jpg"
                      alt="Portolio Image"
                    />
                    {/* Main Project Content Ends */}
                  </figure>
                </li>
                {/* Portfolio Item Detail Ends */}
              </ul>
              {/* Portfolio Navigation Starts */}
              <nav className="down-lg:fixed down-lg:top-0 down-lg:w-full down-lg:h-102 down-lg:bg-black-3 down-lg:z-10 down-lg:border-b down-lg:border-solid down-lg:border-b-black-4 xs:h-62">
                <span className="nav-prev fixed cursor-pointer py-200 px-30 top-1/2 down-lg:top-35 from-lg:-translate-y-1/2 from-lg:left-0 down-lg:left-30 xs:w-20 xs:top-21">
                  <img
                    className="block"
                    src="assets/img/projects/navigation/left-arrow.png"
                    alt="previous"
                  />
                </span>
                <span className="nav-next fixed cursor-pointer py-200 px-30 top-1/2 down-lg:top-35 from-lg:-translate-y-1/2 from-lg:right-0 down-lg:right-30 xs:w-20 xs:top-21">
                  <img
                    className="block"
                    src="assets/img/projects/navigation/right-arrow.png"
                    alt="next"
                  />
                </span>
                <span className="nav-close fixed cursor-pointer from-lg:top-30 down-lg:top-35 from-lg:right-30 down-lg:left-0 down-lg:right-0 down-lg:mx-auto down-lg:block down-lg:w-32 xs:w-20 xs:top-21">
                  <img
                    className="block"
                    src="assets/img/projects/navigation/close-button.png"
                    alt="close"
                   
                  />{" "}
                </span>
              </nav>
              {/* Portfolio Navigation Ends */}
            </div>
    </>
  )
}
