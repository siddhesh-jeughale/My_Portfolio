import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <div className="footer w-100  text-center text-white" style={{ height:"100px", padding:"20px"}}>
       <hr className=' m-auto' style={{width:"80%"}}/>
      <Row className="text-center pt-4">
       <Col>
        <p className="text-dark " style={{letterSpacing:"1px"}}>Copyright© 2023 <span className='text-white'>Siddhesh Jeughale</span>  | All Rights Reserved</p>
       </Col>
      </Row>
      </div>
    </>
  )
}

export default Footer
