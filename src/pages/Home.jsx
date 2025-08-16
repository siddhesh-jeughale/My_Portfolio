import React from 'react'
import './Home.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Header from '../Component/Header';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import myImage from '../assets/profile.jpg';



function Home() {
    return (
        <>
            <div className='home-window '>
                <div className="home-nav" style={{ height: "15%" }}>
                    <Header />
                </div>

                <div className="home-content " >
                    <Container fluid className=" d-flex align-items-center ">
                        <Row className=" align-items-center" >
                            <Col sm={12} md={6} className="text-center text-md-start p-4">
                                <motion.h1 className="display-4 fw-bold "
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}>Hi, I'm Siddhesh Jeughale</motion.h1>
                                <motion.h3
                                    className="text-white"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    Java Developer & React Developer
                                </motion.h3>
                                <p className="mt-3" style={{ fontSize: '17px' }}>
                                    Passionate about building scalable web applications and learning new tech every day. Let's build something amazing!
                                </p>
                                <Button className='cv-btn' >
                                    <a href={`${import.meta.env.BASE_URL}Resume.pdf`} className='text-white text-decoration-none'>Download CV</a>
                                </Button>
                            </Col>


                            <Col sm={12} md={6} className="text-center p-4">
                                <Image
                                    src={myImage}
                                    alt="Profile"
                                    rounded
                                    fluid
                                    className="shadow"
                                    style={{ maxWidth: '300px' }}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Home
