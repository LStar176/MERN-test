import React, { useState } from 'react'
import axios from 'axios'

//Context
import { useRouteContext } from '../hook/useRouteContext.js';

const RouteFormApp = () => {
  const {state,dispatch} = useRouteContext()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (event) => { /* we gonna touch API so async is needed here */
        event.preventDefault() 
        const route = {title, content}
        
         await axios.post("http://localhost:3001/route/",route)
        .then(response=>{
          console.log(response.data)
            setError(null)
            setTitle('')
            setContent('')
            setEmptyFields([])
            dispatch({
              type: 'CREATE_ROUTE',
              payload: response.data
            })
        }).catch(error =>{
            // console.log(error.response.data.emptyField)
            setError(error.message)
            setEmptyFields(error.response.data.emptyField)
           
        })

    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Route</h3>

        <label>The title:</label>
        <input 
        type='text' 
        name='title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
        />

        <label>The content:</label>
        <input
        type='text' 
        name='title'
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className={emptyFields.includes('content') ? 'error' : ''}
        />

        <button type='submit'>Submit</button>
        {
          error && <div className='error'>ERROR: {error}</div> /* {error} must be a string not an object error */
        }
    </form>
  )
}

export  default RouteFormApp