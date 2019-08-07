import {UserSchema, SessionSchema} from "./../models/user_model"
import {Request, Response} from "express"
import * as mongoose from "mongoose"
import * as jwt from "jsonwebtoken"
import * as request from "request"

// API Key.
import { api_info } from "./../config"

export class ResturantController {
    public searchResturants(){
        request('http://www.google.com', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });
    }
}