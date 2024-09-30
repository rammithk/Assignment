import React from 'react'

function Status({state}) {
  if({state}){
    return (
        <h1>Operation is success</h1>
    )
  }else{
    return(
        <h1>ERROR!</h1>
    )
  }
}

export default Status