import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function updateProduct(request: Request, response: Response) {
  try {
    const { productId } = request.params;
    const { name, description, price, category, ingredients } = request.body;
    const imagePath = request?.file?.filename;

    if (!productId) {
      return response.status(400).json({
        error: 'productId is required',
      });
    }

    await Product.findByIdAndUpdate(productId, {
      name, description, price, category, ingredients, imagePath,
    });
    response.sendStatus(200);
  } catch (error) {
    console.log(error);
    response.send(500);
  }
}
