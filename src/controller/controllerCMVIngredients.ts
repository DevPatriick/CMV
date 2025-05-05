import { Request, Response } from "express";
import CMV_Ingredients from "../models/modelCMVIngredients";
import Ingredients from "../models/modelIngredients";

const controllerHistoryIngredients = {
    async createHistoryIngredients(req: Request, res: Response): Promise<void>{
        const { cust, entry } = req.body;
        const { ingredients_id } = req.params;

        try {
            console.log('Atualizando CMV...')

            if(!entry || !cust){
              res.status(400).json({error:"Todos os campos são obrigatórios"})
            }

            const CMVData = {
                ingredients_id: Number(ingredients_id),
                entry,
                cust
            }

            const updateCMV = await CMV_Ingredients.create(CMVData)
            res.status(200).json(updateCMV)

        } catch (error) {
            console.error('Erro ao atualizar o CMV: ', error)
            res.status(500).json({error: 'Erro ao atualizar o CMV'})
        }
    },

    async getHistoryIngredients(req: Request, res: Response): Promise<Response>{
        const { ingredients_id } = req.params;

        try {
            console.log(`Consultando histórico do ingrediente ${ingredients_id}`);
            const cmv = await CMV_Ingredients.findAll({
                where: {
                    ingredients_id: Number(ingredients_id)
                }, 
                include: [{
                    model: Ingredients,
                    as: 'ingredients',
                    attributes:['name', 'unit']
                }]
            })

            return res.status(200).json(cmv)

        } catch (error) {
            console.error('Erro ao consultar CMV:', error);
            return res.status(400).json({ error: 'Erro ao consultar CMV' });
        }
    }
}

export default controllerHistoryIngredients;