import bycrypt from "bycrypt";
import generateToken from "../utils/generateToken.js";
import tokenModel from "../models/tokenModel.js";
import userModel from "../models/userModel.js";

class AuthLoginController{
    async login (req, res) {
        const {user_email, user_password} = req.body;
        const [emailExists]= await userModel.selectUserByEmail(user_email);
        if (!emailExists){
            return res.status(400).json({error:"Email ou senha são inválidos!"});
        }
        const validatePassword = await bycrypt.compare(user_password, emailExists.user_password);
        if(!validatePassword){
            return res.status(400).json({error:"Senha  inválida!"});
        }
        const acessToken = generateTokens.generateAcessToken(emailExists);
        const refreshToken = generateTokens.generateRefreshToken(emailExists);
    }

    
}
