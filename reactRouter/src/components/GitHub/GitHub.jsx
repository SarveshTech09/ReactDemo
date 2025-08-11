import React, { use, useEffect } from 'react'
import { data } from 'react-router-dom';
import { useState } from 'react';

function GitHub() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/sarveshTech09')
            .then(res => res.json())    
            .then(data => {
                console.log(data),
                setData(data);
            })
        }, []);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        GitHub {data.followers}<img src={data.avatar_url} alt='Git Picture' width={300}/></div>
  )
}

export default GitHub