import React, { useState } from 'react'
import axios from 'axios';
//Context
import { useRouteContext } from '../hook/useRouteContext.js';
import {formatDistanceToNow, format} from 'date-fns'

const RouteDetails = ({route}) => {
  const {state,dispatch} = useRouteContext();
  const handleDelete = async()=>{
    const response  = await axios(`https://duyngotest.onrender.com/route/`+ route._id,{
      method: 'DELETE'
    })
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
    if(response.status >= 200 && response.status < 300) {
      dispatch({
        type: 'DELETE_ROUTE',
        payload: response.data
      })
    }
    }
  
  return (
    <div className='route-details'>
        <strong><h4>{route.title}</h4></strong>
        <p>{route.content}</p>
        <p>{format(new Date(route.createAt))}</p>
        <span onClick={handleDelete}>X</span>
    </div>
  )
}

export default RouteDetails