import { Server } from 'http'
import { Server as SocketIOServer } from 'socket.io'

let io: SocketIOServer

const socketSetup = (server: Server) => {
  io = new SocketIOServer(server, {
    cors: {
      origin: process.env.PORT_CLIENT || 'http://localhost:4200',
      methods: ['GET', 'POST']
    }
  })

  io.on('connection', (socket) => {
    console.log('New client connected', socket.id)

    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id)
    })
  })
}

export { io, socketSetup }
