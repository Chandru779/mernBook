const express = require('express');
const connectDB = require('./config/db');

const app = express()

app.get('/', (req,res)=>res.send('Hello world'));

connectDB();

const PORT =process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})