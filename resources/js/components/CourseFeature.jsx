import React,{Fragment,useEffect,useState} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Loading from './Loading';
import Failed from './Failed';

export default function CourseFeature(){

    const [listData,setListData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [failed,setFailed] = useState(false);


    let url = '/getCourseFeature';
    useEffect(()=>{
      axios.post(url)
            .then((response)=>{
              //console.log(response.data);
              if(response.status==200){
                setListData(response.data)
                setLoading(false)
                //console.log(listData);
              }else{
                setLoading(false)
                setFailed(true)
              }
            })
            .catch((error)=>{
                //console.log(error)
                setFailed(true)
            })
    },[]);

    if(loading==true){
        return <Loading />
    }
    else if(failed==true){
        return <Failed />
    }else{
        //recover array list
        const myList = listData;
        const myView = myList.map((list,index)=>{
            return(
            <Col lg={3} md={3} sm={12} key={index}>
                <Card className='text-center p-4 cardFeature'>
                    <div className='text-center'>
                    <img src={list.img} className='item-logo text-centerkn'  alt='image' />
                    </div>
                    <Card.Body>
                        <Card.Title className='title-text mt-2'>{list.title}</Card.Title>
                            <Card.Text className='des-text'>{list.des}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            )
        })

        return (
            <Fragment>
            <Container style={{marginTop:100,marginBottom:100}}>
                <Row>
                    {myView}
                </Row>
            </Container>
        </Fragment>
        );
    }
}

