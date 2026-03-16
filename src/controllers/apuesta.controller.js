import { json, Router } from "express"
import apuestaModel from "../models/apuesta.model.js"

export const getApuesta = (req, res) => {
    return res.json({"msn": "Llegue a get apuesta"})
}

export const save = (req, res) => {
    const json = req.body;
    console.log("*****");
    console.log(json);
    modelApuesta.saveApuesta(json)
    return res.json({"msn": "Llegue a SAVE"})
}

// app.get("/get", async (req, res)=> {
//     const data = await redis.get('info:03578');
//     console.log(data);
//     const json = JSON.parse(data);
//     console.log(json)
//     res.send(data)
// })

export const update = (req, res)=> {
    return res.json({"nsgb": "Llegue a update"})
}

export default {
    getApuesta,
    update,
    save_dos : save 
}