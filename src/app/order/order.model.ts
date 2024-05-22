import { Schema, model } from 'mongoose'
import { TOrder } from './order.interface'
import { Product } from '../product/product.model'

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

orderSchema.pre('save', async function (next) {
  const result = await Product.findById(this.productId)
  if (!result) {
    throw new Error('Product does not exists by this productId')
  }

  const {
    inventory: { quantity },
  }: any = await Product.findById(this.productId)

  if (quantity < this.quantity) {
    throw new Error('Insufficient quantity available in inventory')
  }

  // reduce the product quantity
  const updatedProduct = await Product.findByIdAndUpdate(
    this.productId,
    {
      $inc: {
        'inventory.quantity': -this.quantity,
      },
    },
    { new: true },
  )
  // update the stock if the quantity is 0
  if (updatedProduct?.inventory.quantity === 0) {
    await Product.findByIdAndUpdate(this.productId, {
      $set: {
        'inventory.inStock': false,
      },
    })
  }

  next()
})

export const Order = model<TOrder>('Order', orderSchema)
