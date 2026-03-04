import express from "express"   
import { createClient, REDIS_FLUSH_MODES } from "redis";
const app = express();

const redis = createClient({ url : 'redis://localhost:6379' });
redis.connect();


app.get("/save", async(req, res)=> {
    const json = {
        "nombre": "Juan",
        "apellido": "Moreno"
    }
    await redis.set(
        'info:03578',
        JSON.stringify(json),
        {
            EX: 300
        }

    )

    res.send("Hola");
})

app.get("/get", async (req, res)=> {
    const data = await redis.get('info:03578');
    console.log(data);
    const json = JSON.parse(data);
    console.log(json)
    res.send(data)

})


app.get("/update", async(req, res) => {
    const edad = 32;
    const data = await redis.get('info:03578');
    if(!data){
        return res.json({'success': false, 'data':[], 'msg': 'Not found'}, 404)
    }
    let json = JSON.parse(data);
    json.edad = edad;
    const response = await redis.set('info:03578',JSON.stringify(json) , {
        EX : 300
    });
    const r = await redis.get('info:03578');
    res.json({'success': response === 'OK', data:r, msg:response },200)
});


app.get('/hset', async(req,res)=>{
    const response = await redis.hSet('info:192230', {
        'name': 'Juan',
        'apellido': 'Moreno',
        'age': 22
    });
    await redis.expire('info:192230', 300)
    res.send(response)
})

app.get('/getHash' , async(req, res) => {
    const response = await redis.hGetAll('info:192230');
    const ttl = await redis.ttl('info:192230')
    res.json({success: true , data : response, ttl})
})

app.get("/delete", async (req,res) => {
//const data = await redis.hDel('info:192230')
const data = await redis.hDel('info:192230', 'age') 
const data2 = await redis.hGetAll('info:192230')
    const response = await redis.hGetAll('info:192230')
res.send(response)

})

app.listen(8000, ()=> {
    console.log("Hello");
})