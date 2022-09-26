const express = require('express');
const app = express();
const middleWare = require('./middleware');
const global = require('./global');

app.use(middleWare)

const port = 8000;
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`is running on port ${port}`)
    }
})

//app.use('/home', express.static(__dirname + '/public'));

app.get('/home', (req, res) => {

    res.sendFile(__dirname + '/index.html')

})

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/service.html')
})


app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})



app.use(global)