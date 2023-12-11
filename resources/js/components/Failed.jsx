import React,{Fragment} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import failedImg from '../../images/failed.png'

export default function Failed() {
  return (
    <Fragment>
        <Container>
            <Row className='d-flex mt-5 mb-5  justify-content-center'>
                <Col className='text-center' lg={6} md={6} sm={12}>
                    <img className='w-25' src={failedImg} alt='Failed image' />
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}
