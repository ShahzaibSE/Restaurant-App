import {Request, Response} from "express";
import {UserController} from "./../controllers/user-controller"

export class UserRoutes {      
    public userController = new UserController()
    public routes(app): void {          
        // app.route('/user')
        // .get((req: Request, res: Response) => {            
        //     res.status(200).send({
        //         status: true,
        //         resCode: 200,
        //         isError: false,
        //         message: "User fetched successfully"
        //     })
        // }).post(this.userController.addNewContact)  // Adding user

        app.route("/user/login").post(this.userController.loginIn)
        app.route("/user/signup").post(this.userController.createUser)        
          
        // Edit user.
        app.route("/user/:uid").put(this.userController.update).delete((req: Request, res: Response) => {
            res.status(202).send({
                status: true,
                resCode: 201,
                isError: false,
                message: "User deleted successfully"
            })
        })
    }
}