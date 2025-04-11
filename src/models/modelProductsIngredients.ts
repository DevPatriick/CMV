import { DataTypes, Model } from 'sequelize';
import db from '../database/db';

class ProductIngredient extends Model {
  public product_id!: number;
  public ingredient_id!: number;
  public quantity!: number;
}

ProductIngredient.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 4),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'product_ingredients',
    timestamps: false,
  }
);

export default ProductIngredient;
