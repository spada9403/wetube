import "./models/Video";
import "./models/Comment";
import dotenv from "dotenv";
import app from "./app";
import "./db";

dotenv.config()



const PORT = process.env.PORT || 4000;

const hadnleListening = () => console.log(`✔ Listening on : http://localhost:${PORT}`);

app.listen(PORT, hadnleListening);