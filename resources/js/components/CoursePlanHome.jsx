import React,{Fragment,useEffect,useState} from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import VideoLogo from '../../images/play.svg';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import Failed from './Failed';
import Loading from './Loading';

export default function CoursePlanHome() {
//retrive data from data base
const [planData,setPlanData]=useState([]);
const [loading, setLoading] = useState(true);
const [faild,setFailed] = useState(false);
useEffect(()=>{
    let url ='/getCoursePlan';
    axios.get(url)
        .then((response)=>{
            //console.log(response.data)
            if(response.status==200){
            setPlanData({planData:response.data})
            setLoading({loading:false})
        }else{
            setFailed({faild:true})
        }
        })
        .catch((error)=>{
            //console.log(error)
            setFailed({failed:true})
        })
},[])
//display data
let data = planData.planData;
//console.log(data)
//condition rendering
if(loading ==true){
    return <Loading />
}else if(faild==true){
    return <Failed />
}else{
  return (
    <Fragment>
      <Container className='bg-light pb-5 pt-5' fluid={true}>
            <Row style={{marginTop:50,marginBottom:50}}>
                <Col lg={8} md={8} xs={12} className='mx-auto text-center'>
                <Nav.Link href='/courseplan'><img src={VideoLogo} height={90} width={90} alt='video logo' /></Nav.Link>
                    <h5 className='mt-3 title-text'>{data[0].title}</h5>
                    <p className='mt-3 des-text'>{data[0].short_des}</p>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}
}
