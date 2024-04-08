const connectToMongo = require("./db");
const express = require("express");
const app = express();
var cors = require("cors");
const port = 3333;
const path = require("path");

connectToMongo();

app.use(express.json());
app.use(cors());
app.use("/ifl_system/caseRequest", require("./Routes/caseRequest"));
app.listen(port, () => {
  console.log(`IFL System is listening on port http://localhost:${port}`);
});
