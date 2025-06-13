// Load and type env variables

import dotenv from 'dotenv'

dotenv.config()

interface Config {
  port: number
  nodeEnv: string
  allowedOrigins: string[]
  apiUrl: string
}

const config: Config = {
  port: Number(process.env.PORT) || 4321,
  nodeEnv: process.env.NODE_ENV || 'development',
  allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:4200',
  ],
  apiUrl: process.env.API_URL || 'http://localhost:3000',
}

export default config
