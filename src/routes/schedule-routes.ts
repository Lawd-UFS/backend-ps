import { Router } from 'express';
import { createSchedule } from '../controllers/schedule-controller';

const router = Router();

/**
 * @swagger
 * /api/horarios:
 *   post:
 *     summary: Cria um novo horário
 *     description: Adiciona um novo horário de entrevista ao sistema
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - dateTime
 *               - evaluatorId
 *             properties:
 *               dateTime:
 *                 type: string
 *                 format: date-time
 *                 description: Data e hora do horário (não pode ser uma data passada)
 *               evaluatorId:
 *                 type: string
 *                 description: ID do avaliador (24 caracteres hexadecimais)
 *                 pattern: "^[a-fA-F0-9]{24}$"
 *     responses:
 *       201:
 *         description: Horário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dateTime:
 *                   type: string
 *                   format: date-time
 *                 evaluatorId:
 *                   type: string
 *                 status:
 *                   type: integer
 *                 candidateId:
 *                   type: string
 *       400:
 *         description: Erro de validação dos dados fornecidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/horarios', createSchedule);

export default router;