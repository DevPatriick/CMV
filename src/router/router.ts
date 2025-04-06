import express, { Request, Response, NextFunction } from 'express';
import controllerCompany from '../controller/controllerCompany';

const router = express.Router();

// Função assíncrona para lidar com erros
const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next);  // Captura erros e os passa para o middleware de erro
  };
};

// Definindo a rota para obter empresas
router.get('/companiesAll', asyncHandler(controllerCompany.getCompany));
router.post('/companies', controllerCompany.createAccount)
router.put('/companies/:id', controllerCompany.updateAccount)
router.get('/companies', asyncHandler(controllerCompany.getOneCompany))

export default router;
