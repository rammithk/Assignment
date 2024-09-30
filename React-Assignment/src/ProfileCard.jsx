import React from 'react'

function ProfileCard({item}) {
  return (
    <div style={{width:"20vw" ,backgroundColor:"gray" ,textAlign:"center"}}>
        <h1>{item.category}</h1>
        <img src={item.image} alt=""  style={{height:"30%",width:"30%"}}/>
        <p>{item.price}</p>
        <p>{item.description}</p>

    </div>
  )
}

export default ProfileCard
