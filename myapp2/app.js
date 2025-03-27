const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/',express.static('files')); //οταν θα δει μια κλιση στο Localhost, τοτε θα ερθει να τρεξει μια διαδικασια η οποια θα τρεξει τα στατικα αρχεια (html) μεσα στο φακελο files

app.get('/',(req,res)=>{
    res.send("This is the Home Page")
})

app.post('/user', (req,res)=>{
    let data = req.body;
    let username = req.body.username;
    let email = req.body.email;

    console.log(data);
    res.send(`User data ${username}, ${email}`);
})

app.post('/userForm',(req,res)=> {
    let data = req.body;

    console.log("Data", data);
    res.send("UserForm Page")
})

app.use('/user1', (req,res)=> {
    console.log("User 1");
    res.send("User 1 Page");
})

app.use('/user2', (req,res)=> {
    console.log("User 2");
    res.send("User 2 Page");
})

app.use('/user2/hello', (req,res)=> { //ΠΡΟΣΟΧΗ : Υπαρχει ηδη κλιση για /user2 , και αφου ικανοποειται θα παει να "χτυπησει" εκει και οχι στο /hello.
    console.log("User 2 Hello");
    res.send("User 2 Page Hello");
})

app.listen(port, ()=>{
    console.log("Server is up")
})