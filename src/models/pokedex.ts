import { DataTypes } from "sequelize";
import sequelize from "../config/database";
import { pokedexType } from "./type";

export const Pokedex = sequelize.define("Pokedex",{
    name_en:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name_jp:{
        type: DataTypes.STRING,
        allowNull: false
    },
    file_path:{
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

Pokedex.hasMany(pokedexType)