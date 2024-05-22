import { z } from 'zod';


const variantsValidationSchema = z.object({
  type: z.string().min(1, 'type is required'),
  value: z.string().min(1, 'value is required'),
});

const inventoryValidationSchema = z.object({
  quantity: z.number().int().nonnegative('quantity cannot be negetive').min(1, 'quantity is required'),
  inStock: z.boolean(),
});



export const productValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(1, 'Prize is required'),
  category: z.string().min(1, 'Category is required'),
  tags: z.string().array(),
  variants: z.array(variantsValidationSchema).min(1, 'variants are required'),
  inventory: inventoryValidationSchema,
});

export const productValidationSchemaForUpdate =
  productValidationSchema.partial();
