import { Request, Response } from 'express'
import { orderServices } from './order.service'
import { orderValidationSchema } from './order.validation'


//1. Create a order (Method: POST)
const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const order = orderValidationSchema.parse(data)
    const result = await orderServices.createOrder(order)
    res.json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })

  } catch (err: any) {
    if (err.name === 'ZodError') {
      return res.status(500).json({
        success: false,
        message: err,
      })
    }
    res.status(500).json({
      success: false,
      message: err.message,
    })
  }
}

//2. Retrieve orderes (Method: GET)
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query
    const result = await orderServices.getAllOrders(email)
    if (email) {
      if (!result) {
        return res.status(500).json({
          success: false,
          message: 'Order not found',
        })
      } else {
        if (result.length === 0) {
          return res.json({
            success: false,
            message: 'no order found for this user email!',
            data: result,
          })
        }
        return res.json({
          success: true,
          message: 'Orders fetched successfully for user email!',
          data: result,
        })
      }
    }

    res.json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

export const orderControllers = {
  createOrder,
  getAllOrders,
}
