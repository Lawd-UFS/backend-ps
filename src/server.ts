import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = process.env.SERVER_PORT ?? 5000;

const app = express();

dotenv.config();


app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    const date: Date = new Date();

    res.json({
        message: 'aqui está a resposta da api na rota principal!',
        date: date.toLocaleDateString("br"),
        time: date.toLocaleTimeString("br")
    })
})

app.post('/imc', (req: Request, res: Response) => {
    const height: number = req.body.height / 100;
    const weight: number = req.body.weight;

    const imc: number = weight / (height * height);

    res.json({
        message: 'será que os dados informados estavam utilizando o padrão de medida correto? (altura em cm e peso em kg)',
        imc
    })
})


// Database connection
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect()
.then(() => {
    console.log('Database connected')
})
.catch((err: string) => {
    console.log(err)
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})