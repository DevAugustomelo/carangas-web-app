import { Router } from "express";
import CarSchema from "../models/car.js";







const carRoute = Router();


carRoute.get('/', (req, res) => {
    CarSchema.find()
    .then(car => res.json(car))
    .catch(error => res.status(400).res.json(`ERROR: ${error}`));
});



export default carRoute;