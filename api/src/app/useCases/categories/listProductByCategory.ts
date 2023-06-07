import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductByCategory(request: Request, response: Response) {
  try {
    const { categoryId } = request.params;
    const products = await Product.find().where('category').equals(categoryId);
    response.json(products);
  } catch (err) {
    console.log(err);
    response.status(500);
  }
}
