
const mongoose = require("mongoose");
const app = require('./app');
const port = 3000;


mongoose.connect("") //promise αρα εχει .then
    .then(
        () => {
            console.log("Connection to MongoDB established")
        },
        err =>  {console.log('Failed to connect to MongoDB', err)}
    )

app.listen(port, ()=>{
    console.log("Server is Up")
})

