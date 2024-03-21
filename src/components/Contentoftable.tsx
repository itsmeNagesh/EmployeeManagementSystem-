import React, { useState,useEffect } from 'react';
import '../content.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
interface Icont{
    title:string
    content:string
    color:string
}

const Contentoftable: React.FC <Icont>= ({color, title, content }) => {
  useEffect(() => {
    AOS.init({
      duration: 1300, // Change the animation duration as needed
      once: true, // Whether animation should only happen once
    });
  }, []);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };
    return (
       <>
       <div  className="container " data-aos="flip-right">
       <div   className="row" data-aos="flip-right">
         <button style={{backgroundColor:color}} className='opt col-md-12 border-0' onClick={handleToggle}>
           <div className='opt fw-bold fs-3'>{title}</div>
          
         </button>
         <span>  {open && (
           <div className="col-md-12 card">
             <p className=' opt content fs-5 card-body' data-aos="zoom-in-down">{content}</p>
           </div>
         )}</span>
       
       </div>
     </div>
       </>
    );
};
export default Contentoftable;