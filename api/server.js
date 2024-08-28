import express from 'express';
import cors from 'cors';






import { connectDB } from './configs/db.js';
import carRoute from './routes/car.js';




const app = express();
var corsOptions = {
    origin: process.env.ORIGIN,
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

connectDB("Atlas MongoDB");

app.use(cors(corsOptions));
app.use(express.json());


const carsRoutes = carRoute;
app.use('/cars', carsRoutes);



//running app
const port = process.env.PORT;
app.listen(port, () => console.log(`Server listenning to http://localhost:${port}`));