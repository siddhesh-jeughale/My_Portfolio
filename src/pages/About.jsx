import React from 'react'
import Header from '../Component/Header'
import './About.css'
import { Container, Row,Col,Image } from 'react-bootstrap'
import myImage from '../assets/profile.jpg'


function About() {
  return (
    <>
      <div className='about-window'>
        <div className="about-nav" style={{ height: "15%" }}>
          <Header />   
          </div>
          <div className="about-content px-3 pb-4">
            <Container>
              <h1 className='my-3 fw-bold '>About Me</h1>
              {/* <hr /> */}
            <Row>
              <Col sm={12} md={12} lg={12}>
              <p style={{fontSize:'17px'}}>I'm a dedicated software developer with a Master’s degree in Computer Science and a strong passion for innovative web and software solutions. With expertise in Java, SpringBoot, and ReactJs, I bring both frontend and backend development skills to my projects. Currently based in Nashik, I am available for freelance work and open to collaborating on exciting projects.</p>
              </Col>
            </Row>
            <hr className='mt-2' />
              <Row>
                <Col sm={12} md={4} lg={4} className='
                pb-3'>
                <Image
                                        src={myImage}
                                        alt="Profile"
                                        rounded
                                        fluid
                                        className="shadow about-image"
                                        style={{ maxHeight: '500px' }}
                                      
                                    />
                </Col>
                <Col sm={12} md={8} lg={8}>
                <h3 className='my-3 text-white'>Web Developer & Java Developer</h3>
                <div className="about-summery">
                  <Row>
                    <Col sm={12} md={6} lg={6}>
                      <ul className='about-list list-unstyled'>
                        <li className='my-4'>
                          <i className="fa-solid fa-chevron-right me-2"></i> 
                          <span className='fw-bold text-white'>Birthday :</span> 14 May 2001  
                        </li>
                        <li className='my-4'>
                          <i className="fa-solid fa-chevron-right me-2"></i>
                          <span className='fw-bold text-white'>Website :</span> www.example.com
                        </li>
                        <li className='my-4'>
                          <i className="fa-solid fa-chevron-right me-2"></i>
                          <span className='fw-bold text-white'>Phone :</span>   +91-9370005312
                        </li>
                        <li className='my-4'>
                          <i className="fa-solid fa-chevron-right me-2">
                          </i><span className='fw-bold text-white'>City :</span> Nashik
                        </li>
                      </ul>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <ul className='about-list list-unstyled'>
                        <li className='my-4'>
                          <i className="fa-solid fa-chevron-right me-2"></i>
                          <span className='fw-bold text-white'>Age :</span> 24
                        </li>
                        <li className='my-4'>
                          <i className="fa-solid fa-chevron-right me-2"></i>
                          <span className='fw-bold text-white'>Degree :</span> Master's in Computer Application
                        </li>
                        <li className='my-4'>
                          <i className="fa-solid fa-chevron-right me-2"></i>
                          <span className='fw-bold text-white'>Email :</span> imsiddhesh0117@gmail.com
                        </li>
                        <li className='my-4'>
                          <i className="fa-solid fa-chevron-right me-2"></i>
                          <span className='fw-bold text-white'>Frelance :</span> Available
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col sm={12} md={12} lg={12}>
                    <p className='mt-3' style={{fontSize:'17px'}}>I'm a dedicated software developer with a Master’s degree in Computer Science and a strong passion for innovative web and software solutions. With expertise in Java, SpringBoot, and ReactJs, I bring both frontend and backend development skills to my projects. Currently based in Nashik, I am available for freelance work and open to collaborating on exciting projects.</p>
                  </Col>
                </Row>
                </Col>
              </Row>
            </Container>
          </div>
          </div>
    </>
  )
}

export default About
