import { getConnection } from "../services/redis.service.js"

const saveApuesta = async(json)=> {
    const redis = await getConnection()
    let a = await redis.set('info:03578')
    JSON.stringify(json), {
        EX: 300
    }
    return a ;
}



export default {
    saveApuesta
}