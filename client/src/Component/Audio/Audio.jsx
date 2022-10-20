import React, { useState } from "react";
import "./Audio.css";
import img from "../../../src/logo.svg";
import { BsFillTelephoneFill } from "react-icons/bs";

const Audio = ()=>{
    const [ isAnswer, setIsAnswer ] = useState("false");
    return(
        <>
            <div className="Audio">
            <img src={img} width="150px" height="150px" alt="logo" />
                <div className="Audio_profile">
                   
                    <p>Helen</p>
                    { isAnswer ? <p>0:01</p> : <p>calling...</p> }
                </div>
                    
                <button><p><BsFillTelephoneFill /></p></button>
            </div>
        </>
    )
}
export default Audio;