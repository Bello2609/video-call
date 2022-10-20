const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server = require("http").createServer(app);
const cors = require("cors");
const { Server } = require("socket.io");

const { ExpressPeerServer } = require("peer");

const peerServer = ExpressPeerServer(server, {
    debug: true
})

app.use(cors());
//routing
const userRouter = require("./routes/user");
const videoRouter = require("./routes/video");
app.use("/api/v1", userRouter);
app.use("/api/v1", videoRouter);
app.use("/peerjs", peerServer);
//models
const Caller = require("./model/caller");
const User = require("./model/user");
const caller = async()=>{
    const callerInfo = await Caller.find().exec();
    console.log(callerInfo);
    return callerInfo
}
console.log(caller);

const io = new Server(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"],
        transport: ["websocket", "polling"],
        credentials: true
    },
    allowEIO3: true
});
app.use((req, res, next)=>{
    req.io = io;
    next();
});
// req.io.on("connection", socket=>{
//     socket.emit("me");
// })

io.on("connection", socket=>{
    
    socket.emit("me", socket.id);
    socket.on("callUser", ({ userToCall, from, to})=>{
        io.to(userToCall).emit("callUser");
    });
    socket.on("answer", (data)=>{
        io.to(data).emit("callAccepted", data);
    });
});
mongoose.connect("mongodb+srv://bellohadi:bellohadi@cluster0.4hiah.mongodb.net/video_audio_call").then(res=>{
    console.log(res);
    server.listen(2200, ()=>{
        console.log("the server is running at port 2200");
    });
}).catch(err=>{
    console.log(err);
})
