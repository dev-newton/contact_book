const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./config/keys").mongoURI;

const contacts = require("./routes/api/contacts");

const app = express();

const port = process.env.PORT || 3300;

app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connection to DB was successful"))
  .catch(err => console.log(err));

mongoose.set("useCreateIndex", true);

app.use("/api/contacts", contacts);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server is now listening on port ${port}`));
