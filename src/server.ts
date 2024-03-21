import app from './app'
import { socketSetup } from './config/socket'
import { DEFAULT_PORT } from './constants'

const PORT = process.env.PORT || DEFAULT_PORT

const server = app.listen(PORT, () => {
  console.log(`Server is start at PORT: ${PORT}`)
  socketSetup(server)
})
