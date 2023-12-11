import React,{Fragment,useState,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Loading from '../components/Loading';
import Failed from '../components/Failed';
import axios from 'axios';
import ReactPlayer from 'react-player'

export default function Courseplan() {
//   const [listData,setListData] = useState([]);
//   const [loading,setLoading] = useState(true);
//   const [failed,setFailed] = useState(false);



//   useEffect(()=>{
//     let url = '/getCoursePlan';
//     axios.get(url)
//           .then((response)=>{
//            // console.log(response.data);
//             if(response.status==200){
//               setListData(response.data)
//               setLoading(false)
            
//             }else{
//               setLoading(false)
//               setFailed(true)
//             }
//           })
//           .catch((error)=>{
//               //console.log(error)
//               setFailed(true)
//           })
//   },[]);
// //data refining
// let myData = listData[0];

// //conditional rendering
// if(loading==true){
//   return <Loading />
// }else if(failed==true){
//   return <Failed />
// }else{

  return (
    <Fragment>
      <Container>
        <Row className='mt-5 mb-5'>
            <Col lg={6} md={6} xs={12} className=' des-text'>
              <h2>What You Going To Learn</h2>
              <p>About 76% web application runs on PHP.Laravel is the most powerful and popular framework of PHP. This series start from laravel basic and ends with laravel live project.The overall skills gained from this project based courses will prepare you for any type of project development.</p>
              <ul>
                <li>We should learn React and Laravel</li>
                <li>Laravel latest vesion 9 & 10 </li>
                <li>Should learn React HOOK</li>
                <li>First we learn the basic of React and laravel</li>
                <li>Then we go deeper cover A-Z of React & Laravel</li>
                <li>Then we perform full web application project</li>
              </ul>
            </Col>

            <Col lg={6} md={6} xs={12} >
            <ReactPlayer url='https://www.youtube.com/watch?v=X3hAIOPOXoU&ab_channel=RabbilHasan' />
            </Col>
        </Row>
      </Container>
    </Fragment>
  )
  //}
}
