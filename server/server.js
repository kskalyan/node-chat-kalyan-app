const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     // res.send('Hello World!');
//     res.render('home.hbs', {
//         pageTitle: 'Home Page',
//         welcomeMessage: 'Welcome to my Node Web Application'
//     })
// });

app.listen(port, () => {
    console.log(`Server is up and running at port ${port}`);
});