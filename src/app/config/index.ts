import dotenv from 'dotenv'
dotenv.config()
// server uri connect link DB_URL and PROT  crated 
export default {
  db_url: process.env.DB_URL,
  port: process.env.PORT,
}
