//create a burger app that is similar to the cat app that can add toppings and fillings into the burger.
//use handlebars
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('BURGERS');
});

app.listen(port, () => {
    console.log('app listening to port ${port}');
});