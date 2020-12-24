import "@babel/polyfill";
import "./models/Video";
import "./models/Comment";
import "./models/User"
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config()



const PORT = process.env.PORT || 4000;

const hadnleListening = () => console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, hadnleListening);