import * as express from 'express' 
import * as mongoose from 'mongoose' 

var userModel: mongoose.Schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    dateofbirth: String,
    gender: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date
})

export class UserController{
    user_route = express.Router()
    createUser(req: express.Request, res: express.Response) {
        var newUserModel = mongoose.model("users", userModel)
        this.user_route.post("/user/create",(req,res)=>{
            var body = req.body
            var newUserDocument = new newUserModel({
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
                password: body.password,
                createdAt: new Date().toISOString()
            })
            newUserModel.findOne({email:body.email}).exec((data,err)=>{
                if (err) {
                    res.send({
                        status: false,
                        resCode: 400,
                        isError: true,
                        message: "Internal server error while fetching user."
                    })
                }else if (data) {
                    res.send({
                        status: true,
                        resCode: 200,
                        isError: false,
                        message: "User already exists."
                    })
                }
            })
        })
    }

    getUser() {

    }

    deleteUser() {

    }

    updateUser() {

    }
}
