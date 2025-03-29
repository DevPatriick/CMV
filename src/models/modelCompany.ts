import { DataTypes, Model } from 'sequelize';
import db from '../database/db'; // Onde você configura o Sequelize

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
  },
  {
    sequelize: db,
    tableName: 'accounts',
    timestamps: false,  // Desabilita as colunas createdAt e updatedAt
  }
);


export default Accounts;
