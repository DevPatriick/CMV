import db from "../database/db";
import { DataTypes, Model } from "sequelize";


class CMV_Ingredients extends Model {
    declare public id: number;
    public ingredients_id!: number;
    public cust!: number;
    public entry!: number;
}

CMV_Ingredients.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ingredients_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cust: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    }, 
    entry: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
    },
    {
        sequelize: db,
        tableName: 'history_ingredients'
    }
);



export default CMV_Ingredients;