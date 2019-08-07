import {Request, Response} from "express";
import {ResturantController} from "./../controllers/restaurant-controller"

export class RestaurantRoutes {      
    public restaurantController = new ResturantController()
    public routes(app): void {          
        app.route("/restaurant/search").get(this.restaurantController.searchResturants)
    }
}