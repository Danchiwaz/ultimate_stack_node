import express, { Application, Request, Response } from "express";
import morgan from "morgan";

const app: Application = express();

app.use(morgan("dev"));
app.use(express.json());


app.get("/", (req:Request, res:Response) =>{
    res.status(200).json({
        message:"Am now using the docker compose up changedsdfsdfsd"
    })
})

const PORT_NUMBER:number = Number(process.env.PORT)|| 3000;

app.listen(PORT_NUMBER,'0.0.0.0', () => {
  console.log(`server listening on port ${PORT_NUMBER}`);
});
