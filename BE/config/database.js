var mongoose = require("mongoose");
// mongoose.set('useCreateIndex', true)

const dbhost = 'localhost';
const dbport = 27017
const dbname = 'calculator'
const url = `mongodb://${dbhost}:${dbport}/${dbname}`;

mongoose.connect(url, {
    useNewUrlParser: true
});

var client = mongoose.connection;

client.on("error", console.error.bind(console, "connection error"));
client.once("open", function (callback) {
    console.log("Database connection succeeded - " + dbname)
});
