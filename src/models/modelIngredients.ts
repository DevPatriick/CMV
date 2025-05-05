import db from '../database/db';
import { DataTypes, Model } from "sequelize";

class Ingredients extends Model {
  declare public id: number;
  public category_id!: number;
  public name!: string;
  public unit!: number;
  public stock!: number;
}

Ingredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit: {
      type: DataTypes.ENUM('Unidade', 'Gramas', 'Quilo'),
      allowNull: false
    },
    stock: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize: db,
    tableName: 'ingredients',
  }
);


export default Ingredients;
