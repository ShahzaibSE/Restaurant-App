import * as express from "express"
import * as bodyParser from "body-parser"
import * as mongoose from "mongoose"

// Routes.
import * as userRoutes from "./routes/users"

// var app = express()

class App {
    public app: express.Application
    public user_routes: userRoutes.UserRoutes = new userRoutes.UserRoutes()
    constructor() {
        this.app = express()
        this.config()
        this.user_routes.routes(this.app)     
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app