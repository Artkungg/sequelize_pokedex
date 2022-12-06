import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export class Pokedex extends Model{
    id!: number
    name_en!: string
    name_jp!: string
    type!: string
    createdAt!: Date
    updatedAt!: Date
}

Pokedex.init(
    {
        name_en:{
            type: DataTypes.STRING,
            allowNull: false
        },
        name_jp:{
            type: DataTypes.STRING,
            allowNull: false
        },
        type:{
            type: DataTypes.STRING,
            allowNull: false
        },
        file_path:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        sequelize,
        tableName: "pokedexs"
    }
)