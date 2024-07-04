import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const PORT = process.env.SERVER_PORT ?? 5000;

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

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})