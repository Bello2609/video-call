import React from "react";
import classes from "./Chat.module.css";
import { AiFillAudio } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Chat = ()=>{
    const navigate = useNavigate();
    return (
        <>

            <div className={classes.Chat}>
                <p onClick={()=>{
                    navigate("/audio");
                }}><AiFillAudio /></p>
                <p onClick={()=>{
                    navigate("/video");
                }}><BsCameraVideoFill /></p>

            </div>
            
        </>
    );
}
export default Chat;