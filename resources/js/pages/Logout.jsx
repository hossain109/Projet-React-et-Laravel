import React,{Fragment} from 'react'
import { Button } from 'react-bootstrap'

export default function Logout(props) {

    const logoutHandler = ()=>{
            console.log("logout button")
    }

  return (
    <Fragment>
      <Button className='btn' onClick={logoutHandler}>Logout</Button>
    </Fragment>
  )
}
