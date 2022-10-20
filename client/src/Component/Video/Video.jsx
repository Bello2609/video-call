import React, { useState } from "react";
import "./Video.css";
// import { FaVideoSlash } from "react-icons/fa";
import { FaVideo } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs";
import img from "../../../src/logo.svg";


const Video = ()=>{
    const [ isAnswer, setIsAnswer ] = useState("false");
    return(
        <>
           <div className="Video">
                <div className="Video_calling">
                    <video></video>
                </div>
                 <div className="Video_footer">
                    <button><p><BsFillTelephoneFill /></p></button>
                    <p><FaVideo /></p>
                </div>   
                
            </div>
        </>
    )
}
export default Video;