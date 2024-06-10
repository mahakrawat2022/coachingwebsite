import React from 'react'
import '../App.css';

import AboutPage from './AboutPage';
import HomePageAbout from './HomePageAbout';
import HomeCourseCard from './HomeCourseCard';
import HomeBenifits from './HomeBenifits';
import CircularLinks from './CircularLinks';
import ContactUs from './ContactUs';



function HomeLayout() {
  return (
    <div>
      <div>
     <AboutPage/>
     <HomePageAbout/>
     <HomeCourseCard/>
     <HomeBenifits/>
     <CircularLinks/>
     <ContactUs/>
     <div className="full-width-div"></div>
     </div>
     
    </div>
  )
}

export default HomeLayout
