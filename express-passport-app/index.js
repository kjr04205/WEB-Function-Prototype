const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = 4000;

app.get('/user/:id', function(req, res){
    const userID = req.params.id;
    res.send('userID = ' + userID);
})
app.get('/user/:passport', function(req, res){
    const userPassport = req.params.passport;
    res.send('userPassport = ' + userPassport);
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})