import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config()
import "./models/Video";
import "./models/Comment";


const PORT = process.env.PORT || 4000;

const hadnleListening = () => console.log(`✔ Listening on : http://localhost:${PORT}`);

app.listen(PORT, hadnleListening);