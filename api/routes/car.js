import { Router } from "express";
import CarSchema from "../models/car.js";







const carRoute = Router();

//get all cars
carRoute.get('/', (req, res) => {
    CarSchema.find()
    .then(car => res.json(car))
    .catch(error => res.status(400).json(`ERROR: ${error}`));
});


//add new car
carRoute.post('/add', (req, res) => {
    const newCar = new CarSchema({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color,
    })

    newCar.save()
    .then(() => res.json("New Car posted successfully"))
    .catch(error => res.status(400).json(`ERROR: ${error}`));
})


export default carRoute;