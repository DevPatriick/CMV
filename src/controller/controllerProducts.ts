import { Request, Response } from 'express';
import Products from '../models/modelProducts';
import { Op } from 'sequelize';
// import bcrypt from 'bcrypt';

const controllerProduct = {
    async getProducts(req: Request, res: Response): Promise<Response> {
        try {
          const { account_id } = req.params;
      
          console.log(`Consultando produtos da conta ${account_id}...`);
      
          const products = await Products.findAll({
            where: { account_id: Number(account_id) }
          });
      
          if (products.length === 0) {
            return res.status(404).json({ message: 'Nenhum produto encontrado para essa conta' });
          }
      
          return res.status(200).json(products);
        } catch (error) {
          console.error('Erro ao consultar produtos:', error);
          return res.status(400).json({ error: 'Erro ao consultar produtos' });
        }
      },

  async createProduct(req: Request, res: Response): Promise<void> {
    const { name , sale_price} = req.body
    const { account_id } = req.params;
    try {
      console.log('Criando Produto...')

      if(!name || !sale_price ){
        res.status(400).json({error:"Todos os campos são obrigatórios"})
      }

      // const bcryptPass = bcrypt.hashSync(password, 10)

      const productData = {
        name, 
        sale_price,
        account_id: Number(account_id)
      }

      const newProduct = await Products.create(productData)

      res.status(200).json(newProduct)
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      res.status(500).json({ error: 'Erro ao criar produto' })
    }
  }, 
};

export default controllerProduct;
