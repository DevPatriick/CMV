import { DataTypes, Model } from 'sequelize';
import db from '../database/db'; 

class Accounts extends Model {
  public id!: number;
  public company!: string;
  public cnpj!: string;
  public email!: string;
  public password!: string;
  public status!: string;
}

Accounts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['ATIVO', 'CANCELADO']],
      },
    },
     createdAt: DataTypes.DATE,
     updatedAt: DataTypes.DATE
  },
  {
    sequelize: db,
    tableName: 'accounts',
  }
);


export default Accounts;
