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

class UserController {
    createUser() {
        var newUserModel = mongoose.model("users", userModel)
        var newUserDocument = new newUserModel({})
    }

    getUser() {

    }

    deleteUser() {

    }

    updateUser() {

    }
}
