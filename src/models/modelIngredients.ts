import { DataTypes, Model } from 'sequelize';
import db from '../database/db';

class Ingredient extends Model {
  public id!: number;
  public name!: string;
  public unit!: 'kilo' | 'grama' | 'unidade';
  public cost_per_unit!: number;
}

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['kilo', 'grama', 'unidade']],
      },
    },
    cost_per_unit: {
      type: DataTypes.DECIMAL(10, 4),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'ingredients',
    timestamps: false,
  }
);

export default Ingredient;
