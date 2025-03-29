import { Request, Response } from 'express';
import Accounts from '../models/modelCompany';

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
};

export default controllerCompany;
