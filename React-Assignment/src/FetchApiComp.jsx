import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';

function fetchApi() {
    const [Data ,setData]=useState([]);
    async function fetchData(){
        const result=await fetch('https://fakestoreapi.com/products');
        const resultData=await result.json();
        setData((Data)=>Data=resultData);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    console.log(Data);

    return (
    <div className='flex gap-4 flex-wrap'>
        {
            Data.map((item,i)=>{
                return(
                    <ProfileCard item={item}/>
                )
            })
        }
    </div>
  )
}

export default fetchApi
