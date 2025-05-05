import { DataTypes, Model } from "sequelize";
import db from "../database/db";

class Category extends Model {
    public id!: number;
    public name!: string;
}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
    {
        sequelize: db,
        tableName: 'categories_ingredients',
    }
);



export default Category;