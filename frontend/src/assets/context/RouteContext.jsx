import {createContext, useReducer} from 'react';

//Create Context
export const RouteContext = createContext();

export const RouteReducerFnc = (prevState, action) =>{
    switch(action.type){
        case "GET_ROUTE":
            return {
                payload: action.payload, /* add all the payload in this field */
            }
        case "CREATE_ROUTE":
            return {
                payload: [action.payload, ...prevState.payload]
            }
        case "DELETE_ROUTE":
        return {
            payload: prevState.payload.filter(item => item._id !== action.payload._id)
        }
        default:
            return prevState
    }
}
//Provide Context with dynamic state value (useReducer / useState)
export const RouteContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(RouteReducerFnc, {
        payload: null
    })

    return (
        <RouteContext.Provider value={{state, dispatch}}>
            {children}
        </RouteContext.Provider>
    )
}
