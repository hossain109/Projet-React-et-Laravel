import React,{Fragment} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function HomeBanner() {

const navigate = useNavigate()

  return (
    <Fragment>
      <Container className='parallax' fluid>
        <Row>
            <Col lg={12} md={12} sm={12} className='text-center' style={{transform:'translate(0,100%)'}}>
                <p className='text-center text-white m-0 top-titleClass'>React JS</p>
                <p className='text-center text-white m-0 top-subtitleClass'>Learn with HOSSAIN Mohammad</p>
                <p className='text-center text-white m-0 top-subtitleClass'>Recommended for students as well as professionnel </p>
                <div className='mt-1'>
                <Button className='btn login-btn m-2' onClick={()=>navigate('/login')} >Login</Button>
                </div>
            </Col>
        </Row>
      </Container>
    </Fragment>
  )
}
