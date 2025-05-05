import { Request, Response } from "express";
import Category from "../models/modelCategory";
import Ingredients from "../models/modelIngredients";
import Accounts from "../models/modelCompany";

const controllerCategories = {
    async createCategory(req: Request, res: Response): Promise<void>{
        const { name } = req.body;
        const { account_id } = req.params;

        try {
            console.log('Criando Categoria...')

            if(!name){
                res.status(400).json({error:"Todos os campos são obrigatórios"})
            }

            const categoryData = {
                name, 
                account_id: Number(account_id)
            }

            const newCategory = await Category.create(categoryData)
            res.status(200).json(newCategory)
        } catch (error) {
            console.error('Erro ao criar categoria: ', error)
            res.status(500).json({error: 'Erro ao criar categoria'})
        }
    },

    async getCategories(req:Request, res: Response): Promise<Response>{
        const { account_id } = req.params
        try {
            console.log(`Consultando Categorias da empresa ${account_id}`)
            const categories = await Category.findAll({
                where: {
                    account_id: Number(account_id)
                },
                // include: [{
                //     model: Ingredients,
                //     as: 'ingredients',
                //     attributes:['name', 'unit']
                // },
                // {
                //     model: Accounts,
                //     as: 'account',
                //     attributes: ['company']
                // }
                // ]
            })

            if(categories.length === 0){
                return res.status(404).json({ message: 'Nenhum categoria encontrado para essa compania' });
            }
            return res.status(200).json(categories)
        } catch (error) {
            console.error('Erro ao consultar categorias:', error);
            return res.status(400).json({ error: 'Erro ao consultar categorias' });
        }
    }
};

export default controllerCategories;