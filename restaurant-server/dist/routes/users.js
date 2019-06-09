"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class userRoutes {
    routes(app) {
        app.route('/user')
            .get((req, res) => {
            res.status(200).send({
                status: true,
                resCode: 200,
                isError: false,
                message: "User fetched successfully"
            });
        }).post((req, res) => {
            res.status(201).send({
                status: true,
                resCode: 201,
                isError: false,
                message: "User created successfully"
            });
        });
        // Edit user.
        app.route("/user/:uid").put((req, res) => {
            res.status(201).send({
                status: true,
                resCode: 201,
                isError: false,
                message: "User updated successfully"
            });
        }).delete((req, res) => {
            res.status(202).send({
                status: true,
                resCode: 201,
                isError: false,
                message: "User deleted successfully"
            });
        });
    }
}
exports.userRoutes = userRoutes;
//# sourceMappingURL=users.js.map