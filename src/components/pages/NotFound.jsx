import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function NotFound(){
    const navigate = useNavigate()
    
    useEffect(()=>{    
        setTimeout(()=>{
        navigate("/About")
    },4000)},[])
    
    return (
        <div className="main">
            <h1>Amethyst</h1>
            <img className= "not-found" src="/404.jpg" />
        </div>
    )

}