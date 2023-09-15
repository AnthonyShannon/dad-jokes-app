const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static('public'));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require('./models/index')

const routes = require("./controllers/jokes_controller.js");

app.use(require('./routes/index'))

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
