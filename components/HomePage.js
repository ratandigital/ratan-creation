
'use client'
import React, { useState } from 'react'
import Switcher from './Switcher'
import Preloader from './Preloader'
import HomeContent from './HomeContent'
import Header from './Header'
import AboutContent from './AboutContent'
import HomePortfollio from './portfolio/Home-portfollio'
import Contact from './Contact'
import Blog from './Blog'
import Test from './Test'

export default function HomePage() {
  const [home, setHome] = useState(true);
  const [portfollio, setPortfollio] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [blog, setBlog] = useState(false);



  function homeClick() {
      
      setHome(true);
      setAbout(false)
      setPortfollio(false)
      setContact(false)
      setBlog(false)
 
  }
  function abouteClick() {
  
    setHome(false);
    setAbout(true)
    setPortfollio(false)
    setContact(false)
    setBlog(false)
    
}
function portfollioClick() {
  
  setHome(false);
  setAbout(false)
  setPortfollio(true)
  setContact(false)
  setBlog(false)
 
}
function contactClick() {
  
  setHome(false);
  setAbout(false)
  setPortfollio(false)
  setContact(true)
  setBlog(false)
  
}
function blogClick() {
 
  setHome(false);
  setAbout(false)
  setPortfollio(false)
  setContact(false)
  setBlog(true)
 
}

  return (
    <div className='home dark font-Poppins text-fs-16 text-white font-medium leading-lh-1.6 relative w-full h-full bg-black overflow-hidden'>
  
  {/* Live Style Switcher Starts - demo only */}
  {/* <Switcher/> */}
  {/* Live Style Switcher Ends - demo only */}
  {/* Preloader Starts */}
 
  {/* Preloader Ends */}
  {/* Header Starts */}
 <Header homeClick={homeClick} abouteClick= {abouteClick} portfollioClick = {portfollioClick} contactClick ={contactClick} blogClick= {blogClick}/>
  {/* Header Ends */}
  {/* Main Content Starts */}
  <div className="w-full h-full pages overflow-hidden">
    {/* Home Starts */}
    {/* {home ? <HomeContent/>: <AboutContent/>} */}
    { home
      ?  <HomeContent />
      : ( about
        ? <AboutContent />
        : ( portfollio
          ? <HomePortfollio />
          :( blog 
          ? <Blog />
          :<Contact/>
          )
        )
      )
    }
    {/* Home Ends */}
    {/* About Starts */}
    {/* <AboutContent/> */}
    {/* About Ends */}
    {/* Portfolio Starts */}
   {/* <HomePortfollio/> */}
    {/* Portfolio Ends */}
    {/* Contact Starts */}
  {/* <Contact/> */}
    {/* Contact Ends */}
    {/* Blog Starts */}
   {/* <Blog/> */}
    {/* Blog Ends */}
  </div>
  {/* Main Content Ends */}


    </div>
  )
}
