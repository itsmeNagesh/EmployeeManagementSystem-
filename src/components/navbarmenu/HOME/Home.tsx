import React, { useState,useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import './home.css'; // Import your CSS file for custom styles
import Contentoftable from '../../Contentoftable';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Item {
  src: string;
  altText: string;
  key: number;
}

const items: Item[] = [
  {
    src: './images/01.mp4',
    altText: 'Video 1',
    key: 1,
  },
  {
    src: './images/02.mp4',
    altText: 'Video 2',
    key: 2,
  },
  {
    src: './images/03.mp4',
    altText: 'Video 3',
    key: 3,
  },
];

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Change the animation duration as needed
 // Whether animation should only happen once
    });
  }, []);
  
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    AOS.refresh();
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    AOS.refresh();
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
        AOS.refresh();
  };

  const slides = items.map((item) => (
    <CarouselItem
      className='itemD'
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.key}
    >
      <video autoPlay muted loop className="tt coro video-fluid">
        <source src={item.src} type="video/mp4" />
      </video>
    </CarouselItem>
  ));

  return (
    <>
      <div className="carousel-container">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          ride="carousel"
          interval={false}
          keyboard={false}
          pause={false}
          mouseEnter={() => false}
          mouseLeave={() => false}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
        
        </Carousel>
      </div>
      <h1 style={{ marginTop: "3%" }} className='text-bold'   data-aos="fade-up" >About All Operations</h1>
      < div style={{ marginTop: "3%" }} className="operation d-block justify-content-sapace-between m-3 p-3">
        <Contentoftable color={"green"} title={"Add new Employee"} content={"The Create operation involves adding new data records to a system. This could include creating new entities, such as adding a new employee to a database, inserting a new entry into a log, or generating a new document."} />
  <div style={{marginTop:"3%",marginBottom:"3%"}}>    <Contentoftable color={"yellow"} title={"Update"} content={" The Update operation involves modifying existing data records within a system. This could involve changing the values of specific fields, updating records based on user input, or applying changes to documents or files. Examples include editing user information, updating product details, or revising a document."} /></div>  
    <Contentoftable  color={"red"} title={"Delete"} content={"The Delete operation involves removing data records from a system. This operation permanently removes the selected data from the system, and it should be used with caution as it can result in data loss. Examples include deleting user accounts, removing files from storage, or eliminating outdated records."} />
      
        <h4  data-aos="flip-right" className='text-center,  mt-5'>CRUD operations are fundamental to the management and manipulation of data in software applications.</h4>
      </div>
    </>
  );
};

export default Home;
