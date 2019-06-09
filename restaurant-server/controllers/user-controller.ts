import {UserSchema} from "./../models/user_model"
import {Request, Response} from "express"
import * as mongoose from "mongoose"

const User = mongoose.model("user", UserSchema)

export class UserController{

    public addNewContact (req: Request, res: Response) {                
            let newUser = new User(req.body);
        
            newUser.save((err, contact) => {
                if(err){
                    res.send(err);
                }    
                res.json(contact);
            });
        }
}