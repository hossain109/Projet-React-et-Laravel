import React,{Fragment} from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <Fragment>
      <Container fluid={true} className='bg-light p-5'>
        <Container>
          <Row>
              <Col lg={3} md={3} xs={6}>
                  <h3>Follow Me</h3><hr />
                  <p><a href="" target='_blank'>Facebook</a></p>
                  <p><a href="" target='_blank'>youtube</a></p>
              </Col>
              <Col lg={3} md={3} xs={6}>
                  <h3>Adresse</h3><hr />
                  <p>19 Rue pinel</p>
                  <p>93200</p>
                  <p>Saint-Denis</p>

              </Col>
              <Col lg={3} md={3} xs={6}>
                  <h3>Information</h3><hr />
                  <a href="hossainmohammad.eu">About HOSSAIN</a>
              </Col>
              <Col lg={3} md={3} xs={6}>
                  <h3>Legal</h3><hr />
                  <a href="">Refund policy</a>
                  <a href="">Terms and conditions</a>
              </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className='text-center bg-secondary text-white'>
        <p className='p-2'>All Right Reserve by HOSSAIN Mohammad @2023</p>
      </Container>
    </Fragment>
  )
}
