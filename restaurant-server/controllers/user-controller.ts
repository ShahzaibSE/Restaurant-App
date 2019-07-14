import {UserSchema, SessionSchema} from "./../models/user_model"
import {Request, Response} from "express"
import * as mongoose from "mongoose"
import * as jwt from "jsonwebtoken"

const User = mongoose.model("user", UserSchema)
const Session = mongoose.model("session", SessionSchema)

export class UserController{

    public addNewContact (req: Request, res: Response) {       // -- Test Function -- //         
            let newUser = new User(req.body);
        
            newUser.save((err, contact) => {
                if(err){
                    res.send(err);
                }    
                res.json(contact);
            });
        }
    // --- Create User 11/July/2019 -- //
    public createUser(req: Request, res: Response) {
        let newUser = new User(req.body);
        // --- Check Existing User -- //
        User.find({$or:[{ email:req.body.email }, {$and:{firstname:req.body.firstname,lastname:req.body.lastname}}]})
            .exec((err,isUser)=>{
                if (err) {
                    res.send({
                       status: false,
                       resCode: 500,
                       isError: true,
                       message: "Internal server error." 
                    })
                }else if (isUser) {
                    console.log("User found.")
                    console.log(isUser)
                    debugger
                }else {
                    newUser.save().then(function(product) {
                        res.send({
                            status: true,
                            resCode: 200,
                            isError : false,
                            message: "User created successfully."
                        })
                    }, function(on_reject){
                        res.send({
                            status: false,
                            resCode: 500,
                            isError : true,
                            message: "User not created due to error."
                        })
                    })
                }
        })
    }
    // -- Login Method created 11/July/2019 - 1:12AM -- //
    public loginIn(req: Request, res: Response) {
        var body = req.body
        var secretKey: string = "omega"
        // JWT encoding.
        let jwt_token: string = jwt.sign(body,secretKey)
        var newSession = new Session({email: req.body.email, signed_token: jwt_token})
        // --- Check Existing User -- //
        User.find({$or:[{ email:req.body.email }, {$and:{firstname:req.body.firstname,lastname:req.body.lastname}}]})
            .exec((err,isUser)=>{
                if (err) {
                    res.send({
                       status: false,
                       resCode: 500,
                       isError: true,
                       message: "Internal server error." 
                    })
                }else if (isUser) {
                    newSession.save().then(function(on_session_creation){
                        console.log("Session created.")
                    }, function(session_on_created){"Error while creating session."})
                    console.log("User found.")
                    console.log(isUser)
                    res.send({
                        status: true,
                        resCode: 200,
                        isError: false,
                        message: "User found and login successfully.",
                        t: jwt_token
                    })
                }
        })
    }    
    // Delete User created 13/July/2019 - 7:13PM -- //
    public delete(req: Request, res: Response) {
        var body = req.body
        User.remove({email: body.email}).exec((err, data)=>{
            if (err) {
                res.send({
                    status: false,
                    resCode: 500,
                    isError: true,
                    message: "Internal server error, could not complete operation."
                })
            }else if(data){
                res.send({
                    status: true,
                    resCode: 200,
                    isError: false,
                    message: "User deleted successfully."
                })
            }
        })
    }
    // Update User created 14/July/2019 - 3:26 PM -- //
    public update(req: Request, res: Response){
        var body = req.body
        User.update({email: body.email},{firstname: body.firstname, lastname: body.lastname, phone: body.phone}).exec((err, is_user_update)=>{
            if (err) {
                res.send({
                    status: false,
                    resCode: 500,
                    isError: true,
                    message: "Internal server error, operation could not be completed."
                })
            }else if(is_user_update){
                res.send({
                    status: true,
                    resCode: 200,
                    isError: false,
                    message: "User updated successfully."
                })
            }
        })
    }
}