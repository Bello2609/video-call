import  React, { useState, useEffect, createContext, useRef } from "react";
import { io } from "socket.io-client";
import { Peer }  from "peerjs";
export const videoContext = createContext();
const socket = io("http://localhost:2200");


const peer = new Peer(undefined, {
    host: "/",
    port: 2200,
    path: "/peerjs"

})
const VideoProvider = ({children})=>{
    const [ me, setMe ] = useState();

    const callerRef = useRef(null);
    const callVideo = ()=>{

    }

    useEffect(()=>{
        socket.on("me", (data)=>{
            console.log(data);
            peer.on("signal", id =>{
                socket.emit("callUser",);
                console.log(id);
            });
        });
    });
    const callUser = ()=>{
       
    }
    const answerCall = ()=>{

    }
    const leaveCall = ()=>{
        
    }
    return(
        <videoContext.Provider value={"this is a game"}>
            {children}
        </videoContext.Provider>
    );
}
export default VideoProvider;

