import { Request, Response, Router } from "express";
import {createPokedex, deletePokedex, editPokedex, getAllPokedexs, getPokedexById} from "../controllers/pokedexController"

const upload = require("../middleware/uploadFile")
const router = Router()

router.get("/", getAllPokedexs)
router.get("/:id", getPokedexById)
router.post("/", upload.single('img'), createPokedex)
router.put("/:id", editPokedex)
router.delete("/:id", deletePokedex)

export default router 