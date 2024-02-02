import { RouteContext } from "../context/RouteContext.jsx";
import { useContext } from "react";

export const useRouteContext = () =>{
    const context = useContext(RouteContext);

    if(!context) throw Error("Error Error RouteContext is not available")

    return context
}
// goi ten useRouteContext va return value cua context

