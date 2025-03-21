const fs = require(`fs`); //lab που με αφηνει να διαβαζω αρχεια
const http = require('http');
const os = require('os') //lab που μου επιτρεπει να παρω πληροφορια για το λειτουργικο συστημα

const osType = os.type();
console.log(osType);


const htmlContent = `
<!DOCTYPE html>
<html>
    <h3>Hello, World! Your OS type is ${osType} </h3>
</html>
`

const server = http.createServer((req,res)=> {
    console.log("Αρχικά δημιουργούμε αρχείο index.html με περιεχόμενα htmlContent")
    fs.writeFile('./index.html', htmlContent, err => {
        if (err) {
            console.log("Problem in writing file")
        }else {
            console.log("Διαβάζουμε το αρχείο και το στέλνουμε πίσω")
            fs.readFile("index.html", 'utf-8', (err,content )=> {
                if (err) {
                    console.log("Problem in reading file", err)
                }
                else {
                    res.setHeader('Content-Type','text/html');
                    res.end(content)
                }
            })
        }
    })

})


server.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})