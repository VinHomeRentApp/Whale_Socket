import { Server } from 'http'
import { Server as SocketIOServer } from 'socket.io'

let io: SocketIOServer

const socketSetup = (server: Server) => {
  io = new SocketIOServer(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  })

  io.on('connection', (socket) => {
    console.log('New client connected', socket.id)

    socket.on('private-message', ({ recipient, message }) => {
      io.to(recipient).emit('private-message', { sender: socket.id, message })
    })

    socket.on('check-status-payment', () => {})

    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id)
    })
  })
}

export { io, socketSetup }
