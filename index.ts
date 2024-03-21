import app from './src/app'
import { socketSetup } from './src/config/socket'
import { DEFAULT_PORT } from './src/constants'

const PORT = process.env.PORT || DEFAULT_PORT

const server = app.listen(PORT, () => {
  console.log(`Server is start at PORT: ${PORT}`)
  socketSetup(server)
})

export default server
