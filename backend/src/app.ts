import express from 'express'
import { errorHandler } from '@/middlewares/errorHandler'
import gameRoutes from '@/routes/gameRoutes'

const app = express()

app.use(express.json())

//Routes
app.use('/api/games', gameRoutes)

//Global error handler
app.use(errorHandler)

export default app
