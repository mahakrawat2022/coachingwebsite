import React from 'react';
import Benifits from './Benifits';

function HomeBenifits() {
  return (
    <div className="my-5">
      <Benifits img="https://innovationatwork.ieee.org/wp-content/uploads/2019/11/bigstock-Mentoring-Motivational-Words-281482384_1024X684.png" title="Best Mentors" style={{ marginBottom: "20px" ,marginTop:"50px"}} />
      <Benifits img="http://www.golegal.co.za/wp-content/uploads/2013/11/SKILL-DEVELOPMENT.jpg"
                 title="Skill Development" />
    </div>
  );
}

export default HomeBenifits;
