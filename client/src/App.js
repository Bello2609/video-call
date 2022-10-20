import React from 'react';
import Sidebar from "./Component/Sidebar/Sidebar";
import Chat from "./Component/Chat/Chat";
import Video from "./Component/Video/Video";
import Audio from "./Component/Audio/Audio";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import VideoProvider from './socket';




const App = ()=>{

  return (
    <>
      <div className='App'>
          <Sidebar />
              <Routes>
                <Route path="/chat/:_id" element={<Chat />} />
                <Route path='/video' element={<Video />} />
                <Route path='/audio' element={<Audio />} />
              </Routes>
           
        
      </div>
    </>
  )
}
export default App;