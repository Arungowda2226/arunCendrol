import React from 'react'

function Button({color='',name='name',changeHandle={}}) {
  return (
    <div>
      <button style={{backgroundColor:color,border:'none',boxShadow:' rgba(0, 0, 0, 0.16) 0px 10px 36px 0px',borderRadius:'3px'}} onClick={changeHandle}>{name}</button>
    </div>
  )
}

export default Button
