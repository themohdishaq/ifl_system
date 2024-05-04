import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// importing routes
import dashboard from "./Routes/dashboard"
import contactdetails from "./Routes/contactdetails"
import setting from "./Routes/setting"
import iflstatics from "./Routes/iflstatics"
import FAQ from "./controllers/faq";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());





/* ROUTES */
app.use("/home", dashboard)
app.use("contactdetail", contactdetails)
app.use("data", iflstatics)
app.use("profile", setting)
app.use("FAQ",FAQ)


/* MONGOOSE SETUP */
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  })
  .catch((error) => console.log(`${error} did not connect`));
