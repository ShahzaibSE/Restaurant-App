import * as express from "express"
import * as bodyParser from "body-parser"
import * as mongoose from "mongoose"

// Routes.
import {UserRoutes} from "./routes/users"

// var app = express()

class App {
    public app: express.Application
    public user_routes: UserRoutes = new UserRoutes()
    public mongoUrl: string = 'mongodb://localhost/restaurant';  

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
        this.mongoSetup()
    }

    public mongoSetup() {
        mongoose.connect(this.mongoUrl)
    }
}

export default new App().app