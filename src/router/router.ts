import express, { Request, Response, NextFunction } from 'express';
import controllerCompany from '../controller/controllerCompany';
import controllerIngredients from '../controller/controllerIngredients';
import controllerLoginCompany from '../controller/controllerLoginAccount'
import controllerCategoriesIngredients from '../controller/controllerCategories';
import controllerHistoryIngredients from '../controller/controllerCMVIngredients';

const router = express.Router();

// Função assíncrona para lidar com erros
const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next); 
  };
};

// companies
router.get('/companiesAll', asyncHandler(controllerCompany.getCompany));
router.post('/companies', controllerCompany.createAccount)
router.put('/companies/:id', controllerCompany.updateAccount)
router.get('/companies', asyncHandler(controllerCompany.getOneCompany))

router.post('/login', asyncHandler(controllerLoginCompany.login))

// ingredientes
router.get('/ingredients/:category_id', asyncHandler(controllerIngredients.getIngredients));
router.post('/ingredients/:category_id', controllerIngredients.createIngredient);

// categories
router.post('/categoryIngredients/:account_id', controllerCategoriesIngredients.createCategory)
router.get('/categoryIngredients/:account_id', asyncHandler(controllerCategoriesIngredients.getCategories))

// cmv
router.post('/cmv/:ingredients_id', controllerHistoryIngredients.createHistoryIngredients);
router.get('/cmv/:ingredients_id', asyncHandler(controllerHistoryIngredients.getHistoryIngredients))


export default router;
