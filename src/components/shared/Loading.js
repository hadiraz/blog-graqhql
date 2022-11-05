import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loading() {
  return (
    <div style={{width:'100%' , height:'1000px' , display:'flex' , justifyContent:'center'}}>
      <TailSpin
    width='100px'
    height='100px'
    ariaLabel='loading'
    color='gray'
    />
    </div>
    
  )
}

export default Loading