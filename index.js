const express = require("express");

const app = express();
app.use(express.json());

const personsRoute = require("./routes/PersonsRoute");
const port = "3000";

app.use("/api/persons", personsRoute);

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})
