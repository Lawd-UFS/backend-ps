require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 3000;

app.use(express.json());


// Routes
app.get('/', (req: any, res: any) => {
    res.status(200).json({ message: "Backend da aplicação Processo Seletivo LAWD" });
});


// Database connection
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect()
.then(() => {
    console.log('Database connected')
})
.catch((err) => {
    console.log(err)
});




app.listen(PORT, () => {
    console.log('It is runing')
});