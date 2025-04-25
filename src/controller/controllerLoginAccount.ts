import Accounts  from '../models/modelCompany';
import jwt from 'jsonwebtoken';
import secret from '../config/secret.config';
import { compare } from 'bcryptjs';
import { Request, Response } from 'express';

const loginCompany = {

    async login(req: Request, res: Response){
        const { email, password } = req.body;

        try {
            const company = await Accounts.findOne({
                where: {
                    email
                }
            })
            if(!company || !compare(password, company.password)){
                throw new Error ("E-mail ou senha inválidos")
            }

            if(company.status == "CANCELADO"){
                throw new Error ("Empresa cancelado, solicite reativação")
            }

            const token = jwt.sign({
                id: company.id,
                email: company.email, 
                name: company.company
            }, 
            secret.key,
            {
                expiresIn: '2 days'
            });

            console.log(token)

            return res.status(200).json(token);
        } catch (error) {
            console.error(error)
            return res.status(400).json(error)
        }
    }
}

export default loginCompany;