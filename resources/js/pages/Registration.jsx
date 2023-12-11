import React,{Fragment,useState,useEffect} from 'react'
import { Card, Container, Row , Col, Form, Button} from 'react-bootstrap'
import PaymentLogo from '../../images/BKASH-LOGO.png';
import axios from 'axios';
import DisplayMessage from '../components/DisplayMessage';


export default function Registration() {
  const [result,setResult]=useState(null);
  const [values,setValues] = useState({
    name:"",
    email:"",
    password:"",
    sendingMobile:"",
    confirmaionNumber:""
  })
  const {name,email,password,sendingMobile,confirmaionNumber}=values;

  const changeHandler = (e)=>{
    let fieldName = e.target.name
    let fieldValue = e.target.value
  setValues({...values,[fieldName]:fieldValue})

  }


  const submitHandler =(e)=>{
    e.preventDefault()

      let url = '/sendData';
      let datas = values;
      axios.post(url,datas)
            .then((response)=>{
              if(response.status==200){
                setResult(true);
              }else{
                setResult(false)
              }
            })
            .catch((error)=>setResult(false))

  setValues({name:"",email:"",password:"",sendingMobile:"",confirmaionNumber:""})

  }

useEffect(()=>{
  setTimeout(() => {
    setResult(false);
  }, 3000);
})



  return (
    <Fragment>
    <Container>
      <Card className='mt-5 mb-5'>
        <Card.Body>
          <Row>
            <Col xs={6}>
              <h3 className='text-uppercase'>course registraion</h3>
              <Form onSubmit={submitHandler}>
                <Form.Control type='text' onChange={changeHandler} value={name} className='mt-3 form-control' name='name' id='name' placeholder='Your Name' required />
                <Form.Control type='email' onChange={changeHandler} value={email} className='mt-3' name='email' id='eamil' placeholder='Enter email' required />
                <Form.Control type='password' onChange={changeHandler} value={password} className='mt-3' name='password' id='password' placeholder='Password' required />
                <Form.Control type='number' onChange={changeHandler} value={sendingMobile} className='mt-3' name='sendingMobile' id='sendingMobile' placeholder='Sending Number' required />
                <Form.Control type='text' onChange={changeHandler} value={confirmaionNumber} className='mt-3' name='confirmaionNumber' id='confirmaionNumber' placeholder='Sending Code' required />
                  <Button className='mt-3 w-100' type='submit'>Submit</Button>
                  {result?<DisplayMessage />:""}
                  
              </Form>
            </Col>
            <Col xs={6}>
            <img src={PaymentLogo} height={60} width={160} alt="logo payment" />
            <article className='mt-5'>
            <p className='des-text'>Send your course fee via bank transfer or paypal and contact with this number 0751292264 . 
              After sending fee use sender mobile number for registration.</p>

              <p className='des-text'>This is not buy and try product, after account activation course fee is not refundable.</p>

              <p className='des-text'>For further help contact with course manager Taspia SULTANA , helpline mobile number 01774688159.</p>
            </article>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    </Fragment>
  )
}
