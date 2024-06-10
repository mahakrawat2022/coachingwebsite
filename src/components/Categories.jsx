import React from 'react';
import Card from './Card';

function Categories() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1"> {/* Adjust the column width and offset */}
          <div className="row">
            <div className="col mb-4">
              <Card 
                heading="Data Analytics" 
                img="https://www.marketing91.com/wp-content/uploads/2020/08/Data-Analysis.jpg" 
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <Card 
                heading="Front-end development" 
                img="https://plopdo.com/wp-content/uploads/2021/07/Screenshot-1-1210x642.png?crop=1" 
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <Card 
                heading="Back-end development" 
                img="https://images.ctfassets.net/aq13lwl6616q/2w6RsKsVuc0IwHImyqx1TZ/030dff02ec89e35c72cfff4f66f0065e/Become_a_Backend_Developer.jpg" 
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <Card 
                heading="Fullstack bootcamp" 
                img="https://www.revenueriver.co/hs-fs/hubfs/fullstack.jpeg?width=1584&name=fullstack.jpeg" 
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <Card 
                heading="Programming languages" 
                img="https://intersog.co.il/handling/assets/uploads/2019/08/shutterstock_1225954372.jpg" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
