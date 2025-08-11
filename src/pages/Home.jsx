import React from 'react'
import './Home.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Header from '../Component/Header';
import { Link } from 'react-router';



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
                                    <h1 className="display-4 fw-bold ">Hi, I'm Siddhesh Jeughale</h1>
                                    <h3 className="text-white">Java Developer & React Developer</h3>
                                    <p className="mt-3" style={{fontSize:'17px'}}>
                                        Passionate about building scalable web applications and learning new tech every day. Let's build something amazing!
                                    </p>
                                    <Button>
                                        <a href={`${import.meta.env.BASE_URL}Resume.pdf`}  className='text-white'>Download CV</a>
                                    </Button>
                                </Col>


                                <Col sm={12} md={6} className="text-center p-4">
                                    <Image
                                        src="https://cdn.pixabay.com/photo/2020/08/24/21/44/man-5515150_1280.jpg"
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
