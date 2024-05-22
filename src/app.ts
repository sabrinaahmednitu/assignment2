import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRouter } from './app/product/product.route'
import { orderRouter } from './app/order/order.route'

const app = express()

// parsers
app.use(express.json())
app.use(cors())

//Product Management route
app.use('/api/products', productRouter)

//Order Management route
app.use('/api/orders', orderRouter)
 

// server run check
app.get('/', (req: Request, res: Response) => {
  res.send('<h2 style="text-align:center; margin:15% auto; font-size:28px; font-weight: 500;">Server is Running </h2>')
})

app.all('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
  next()
})

export default app
















/* import { orderRouter } from './app/order/order.route'

  app.use('/api/orders', orderRouter)

*/