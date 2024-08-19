import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv'

dotenv.config();

// Configuração do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API do Processo Seletivo da LAWD',
      version: '1.0.0',
      description: 'Documentação da API que implementa o backend do Site do Processo Seletivo.',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Caminho para os arquivos onde as anotações do Swagger estão localizadas
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
