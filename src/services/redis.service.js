
import { createClient } from "redis";


export const getConnection = async()=> {
    const redis = createClient({ url: "driver://usuario@:contraseña@host:ip"})
    await redis.connect();
    return redis;
}
