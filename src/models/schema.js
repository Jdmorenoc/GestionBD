import { connectionTournament } from "../services/mongo.service.js"

export const configurationDB = async()=> {
    const con = await connectionTournament(); 

    await con.createCollection( 'persona',{
        
    })
}