import { DataTypes, Model } from 'sequelize';
import db from '../database/db';

class Product extends Model {
  public id!: number;
  public account_id!: number;
  public name!: string;
  public sale_price!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sale_cust: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    sale_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'products',
    timestamps: false,
  }
);

export default Product;
