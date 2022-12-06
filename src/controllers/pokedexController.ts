import { NextFunction, Request, RequestHandler, Response } from "express";
import { url } from "inspector";
import { where } from "sequelize";
import { Pokedex } from "../models/pokedex";
require('dotenv').config()

export const getAllPokedexs:RequestHandler = async(req:Request, res:Response) => {
    const pokedexs = await Pokedex.findAll()
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
        type: req.body.type,
        base64_image: req.body.base64Image,
        file_path: file_path
    }
    await Pokedex.create(pokedex)
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
    let pokedex:Pokedex|null = await Pokedex.findByPk(id)
    return res.status(200).json({pokedex}) 
}