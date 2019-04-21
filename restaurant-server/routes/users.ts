import * as express from 'express'

class UserRoutes {
    public routes(app: express.Application): void {          
        app.route('/')
        .get((req: express.Request, res: express.Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })               
    }
}

export default UserRoutes