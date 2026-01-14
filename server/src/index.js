import express from "express";
import dotenv from "dotenv"
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "./lib/auth.js"

dotenv.config()

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true   // allow cookie, auth headers
}))

app.all("/api/auth/*splat", toNodeHandler(auth)); // For ExpressJS v5 

app.use(express.json());

app.get("/", (req, res) => {
    res.send("OK");
})

app.get("/api/me", async (req, res) => {
 	const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
	return res.json(session);
});

app.listen(process.env.PORT, () => {
    console.log(`Your app is running on http://localhost:${process.env.PORT}`)
})