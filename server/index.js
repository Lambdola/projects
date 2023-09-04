const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io'); 

app.use(cors()); // Add cors middleware

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

const CHAT_BOT = 'ChatBot';
let chatRoom = '';
let allUsers = []

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on('join_room', (data) => {
    const { name, room } = data;
    // alert(JSON.stringify({name, room}));
    socket.join(room);

    let __createdTime__ = Date.now();
    socket.to(room).emit('receive_message', {
      message: `${socket.id} has joined the chat room`,
      username: CHAT_BOT,
      __createdTime__,
    })

    socket.emit('receive_message', {
      message: `Welcome ${socket.id}`,
      username: CHAT_BOT,
      __createdTime__,
    })

    chatRoom = room;
    allUsers.push({id: socket.id, name, room});
    chatRoomUsers = allUsers.filter(user => user.room === room )
    socket.to(room).emit('chatroom_users', chatRoomUsers);
    socket.emit('chatroom_users', chatRoomUsers)
  })

  let dadta = ""
  socket.on('toAdmin', (data) => {
    dadta = data
    console.log(data);
    // socket.join('chat_room');
    // socket.emit('response', {"message": "Hi"})
    io.emit('request', JSON.parse(data).request )
    // socket.emit('request', {"message": "Putty"})
    // socket.emit('request', data )
  })

  socket.on('fromAdmin', (data) => {
    dadta = data
    console.log(data);
    // socke
    // socket.emit('request', {"message": "Hi"})
    io.emit('chat_room', JSON.parse(data).response)
    // socket.emit('request', {"message": "Putty"})
    // socket.emit('request', data )
  })


})


server.listen(4000, () => 'Server is running on port 4000');



