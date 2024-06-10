import React from 'react';
import Slider from "react-slick";
import CourseCard from './CourseCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeCourseCard.css'; // Import the CSS file

function HomeCourseCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h4 style={{ marginBottom: "20px", marginLeft: "10px" }}>Recommended courses for you</h4>
      <Slider {...settings}>
        <div>
          <CourseCard img="https://www.goodworklabs.com/wp-content/uploads/2018/12/C-programming.png"
                      title="C programming"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  "/>
        </div>
        <div>
          <CourseCard img="https://res.cloudinary.com/teepublic/image/private/s--k1I0LeLH--/t_Preview/b_rgb:262c3a,c_lpad,f_jpg,h_630,q_90,w_1200/v1571954737/production/designs/6458087_0.jpg"
                      title="C sharp programming"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  "/>
        </div>
        <div>
          <CourseCard img="https://1.bp.blogspot.com/-uyUTk5MYmio/YGIDR6aeMyI/AAAAAAAASys/-YdNLhSygEIzfHNzNI2T1MFYnisUvie0ACLcBGAsYHQ/s2048/Introduction-to-java-programming-language.png"
                      title="Java programming"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  "/> 
        </div>
        <div>
          <CourseCard img="https://2.bp.blogspot.com/-1dddnVci_2Y/XIFtTugciwI/AAAAAAAAISQ/tyNDQUOPvyc93YwRIIeckNeZK2-1oqVMQCK4BGAYYCw/s1600/titleShadow-1024x341.png"
                      title="C++ programming"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  "/> 
        </div>
        <div>
          <CourseCard img="https://365datascience.com/resources/blog/2017-11-Programming-in-900-words-min.png"
                      title="Python programming"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  "/> 
        </div>
        <div>
          <CourseCard img="https://media.proglib.io/wp-uploads/2017/12/maxresdefault.jpg"
                      title="JavaScript programming"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  "/> 
        </div>
      </Slider>
    </div>
  );
}

// Sample Arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

export default HomeCourseCard;
