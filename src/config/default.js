import dotenv from 'dotenv'
dotenv.config()

export const ENVIRONENT = {
    port: process.env.PORT || 3000,
    redisURL: process.env.REDIS_DB_URL || '',
    mongoURL: process.env.MONGO_DB_URL || '',
    emailURL: process.env.PASSWORD_EMAIL || '',
};

export const getEnv = (name)=> {
    if(!ENVIRONENT[name]){
        console.log('Variable no existe');
        return '';
    }
    return ENVIRONENT[name];
}