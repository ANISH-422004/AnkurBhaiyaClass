const app = require("./src/app")
const http = require("http")

const server = http.createServer(app)
const io = require("socket.io")(server)


//socket --> single User
//io --> whole User 
io.on("connection", (socket) => {
    console.log(`connected ID : ${socket.id}`);
    socket.emit('connected to server event', (data) => {
        console.log(`You with ID:${socket.id} connected to server`);
    });

    // Example of sending a message to Postman
    socket.on('send message', (message) => {
        console.log(`Message from ${socket.id}: ${message}`);
        // Here you can add code to send the message to Postman or any other service
    });
});







server.listen(3000, () => {
    console.log("server running on port 3000")
})


