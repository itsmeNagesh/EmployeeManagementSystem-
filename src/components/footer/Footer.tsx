import React,{useEffect} from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer: React.FC = () => {
    useEffect(() => {
        AOS.init({
          duration: 1300, // Change the animation duration as needed
        // Whether animation should only happen once
        });
      }, []);
    return (
        <>
            <MDBFooter className='foo text-center text-lg-start text-light position-relative bottom-0 w-100' >
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' data-aos="flip-right">
                    <div className='me-5 d-none d-lg-block'>
                        <span data-aos="flip-right">Get connected with us on social networks:</span>
                    </div>

                    <div data-aos="flip-right">
                        <Link to='https://www.facebook.com/profile.php?id=100035524686551&mibextid=ZbWKwL' className='me-4 text-reset'>
                            <FaFacebook className='fs-2 text-light' />
                        </Link>
                        <Link to='https://www.instagram.com/nageshmaurya43/?next=%2F' className='me-4 text-reset'>
                            <FaInstagram className='fs-2 text-light' />

                        </Link>
                        <Link to='https://twitter.com/i/flow/login?redirect_after_login=%2FNageshMoury' className='me-4 text-reset'>
                            <FaTwitter className='fs-2 text-light' />

                        </Link>
                        <Link to='https://github.com/itsmeNagesh' className='me-4 text-reset'>
                            <FaGithub className='fs-2 text-light' />
                        </Link>
                        <Link to='https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit' className='me-4 text-reset'>
                            <FaLinkedin className='fs-2 text-light' />
                        </Link>
                        <Link to='' className='me-4 text-reset'>
                        </Link>
                    </div>
                </section>

                <section className='' data-aos="flip-right">
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    Project Descriptuon
                                </h6>
                                <p>
                                    An Employee Management System (EMS) is a comprehensive software solution designed to streamline and automate various aspects of managing an organization's workforce. It serves as a centralized platform for HR (Human Resources) professionals, managers, and employees to efficiently handle employee-related processes and tasks.
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Technologies</h6>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        React
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Bootstrap
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Springboot(Java)
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Mysql
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Operations</h6>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Insertion
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Updation
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Delete/By/Id
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Updation/By/Id
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    Noida, 2024, India
                                </p>
                                <p>
                                    nagesh91555@gmail.com
                                </p>
                                <p>
                                    +91 9155548512
                                </p>
                                <p></p>
                                <Link className='text-reset fw-bold' to='https://nageshmourya.netlify.app/'>About Me</Link>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        NageshMourya
                    </a>
                </div>
            </MDBFooter>
        </>
    )
}

export default Footer;