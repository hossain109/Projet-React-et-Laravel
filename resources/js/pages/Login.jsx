import React,{Fragment,useState} from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import LoginImage from '../../images/login.gif'
import axios from 'axios'
import Courseplan from './Courseplan'

export default function Login() {
  const [value,setValue]=useState({
    email:"",
    password:""
  })
  const [result,setResult]=useState(false)

const changeHandler =(e)=>{
  let fieldName = (e.target.name).trim();
  let fieldValue = (e.target.value).trim();
  setValue({...value,[fieldName]:fieldValue})
}
const {email,password}=value;

const handleSubmit = (e)=>{
  e.preventDefault();
  //console.log(value)


  let url ='/login';
  let data= value;

  if(email !="",password !=""){
  axios.post(url,data)
        .then((response)=>{
          if(response.status==200){
              if(response.data==="ok"){
              //   console.log("ok")
              //   return <Courseplan />
              // }else{
              //   return <Login />
              // }
              console.log(response.data)
              setResult(true)
              }
          }else{
            setResult(false)
          }
        })
        .catch((error)=>setResult(false))
      }else{
        console.log("no data")
      }
      //empty filed
      setValue({email:"",password:""})
}
console.log(result)
if(result==true){
  return <Courseplan />
}else{
  return (
    <Fragment>
      <Container>
        <Card style={{marginTop:50,marginBottom:50}}>
          <Card.Body>
              <Row>
                <Col md={6} xs={6}  className='mt-5'>
                  <h2 className='text-uppercase mb-3'>user login</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Control type='text'  onChange={changeHandler} value={email} name='email' id='email' className='mt-4' placeholder='Enter your name' required />
                    <Form.Control type='password' onChange={changeHandler} value={password}  name='password' id='password' className='mt-4' placeholder='Enter your password' required />
                    <Button type='submit' className='mt-4 w-100'>Login</Button>
                    <Form.Check type='checkbox' className='mt-4 des-text' label='Remember ME' />
                  </Form>
                  <p className='mt-4 ' style={{fontSize:22}}><a className='m-2 ' href="http://">Password Reset</a>||<a className='m-2' href="http://">Quick Recover</a></p>
                </Col>
                <Col md={6} xs={6}>
                  <Image src={LoginImage} className='w-100 h-75' alt="image of login" />
                </Col>
              </Row>
        </Card.Body>
        </Card>
      </Container>
    </Fragment>
  )
}
}
