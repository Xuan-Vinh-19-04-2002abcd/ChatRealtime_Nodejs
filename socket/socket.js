io.on("connection",(socket)=>{
    console.log(`User Connected ${socket.id}`);
    socket.on("join_room",(data)=>{
        socket.join(data);
        console.log(`User Connected ${socket.id} join Room: ${data}`)
    })
    socket.on("send_message",(data)=>{
        socket.to(data.room).emit("receive_message",data);
    })
    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id)
    })
})