import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Component/Header'
import './Contact.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [show , setShow] = React.useState(false);
    const [sendername, setSenderName] = React.useState('');

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);  
    }

    const sendMessage = (data) => {
        if (data) {
            console.log(data);
            handleShow();
            setSenderName(data.name);
            // Here you can handle the form submission, e.g., send data to an API or email service
        }
          
    }
    return (
        <>
            <div className="contact-window">
                <div className="contact-nav" style={{ height: "15%" }}>
                    <Header />
                </div>
                <div className="contact-content px-3 pb-4">
                    <Container>
                        <h1 className='my-4 fw-bold'>Contact Me</h1>
                        <hr />
                        <Row>
                            <Col sm={12} md={6} lg={6} className='mb-2'>
                                <p style={{ fontSize: '17px' }}>Feel free to reach out to me for any inquiries, collaborations, or just to say hello! You can contact me via email or connect with me on LinkedIn.</p>
                                <ul className='contact-list list-unstyled'>
                                    <li className='my-4 '>
                                        <i className="fa-solid fa-envelope me-2"></i>
                                        <span className='fw-bold '>Email :</span>
                                        <Link to="mailto:example@gmail.com" className='text-decoration-none text-white'> example@gmail.com</Link>
                                    </li>
                                    <li className='my-4'>
                                        <i className="fa-solid fa-phone me-2"></i>
                                        <span className='fw-bold text-whit'>Phone :</span> 
                                        <Link to="" className='text-decoration-none text-white'> +91-9876543210</Link>
                                    </li>
                                    <li className='my-4'>
                                        <i className="fa-brands fa-linkedin me-2"></i>
                                        <span className='fw-bold '>LinkedIn :</span>
                                        <Link to="https://www.linkedin.com/in/example" className='text-decoration-none text-white'> linkedin.com/in/example</Link>
                                    </li>
                                    <li className='my-4'>
                                        <i className="fa-brands fa-github me-2"></i>
                                        <span className='fw-bold '>GitHub :</span>
                                        <Link to="github.com/example" className='text-decoration-none text-white'> github.com/example</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm={12} md={6} lg={6} className='mb-2'>
                                <Form onSubmit={handleSubmit(sendMessage)} className=' form p-3 shadow rounded text-center'>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            id="floatingInputCustom"
                                            type="text"
                                            placeholder="Your Name"
                                            {
                                                ...register('name', {
                                                    required: 'name is required',})
                                            }
                                        />
                                        <label htmlFor="floatingInputCustom">Your Name</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            id="floatingInputCustom"
                                            type="email"
                                            placeholder="Your Email"
                                            {
                                                ...register('email', {
                                                    required: 'Email is required',})
                                            }
                                        />
                                        <label htmlFor="floatingInputCustom">Your Email</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            id="floatingSubjectCustom"
                                            type='text'
                                            placeholder="Your Subject"
                                            {
                                                ...register('subject', {
                                                    required: 'subject is required',})
                                            }
                                        />
                                        <label htmlFor="floatingSubjectCustom">Your Subject</label>
                                    </Form.Floating>

                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            id="floatingTextareaCustom"
                                            as="textarea"
                                            placeholder="Your Message"
                                            style={{ height: '100px' }}
                                            {
                                                ...register('Textarea', {
                                                    required: 'Message is required',})
                                            }
                                        />
                                        <label htmlFor="floatingTextareaCustom">Your Message</label>
                                    </Form.Floating>
                                     <Button variant="light" type="submit" className='my-4'>Send Message</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Succesful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you! {sendername} for connecting to me</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Contact
