// Trong file server.ts

import { createServer, Server as HTTPServer } from 'http' // Import createServer
import app from './app'
import { socketSetup } from './config/socket'
import { DEFAULT_PORT } from './constants'
import serverless from 'serverless-http' // Import serverless từ 'serverless-http'

const PORT = process.env.PORT || DEFAULT_PORT
const server: HTTPServer = createServer(app)

// Setup socket.io
socketSetup(server)

// Convert the Express app to a serverless handler
const handler = serverless(app)

// Export the handler for serverless deployment
export { handler }

// Start the regular HTTP server
server.listen(PORT, () => {
  console.log(`Server is start at PORT: ${PORT}`)
})
