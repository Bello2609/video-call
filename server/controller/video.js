exports.makeVideoCall = (req, res, next)=>{
    req.io.on("connection", (socket) =>{
        socket.emit("me");
        socket.on("callUser", (receiverName, from, receiverId)=>{
            req.io.to(receiverId).emit("callUser");
        });
        socket.on("answerUser", (data)=>{
            req.io.to(data).emit("callAccepted");
        })
});
}