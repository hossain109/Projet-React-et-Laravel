import React,{useEffect,useState} from 'react'
import { Card,Container,Image, Row,Col } from 'react-bootstrap'
import axios from 'axios'
import Loading from './Loading';
import Failed from './Failed';
//import path from '../../../storage/app/public'



export default function FindMore() {

    const [datas,setDatas]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError] = useState(false);

    let url = '/getMore';
    useEffect(()=>{
        axios.get(url)
            .then((response)=>{
                if(response.status ===200){
                   // console.log(response.data)
                    setDatas(response.data);
                    setLoading(false)
                }else{
                    setLoading(false)
                    setError(true)
                }
               
            })
            .catch((error)=>{
                //console.log(error)
                setError(true)
            })
    },[]);

    if(loading == true){
       return <Loading />
    }else if(error==true){
        return <Failed />
    }else{

        const eachCard =  datas.map((item)=>{
            const {id,img,title,des,url}=item;
            console.log(img)
            return (   
                <Col key={id} md={3} >
                    <Card className='text-center' style={{width: '300px !important',display:'inline-flex',margin:5}}>
                        <Card.Body>
                            <a href="www.hossainmohammad.eu" target='_blank'><Image src={img} alt='image' height={90} /></a>
                            <h5>{title}</h5>        
                        </Card.Body>

                    </Card>
                </Col>
            )
        })
        

        return (
            <Container className='mt-5 mb-5'>
                <h5 className='text-center'>Find more</h5>
                <p className='text-center'>Get Other Tutorial Series By Hasan</p>
               <Row>
               {eachCard}
               </Row>
                
            </Container>
        )
    }

}
