import { Request, Response } from 'express';
import Ingredients from '../models/modelIngredients';
import CMV_Ingredients from '../models/modelCMVIngredients';
// import { Op } from 'sequelize';

const controllerIngredient = {
    async getIngredients(req: Request, res: Response): Promise<Response> {
        try {
          const { category_id } = req.params;
      
          console.log(`Consultando ingredients da categoria ${category_id}...`);
      
          const ingredients = await Ingredients.findAll({
            where: { 
              category_id: Number(category_id) 
            },
            include: [{
              model: CMV_Ingredients,
              as: 'history_ingredients',
              attributes: ['cust', 'entry']
            }]
          });
      
          if (ingredients.length === 0) {
            return res.status(404).json({ message: 'Nenhum ingrediente encontrado para essa categoria' });
          }
      
          return res.status(200).json(ingredients);
        } catch (error) {
          console.error('Erro ao consultar ingredientes:', error);
          return res.status(400).json({ error: 'Erro ao consultar ingredientes' });
        }
      },

  async createIngredient(req: Request, res: Response): Promise<void> {
    const { name, unit, stock } = req.body
    const { category_id } = req.params;
    try {
      console.log('Criando Ingrediente...')

      if(!name){
        res.status(400).json({error:"Todos os campos são obrigatórios"})
      }

      const ingredientData = {
        name,
        unit,
        stock,
        category_id: Number(category_id)
      }

      const newIngredient = await Ingredients.create(ingredientData)

      res.status(200).json(newIngredient)
    } catch (error) {
      console.error('Erro ao criar ingrediente:', error);
      res.status(500).json({ error: 'Erro ao criar ingrediente' })
    }
  }, 
};

export default controllerIngredient;
