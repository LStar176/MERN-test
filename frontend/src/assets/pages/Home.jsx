import React,{useEffect, useState} from 'react'
import axios from 'axios';

//components
import RouteDetails from '../components/RouteDetails.jsx';
import RouteFormApp from '../components/RouteForm.jsx';

//Context
import { useRouteContext } from '../hook/useRouteContext.js';

const Home = () => {
  const {state,dispatch} = useRouteContext();
    useEffect( ()=>{ //Cannot apply async function right here 
        //async function - inside await axiox ....
        async function fetchData() { //Create a async function inside the useEffect
          const response =  await axios.get('http://localhost:3001/route')
          const data = response.data;
          if(data) dispatch({
            type:'GET_ROUTE',
            payload: data
          })
        }
        fetchData();
        },[])
        
  return (
    <div className='home'>
        <div className="routes">
            {state.payload && state.payload.map(route => ( 
                <RouteDetails key={route._id} route={route}/>
            ))}
        </div>
        <RouteFormApp />
    </div>
  )
}

export default Home
