"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
// import * as mongoose from "mongoose"
// Routes.
// import * as userRoutes from "./routes/users"
// var app = express()
class App {
    // public user_routes: userRoutes.UserRoutes = new userRoutes.UserRoutes()
    constructor() {
        this.app = express();
        this.config();
        // this.user_routes.routes(this.app)     
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map