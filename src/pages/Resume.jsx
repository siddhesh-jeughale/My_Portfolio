import React from "react";
import "./Resume.css";
import Header from "../Component/Header";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function Resume() {
  return (
    <div className="resume-window">
      <div className="resume-nav" style={{ height: "15%" }}>
        <Header />
      </div>

      <div className="resume-content px-3 pb-4">
        <Container>
          <h1 className="my-4 fw-bold">My Resume</h1>
          <hr />

          <Row className="justify-content-center">
            <Col md={10}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                  <h3 className="fw-bold mb-3">Summary</h3>
                  <p>
                    Passionate and detail-oriented developer with strong
                    knowledge of Java, ReactJS, and modern web technologies.
                    Seeking opportunities to apply problem-solving and creative
                    thinking to real-world applications.
                  </p>

                  <h3 className="fw-bold mt-4 mb-3">Experience</h3>
                  <ul>
                    <li>
                      <strong>Java Developer Intern</strong> - XYZ Company
                      (2024)
                      <br />
                      Worked on building REST APIs with Spring Boot, improving
                      application performance by 20%.
                    </li>
                    <li>
                      <strong>Frontend Developer</strong> - Personal Projects
                      (2023-2024)
                      <br />
                      Developed multiple responsive websites using ReactJS and
                      Bootstrap.
                    </li>
                  </ul>

                  <h3 className="fw-bold mt-4 mb-3">Education</h3>
                  <ul>
                    <li>
                      <strong>Bachelor of Computer Science</strong> - Your
                      University (2020-2024)
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button
                      variant="primary"
                      size="lg"
                      href="/Siddhesh_Resume.pdf"
                      download
                    >
                      📄 Download CV
                    </Button>
                  </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Resume;
