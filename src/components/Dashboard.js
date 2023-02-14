import React, { useState } from 'react'
import Button from '../common/Button'
import './dashboard.css'
import { cendrol,isTraffic } from './Const'

function Dashboard() {

  const [number,setnumber]=useState(cendrol)
  const [color,setColor]=useState('rgb(227, 198, 11)')

const handleChange=()=>{
setnumber(number+10)
if(isTraffic){
  setColor('red')
}else{
  setColor('rgb(52, 235, 229)')
}
}

  return (
 <>
  <div className='container'>
<div className="box">
   <div className="circle" style={{backgroundColor:color}}>
    <h1 style={{position:'relative',top:'20px'}}>{number}</h1>
    <h6 style={{textDecoration:'underline',position:'relative',bottom:'15px'}}>click to increse counter</h6>
   </div>
  </div>
    </div>
    <div className='colorButton'>
  <Button changeHandle={handleChange}  name="change my color" color={isTraffic?'red':'rgb(52, 235, 229)'}></Button>
    </div>
 </>  
  )
}

export default Dashboard
