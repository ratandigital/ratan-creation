import React from 'react'
import Preloader from './Preloader'

export default function Contact() {
  return (
    <>
    <Preloader/>
        <div className="page" id="contact">
      <div className="w-full">
        {/* Section Title Starts */}
        <div className="mx-auto w-full relative py-80 text-center xs:px-25 xs:pt-16 xs:pb-14 xs:bg-black-3 xs:border-b xs:border-black-4 xs:fixed xs:left-0 xs:right-0 xs:top-0 xs:z-20">
          <h2 className="text-fs-56 font-black font-Poppins uppercase text-white m-0 xs:text-fs-26 xs:text-left xs:leading-lh-1.2">
            get in <span className="text-accent">touch</span>
          </h2>
          <span className="text-fs-110 absolute left-0 right-0 top-1/2 tracking-10 leading-lh-0.7 font-extrabold text-muted -translate-y-1/2 uppercase xs:hidden">
            contact
          </span>
        </div>
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex down-lg:flex-col">
            {/* Contact Details Starts */}
            <div className="w-1/3 down-lg:w-full px-16 xs:px-0">
              <h3 className="text-fs-26 xs:text-fs-21 mb-16 font-semibold uppercase">
                don't be shy !
              </h3>
              <p className="mb-16 font-Open-sans text-fs-15 xs:text-fs-14">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div className="relative font-Open-sans font-semibold pl-50 pt-5 leading-lh-21 text-fs-15 xs:text-fs-14 mb-16">
                <i className="fa fa-envelope-open absolute left-0 top-10 text-fs-33 text-accent" />
                <span className="block opacity-80 uppercase font-normal">
                  mail me
                </span>
                steve@mail.com
              </div>
              <div className="relative font-Open-sans font-semibold pl-50 pt-5 leading-lh-21 text-fs-15 xs:text-fs-14 mb-16">
                <i className="fa fa-phone-square absolute left-0 top-10 text-fs-39 text-accent" />
                <span className="block opacity-80 uppercase font-normal">
                  call me
                </span>
                +216 21 184 010
              </div>
              <ul className="-ml-5 pt-4 mb-48">
                <li className="inline-block">
                  <a
                    href="#"
                    className="social-item inline-block h-40 w-40 leading-lh-42 text-center text-white transition duration-300 text-fs-17 mx-6 bg-black-2 rounded-full"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="social-item inline-block h-40 w-40 leading-lh-42 text-center text-white transition duration-300 text-fs-17 mx-6 bg-black-2 rounded-full"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="social-item inline-block h-40 w-40 leading-lh-42 text-center text-white transition duration-300 text-fs-17 mx-6 bg-black-2 rounded-full"
                  >
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="social-item inline-block h-40 w-40 leading-lh-42 text-center text-white transition duration-300 text-fs-17 mx-6 bg-black-2 rounded-full"
                  >
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Details Ends */}
            {/* Contact Form Starts */}
            <div className="w-2/3 down-lg:w-full px-16 down-lg:px-0">
              <form
                id="contactform"
                className="contactform"
                method="post"
                action="https://slimhamdi.net/tunis-tailwind/demos/assets/php/process-form.php"
              >
                <div className="flex flex-wrap font-normal">
                  <div className="from-sm:w-1/3 down-sm:w-full px-16 xs:px-0">
                    <input
                      autoComplete="off"
                      className="w-full bg-black-3 text-fs-15 text-white border border-solid border-black py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form"
                      type="text"
                      name="name"
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div className="from-sm:w-1/3 down-sm:w-full px-16 xs:px-0">
                    <input
                      autoComplete="off"
                      className="w-full bg-black-3 text-fs-15 text-white border border-solid border-black py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form"
                      type="email"
                      name="email"
                      placeholder="YOUR EMAIL"
                    />
                  </div>
                  <div className="from-sm:w-1/3 down-sm:w-full px-16 xs:px-0">
                    <input
                      autoComplete="off"
                      className="w-full bg-black-3 text-fs-15 text-white border border-solid border-black py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form"
                      type="text"
                      name="subject"
                      placeholder="YOUR SUBJECT"
                    />
                  </div>
                  <div className="w-full px-16 xs:px-0">
                    <textarea
                      className="bg-black-3 w-full text-white border border-solid border-black h-160 py-12 px-26 overflow-hidden rounded-30 outline-0 transition duration-300 field-form placeholder:text-placeholder"
                      placeholder="YOUR MESSAGE"
                      defaultValue={""}
                    />
                  </div>
                  <div className="w-full px-16 xs:px-0 mt-30">
                    <button
                      type="submit"
                      className="button overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                    >
                      <span className="relative z-20 text-white">
                        send message
                      </span>
                      <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-send bg-accent" />
                    </button>
                  </div>
                  <div className="w-full px-16 xs:px-0">
                    <span
                      id="message"
                      className="output_message h-0 text-center leading-lh-46 rounded-30 text-white block [&.success]:h-46 [&.success]:bg-success [&.error]:h-46 [&.error]:bg-error mt-30 mb-60"
                    />
                  </div>
                </div>
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
