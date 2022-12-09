import { DataTypes } from "sequelize";
import sequelize from "../config/database";

export const pokedexType = sequelize.define("Pokedex_Type",{
    PokedexId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: false
    }
})