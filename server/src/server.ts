import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from 'morgan'
import connectToDb from "./db/connectToDb";
import config from'config';


const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("common"))
app.use(cors());

//routes


connectToDb(config.get('db.url'), config.get('port'), app)