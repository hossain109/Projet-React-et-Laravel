import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import VideoLogo from '../../images/play.svg';
import Loading from './Loading';
import { Card,  Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';

export default function Caurosel() {
const [datas,setDatas]=useState([])
const [loading,setLoading]=useState(true)
const [error,setError]=useState(false)

useEffect(()=>{
  let url = '/getCaurosel';
  axios.get(url)
      .then((response)=>{
        if(response.status==200){
          setDatas(response.data)
          setLoading(false)
          setError(false)
        }else{
          setLoading(false)
          setError(true)
        }
      })
      .catch((errro)=>{
        setError(true)
      })

},[]);

if(loading==true){
  <Loading />
}else if(error==true){
  <Loading />
}else{

const result = 
  datas.map((item)=>{
    const {id,img,title,des,url}=item;
    return(
      <div key={id} className=' text-white'>
      <Card className='owlCard' >
        <div style={{background:'#141345',padding:10,color:"white"}}>
              <h2 className='bolder'>{id}</h2>
              <h5 style={{fontWeight:700}}>{title}</h5>
            <p>{des}</p>
        </div>
        <Card.Body>
          <div style={{marginTop:20,marginBottom:20}}>
          <a href={url}><img src={VideoLogo} height={50} width={50} alt='video logo' /></a>
          </div>
        </Card.Body>
      </Card>
      </div>
    )
  })
    return (
      <Container className='bg-white'  style={{minHeight:350,marginTop:100,marginBottom:100}}>
      <OwlCarousel className='owl-theme' loop margin={20} nav>
        
        {result}
        
      </OwlCarousel>
      </Container>
      );
}
}