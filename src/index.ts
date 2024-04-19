import { connectDb } from '../Modules/MongooseModule'
import express, { Express } from "express";
import { json } from "body-parser";
import Routes from "../Routes";

const app: Express = express();
app.use(json());

connectDb();

app.use('/api', Routes);

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
