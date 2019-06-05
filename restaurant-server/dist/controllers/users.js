"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
    dateofbirth: String,
    gender: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date
});
class UserController {
    constructor() {
        this.user_route = express.Router();
    }
    // createUser(req: express.Request, res: express.Response) {
    //     var newUserModel = mongoose.model("users", userModel)
    //     this.user_route.post("/user/create",(req,res)=>{
    //         var body = req.body
    //         var newUserDocument = new newUserModel({
    //             firstname: body.firstname,
    //             lastname: body.lastname,
    //             email: body.email,
    //             password: body.password,
    //             createdAt: new Date().toISOString()
    //         })
    //         newUserModel.findOne({email:body.email}).exec((data,err)=>{
    //             if (err) {
    //                 res.send({
    //                     status: false,
    //                     resCode: 400,
    //                     isError: true,
    //                     message: "Internal server error while fetching user."
    //                 })
    //             }else if (data) {
    //                 res.send({
    //                     status: true,
    //                     resCode: 200,
    //                     isError: false,
    //                     message: "User already exists."
    //                 })
    //             }
    //         })
    //     })
    // }
    createUser(req, res) {
        var body = req.body;
        var userModel = mongoose.model("user", userSchema);
        userModel.findOne({ email: req.body.email }).exec((err, data) => {
            if (err) {
                res.send({
                    status: false,
                    resCode: 500,
                    isError: true,
                    message: "Internal server error."
                });
            }
            else if (data) {
                res.send({
                    status: true,
                    resCode: 201,
                    isError: false,
                    message: "User already exists."
                });
            }
            else {
                // -- Create User -- //
                var new_user = new userModel(body);
                new_user.save((err, data) => {
                    res.send({
                        status: true,
                        resCode: 200,
                        isError: false,
                        message: "User created successfully"
                    });
                });
            }
        });
    }
    getUser() {
    }
    deleteUser() {
    }
    updateUser() {
    }
}
exports.UserController = UserController;
//# sourceMappingURL=users.js.map