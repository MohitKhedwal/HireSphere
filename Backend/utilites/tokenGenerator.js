import { config } from "dotenv";
import  jwt  from "jsonwebtoken";
config({path:"./.env"})


async function tokenGenerator(id){
    const data={userId:id}
    const token =await  jwt.sign(data,process.env.SECRET_KEY,{
        expiresIn: '1d'
    })
    return token 
}
export default tokenGenerator