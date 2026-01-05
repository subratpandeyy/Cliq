import express from "express";
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.get("/", (req, res) => {
    res.send("OK");
})

app.listen(process.env.PORT, () => {
    console.log(`Your app is running on http://localhost:${process.env.PORT}`)
})