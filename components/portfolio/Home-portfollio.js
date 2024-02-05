'use client'

import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Grid from './Grid'
import Details from './Details'
import Preloader from '../Preloader'


export default function HomePortfollio() {
  const [titlead, settitlead] = useState('');
  function titleControl(val){
   
    settitlead(val)
 
    }
  return (
    <>
    <Preloader/>
       <div className="page" id="portfolio">
      <div className="w-full">
        {/* Section Title Starts */}
     <SectionTitle titlead ={titlead}/>
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
         <Grid titleControl ={titleControl}/>
            {/* Portfolio Grid Ends */}
            {/* Portfolio Details Starts */}
      <Details/>
            {/* Portfolio Details Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </div>
    </>
  )
}
