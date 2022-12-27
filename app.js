const express = require('express');
const app = express();
const rutasMain = require('./routes/main')
const path = require('path')
const publicPath = path.resolve(__dirname, './public');


app.use(express.static(publicPath));

app.use("/", rutasMain);

app.listen(3000, ()=>{
console.log('Servidor funcionando');
});

