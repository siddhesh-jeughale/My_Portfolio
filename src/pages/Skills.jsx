import React from 'react'
import './Skills.css'
import Header from '../Component/Header'
import { Container,Row,Col, ProgressBar } from 'react-bootstrap'

function Skills() {
  return (
    <>
      <div className="skill-window">
        <div className="skill-nav" style={{ height: "15%" }}>
          <Header />   
          </div>
          <div className="skill-content px-3 pb-4">
            <Container>
              <h1 className='my-4 fw-bold'> My Skills</h1>
              <hr />
              <Row>
                <Col md={12} lg={6} className='mb-4'>
                  <div className='skill-bar'>
                    <span style={{fontSize:"18px", color:"white"}}>HTML</span>
                    <ProgressBar className='my-3' now={100}  />
                  </div>
                  <div className='skill-bar'>
                    <span style={{fontSize:"18px", color:"white"}}>CSS</span>
                    <ProgressBar className='my-3' now={90}  />
                  </div>
                  <div className='skill-bar'>
                    <span style={{fontSize:"18px", color:"white"}}>JavaScript</span>
                    <ProgressBar className='my-3' now={70}  />
                  </div>
                  <div className='skill-bar'>
                    <span style={{fontSize:"18px", color:"white"}}>BootStrap</span>
                    <ProgressBar className='my-3' now={100}  />
                  </div>
                </Col>
                <Col md={12} lg={6} className='mb-4'>
                <div className='skill-bar'>
                    <span style={{fontSize:"18px", color:"white"}}>ReactJs</span>
                    <ProgressBar className='my-3' now={70}  />
                  </div>
                  <div className='skill-bar'>
                    <span style={{fontSize:"18px", color:"white"}}>Java</span>
                    <ProgressBar className='my-3' now={100}  />
                  </div>
                  <div className='skill-bar'>
                    <span style={{fontSize:"18px", color:"white"}}>SpringBoot</span>
                    <ProgressBar className='my-3' now={60}  />
                  </div>
                  <div className='skill-bar'>
                    <span style={{fontSize:"18px", color:"white"}}>DSA</span>
                    <ProgressBar className='my-3' now={50}  />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
      </div>
    </>
  )
}

export default Skills
