import { NextFunction, Request, RequestHandler, Response } from "express";
import { Pokedex } from "../models/pokedex";
import { pokedexType } from "../models/type"
require('dotenv').config()

export const getAllPokedexs:RequestHandler = async(req:Request, res:Response) => {
    const pokedexs = await Pokedex.findAll({
        include:{
            model: pokedexType
        }
    })
    return res.status(200).json({pokedexs})
}

export const createPokedex = async(req:Request, res:Response, next: NextFunction) => {
    let file_path = ""
    if(req.file?.filename){
        file_path = process.env.HOST + "/files/" + req.file.filename
    }
    let pokedex = {
        name_en: req.body.name_en,
        name_jp: req.body.name_jp,
        file_path: file_path,
        Pokedex_Types: JSON.parse(req.body.type)
    }
    await Pokedex.create(pokedex,{
        include: [ pokedexType ]
    })
    return res.status(200).json({message: "Create Pokedex successfully"})
}

export const editPokedex = async(req:Request, res:Response) => {
    const {id} = req.params
    await Pokedex.update({...req.body}, {where: {id}})
    return res.status(200).json({message: "Update Pokedex successfully"})
}

export const deletePokedex = async(req:Request, res:Response) => {
    const {id} = req.params
    await Pokedex.destroy({where: {id}})
    return res.status(200).json({message: "Delete Pokedex successfully"})
}

export const getPokedexById = async(req:Request, res:Response) => {
    const {id} = req.params
    let pokedex = await Pokedex.findByPk(id)
    return res.status(200).json({pokedex}) 
}