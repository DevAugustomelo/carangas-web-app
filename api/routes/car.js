import { Router } from "express";
import CarSchema from "../models/car.js";



const carRoute = Router();

//GET all cars
carRoute.get('/', (req, res) => {
    CarSchema.find()
        .then(car => res.json(car))
        .catch(error => res.status(400).json(`ERROR: ${error}`));
});


//POST new car
carRoute.post('/add', (req, res) => {
    const newCar = new CarSchema({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color,
    })

    newCar
        .save()
        .then(() => res.status(201).json("New Car posted successfully"))
        .catch(error => res.status(400).json(`ERROR: ${error}`));
});


//GET car by ID
carRoute.get('/:id', (req, res) => {
    CarSchema.findById(req.params.id)
    .then(car => res.status(200).json(car))
    .catch(error => res.status(400).json(`ERROR: ${error}`))
});


//UPDATE car by ID
carRoute.put('/update/:id', (req, res) => {
    const id = req.params.id;
    if(!id) throw new Error("ID required");
    CarSchema.findById(id)
    .then(car => {
        car.make = req.body.make,
        car.model = req.body.model,
        car.year = req.body.year,
        car.color = req.body.color;
        car.save()
        .then(() => res.status(201).json("Car updated"))
        .catch(error => res.status(400).json(`ERROR: ${error}`))
    })
    .catch(error => res.status(400).json(`ERROR: ${error}`))
    
});


//DELETE car by ID
carRoute.delete('/:id', (req, res) => {
    const id = req.params.id;
    if(!id) throw new Error("ID required");
    CarSchema.findByIdAndDelete(id)
    .then(() => res.status(200).json("Item Deleted"))
    .catch(error => res.status(400).json(`ERROR: ${error}`))
})




export default carRoute;