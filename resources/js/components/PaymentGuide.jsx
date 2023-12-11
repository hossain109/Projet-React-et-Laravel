import React, {Fragment,useState,useEffect} from 'react'
import { Col, Container, Row,Card, CardBody } from 'react-bootstrap';
import PaymentLogo from '../../images/BKASH-LOGO.png';
import axios from 'axios';
import parse from 'html-react-parser';
import ImageCap from '../../images/classroom.png'


export default function PaymentGuide() {
//retrive data from data base
const [plandata,setPlandata]=useState([]);
const [loading, setLoading] = useState(true);
const [faild,setFailed] = useState(false);
useEffect(()=>{
    let url ='/getPaymentGuide';
    axios.get(url)
        .then((response)=>{
            //console.log(response.data)
            if(response.status==200){
                setPlandata(response.data);
               // console.log(plandata)
                setLoading(false);
        }else{
            setFailed(true)
        }
        })
        .catch((error)=>{
            //console.log(error)
            setFailed({failed:true})
        })
        //console.log(plandata)
},[]);

  return (
    <Fragment>
      <Container className='bg-white mt-5 mb-5'>
        <Row>
            <Col lg={6} md={6} xs={12}>
                <img src={PaymentLogo} height={60} width={160} alt="logo payment" />
                {plandata.map((item)=>{
                  const  {id,title,des}=item
                    return <article key={id} className='text-justify mt-5 des-text'>
                       {parse(des)} 
                    </article>
                })}
                <Row>
                    <Col md={4} xs={12} className='p-2'>
                    
                        <Card lg={4} md={4} xs={12}>
                            <Card.Body className='text-center'>Total class: 320</Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12} className='p-2'>
                    
                        <Card lg={4} md={4} xs={12}>
                            <Card.Body className='text-center'>Total Students:500</Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12} className='p-2'>
                                            
                        <Card lg={4} md={4} xs={12}>
                            <Card.Body className='text-center'>Total Price:120 €</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col lg={6} md={6} xs={12}>
                <Card>
                    <img src={ImageCap} height={300} alt="image cap" />
                    <Card.Body className='text-center'>
                        <a href="http://" className=' mt-2 btn btn-outline'>Registration now</a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </Fragment>
  )
}
