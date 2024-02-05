import React from 'react'
import Preloader from './Preloader'

export default function Blog() {
  return (
    <>
    <Preloader/>
       <div className="page" id="blog">
      <div className="w-full">
        {/* Section Title Starts */}
        <div className="mx-auto w-full relative py-80 text-center xs:px-25 xs:pt-16 xs:pb-14 xs:bg-black-3 xs:border-b xs:border-black-4 xs:fixed xs:left-0 xs:right-0 xs:top-0 xs:z-20">
          <h2 className="text-fs-56 font-black font-Poppins uppercase text-white m-0 xs:text-fs-26 xs:text-left xs:leading-lh-1.2">
            my <span className="text-accent">blog</span>
          </h2>
          <span className="text-fs-110 absolute left-0 right-0 top-1/2 tracking-10 leading-lh-0.7 font-extrabold text-muted -translate-y-1/2 uppercase xs:hidden">
            posts
          </span>
        </div>
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          {/* Blog Posts Starts */}
          <div className="flex flex-wrap down-sm:flex-col">
            {/* Blog Post Starts */}
            <div className="w-1/3 down-xl:w-1/2 down-sm:w-full px-16 xs:px-0 mb-30">
              <div className="h-full bg-black-3 rounded-5">
                <div className="rounded-t-5 cursor-pointer post-thumb">
                  <a
                    href="blog-post-dark.html"
                    className="rounded-t-5 relative overflow-hidden block group outline-0 transition-all duration-300"
                  >
                    <img
                      className="rounded-t-5 transition-all duration-300 group-hover:scale-125"
                      src="assets/img/blog/blog-post-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="bg-black-3 pt-20 px-25 pb-25 rounded-b-5">
                  <a
                    href="blog-post-dark.html"
                    className="leading-lh-26 text-fs-20 font-semibold text-accent-hover transition duration-300"
                  >
                    How to Own Your Audience by Creating an Email List
                  </a>
                  <p className="mt-15 mb-5 font-Open-sans">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Post Ends */}
            {/* Blog Post Starts */}
            <div className="w-1/3 down-xl:w-1/2 down-sm:w-full px-16 xs:px-0 mb-30">
              <div className="h-full bg-black-3 rounded-5">
                <div className="rounded-t-5 cursor-pointer post-thumb">
                  <a
                    href="blog-post-dark.html"
                    className="rounded-t-5 relative overflow-hidden block group outline-0 transition-all duration-300"
                  >
                    <img
                      className="rounded-t-5 transition-all duration-300 group-hover:scale-125"
                      src="assets/img/blog/blog-post-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="bg-black-3 pt-20 px-25 pb-25 rounded-b-5">
                  <a
                    href="blog-post-dark.html"
                    className="leading-lh-26 text-fs-20 font-semibold text-accent-hover transition duration-300"
                  >
                    Top 10 Toolkits for Deep Learning in 2020
                  </a>
                  <p className="mt-15 mb-5 font-Open-sans">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Post Ends */}
            {/* Blog Post Starts */}
            <div className="w-1/3 down-xl:w-1/2 down-sm:w-full px-16 xs:px-0 mb-30">
              <div className="h-full bg-black-3 rounded-5">
                <div className="rounded-t-5 cursor-pointer post-thumb">
                  <a
                    href="blog-post-dark.html"
                    className="rounded-t-5 relative overflow-hidden block group outline-0 transition-all duration-300"
                  >
                    <img
                      className="rounded-t-5 transition-all duration-300 group-hover:scale-125"
                      src="assets/img/blog/blog-post-3.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="bg-black-3 pt-20 px-25 pb-25 rounded-b-5">
                  <a
                    href="blog-post-dark.html"
                    className="leading-lh-26 text-fs-20 font-semibold text-accent-hover transition duration-300"
                  >
                    Everything You Need to Know About Web Accessibility
                  </a>
                  <p className="mt-15 mb-5 font-Open-sans">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Post Ends */}
            {/* Blog Post Starts */}
            <div className="w-1/3 down-xl:w-1/2 down-sm:w-full px-16 xs:px-0 mb-30">
              <div className="h-full bg-black-3 rounded-5">
                <div className="rounded-t-5 cursor-pointer post-thumb">
                  <a
                    href="blog-post-dark.html"
                    className="rounded-t-5 relative overflow-hidden block group outline-0 transition-all duration-300"
                  >
                    <img
                      className="rounded-t-5 transition-all duration-300 group-hover:scale-125"
                      src="assets/img/blog/blog-post-4.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="bg-black-3 pt-20 px-25 pb-25 rounded-b-5">
                  <a
                    href="blog-post-dark.html"
                    className="leading-lh-26 text-fs-20 font-semibold text-accent-hover transition duration-300"
                  >
                    How to Inject Humor &amp; Comedy Into Your Brand
                  </a>
                  <p className="mt-15 mb-5 font-Open-sans">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Post Ends */}
            {/* Blog Post Starts */}
            <div className="w-1/3 down-xl:w-1/2 down-sm:w-full px-16 xs:px-0 mb-30">
              <div className="h-full bg-black-3 rounded-5">
                <div className="rounded-t-5 cursor-pointer post-thumb">
                  <a
                    href="blog-post-dark.html"
                    className="rounded-t-5 relative overflow-hidden block group outline-0 transition-all duration-300"
                  >
                    <img
                      className="rounded-t-5 transition-all duration-300 group-hover:scale-125"
                      src="assets/img/blog/blog-post-5.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="bg-black-3 pt-20 px-25 pb-25 rounded-b-5">
                  <a
                    href="blog-post-dark.html"
                    className="leading-lh-26 text-fs-20 font-semibold text-accent-hover transition duration-300"
                  >
                    Women in Web Design: How To Achieve Success
                  </a>
                  <p className="mt-15 mb-5 font-Open-sans">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Post Ends */}
            {/* Blog Post Starts */}
            <div className="w-1/3 down-xl:w-1/2 down-sm:w-full px-16 xs:px-0 mb-30">
              <div className="h-full bg-black-3 rounded-5">
                <div className="rounded-t-5 cursor-pointer post-thumb">
                  <a
                    href="blog-post-dark.html"
                    className="rounded-t-5 relative overflow-hidden block group outline-0 transition-all duration-300"
                  >
                    <img
                      className="rounded-t-5 transition-all duration-300 group-hover:scale-125"
                      src="assets/img/blog/blog-post-6.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="bg-black-3 pt-20 px-25 pb-25 rounded-b-5">
                  <a
                    href="blog-post-dark.html"
                    className="leading-lh-26 text-fs-20 font-semibold text-accent-hover transition duration-300"
                  >
                    Evergreen versus topical content: An overview
                  </a>
                  <p className="mt-15 mb-5 font-Open-sans">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Post Ends */}
          </div>
          {/* Blog Posts Ends */}
          {/* Blog Pagination Starts */}
          <nav className="mt-24">
            <ul className="flex justify-center from-sm:mb-100 down-sm:mb-60">
              <li>
                <a
                  className="w-43 h-43 transition-all duration-300 text-center block leading-lh-45 bg-black-3 bg-accent-hover rounded-full mx-5"
                  href="#"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  className="w-43 h-43 transition-all duration-300 text-center block leading-lh-45 bg-accent bg-accent-hover rounded-full mx-5"
                  href="#"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  className="w-43 h-43 transition-all duration-300 text-center block leading-lh-45 bg-black-3 bg-accent-hover rounded-full mx-5"
                  href="#"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="w-43 h-43 transition-all duration-300 text-center block leading-lh-45 bg-black-3 bg-accent-hover rounded-full mx-5"
                  href="#"
                >
                  4
                </a>
              </li>
            </ul>
          </nav>
          {/* Blog Pagination Ends */}
        </div>
      </div>
    </div>
    </>
  )
}
