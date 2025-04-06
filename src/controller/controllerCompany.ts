import { Request, Response } from 'express';
import Accounts from '../models/modelCompany';
import { Op } from 'sequelize';
// import bcrypt from 'bcrypt';

const controllerCompany = {
  async getCompany(req: Request, res: Response): Promise<Response> {
    try {
      console.log('Consultando empresas...');
      const companies = await Accounts.findAll();
      if (companies.length === 0) {
        return res.status(404).json({ message: 'Nenhuma empresa encontrada' });
      }
      return res.status(200).json(companies);
    } catch (error) {
      console.error('Erro ao consultar empresas:', error);
      return res.status(400).json({ error: 'Erro ao consultar empresas' });
    }
  },

  async getOneCompany(req: Request, res: Response): Promise<Response> {
    const { id, company, cnpj, email, status } = req.query; 

    try {
        let whereCondition: any = {};

        if (id) whereCondition.id = id;
        if (company) whereCondition.company = { [Op.iLike]: `%${company}%` };
        if (cnpj) whereCondition.cnpj = cnpj;
        if (email) whereCondition.email = email;
        if (status) whereCondition.status = status;

        const getCompany = await Accounts.findOne({ where: whereCondition });

        if (!getCompany) {
            return res.status(404).json({ error: "Empresa não encontrada!" });
        }

        return res.status(200).json(getCompany);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao buscar empresa!" });
    }
}
,

  async createAccount(req: Request, res: Response): Promise<void> {
    const { company , cnpj, email, password, status } = req.body
    try {
      console.log('Criando empresa...')

      // const bcryptPass = bcrypt.hashSync(password, 10)

      if(!company || !cnpj || !email || !password ){
         res.status(400).json({error:"Todos os campos são obrigatórios"})
      }

      const companyData = {
        company, 
        cnpj, 
        email,
        password, 
        status: status || "ATIVO"
      }

      const companies = await Accounts.create(companyData)

      res.status(200).json(companies)
    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      res.status(500).json({ error: 'Erro ao criar empresa' })
    }
  }, 

  async updateAccount(req: Request, res:Response): Promise<void>{
    const { id }  = req.params;
    const { company , cnpj, email, password} = req.body;
    
    
    try {
      const updateAccount = await Accounts.findByPk(id);
      if(!updateAccount) throw new Error("Empresa não encontrada")
        updateAccount.update({
        company,
        cnpj,
        email,
        password,
      })
   
      res.status(200).json(updateAccount)
    }
    catch (error) {
      res.status(400).json('Erro na requisição ou email e CNPJ já cadastrado')
    }
  }, 

};

export default controllerCompany;
