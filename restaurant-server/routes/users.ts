import * as express from 'express'

// Controllers.
import * as userController from "./../controllers/users"

export class UserRoutes {
    constructor() {
        
    }
    public routes(app: express.Application): void {          
        app.route('/')
        .get((req: express.Request, res: express.Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })               
    }
}
