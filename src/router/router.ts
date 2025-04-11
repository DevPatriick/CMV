import express, { Request, Response, NextFunction } from 'express';
import controllerCompany from '../controller/controllerCompany';
import controllerProduct from '../controller/controllerProducts';

const router = express.Router();

// Função assíncrona para lidar com erros
const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next); 
  };
};


router.get('/companiesAll', asyncHandler(controllerCompany.getCompany));
router.post('/companies', asyncHandler(controllerCompany.createAccount))
router.put('/companies/:id', asyncHandler(controllerCompany.updateAccount))
router.get('/companies', asyncHandler(controllerCompany.getOneCompany))

router.get('/products/:account_id', asyncHandler(controllerProduct.getProducts));
router.post('/products/:account_id', controllerProduct.createProduct);


export default router;
