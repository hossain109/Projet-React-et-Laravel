import React,{Fragment} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import loadingImg from '../../images/loading.svg'

export default function Loading() {
  return (
    <Fragment>
        <Container>
            <Row className='d-flex mt-5 mb-5  justify-content-center'>
                <Col className='text-center' lg={6} md={6} sm={12}>
                    <img className='loading-logo' src={loadingImg} alt='loading image' />
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}
