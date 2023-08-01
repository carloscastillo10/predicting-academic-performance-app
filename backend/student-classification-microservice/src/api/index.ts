import express, { Express, Router } from 'express'
import { config } from '@config/config'
import studentRouter from '@api/students/routes/student.router'
import bodyParser from 'body-parser'

const app: Express = express()
const router: Router = Router()

app.use(express.json())
app.use(bodyParser.json())
app.use('/api/v1', router)
router.use('/students', studentRouter)

app.listen(config.port, () => {
  console.log(`⛈ [Server]: Server is runnin at http://localhost:${config.port}`)
})
