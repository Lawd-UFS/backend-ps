import { Router } from 'express';
import { createSchedule, getSchedulesByEvaluatorId } from '../controllers/schedule-controller';
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


/**
 * @swagger
 * /api/horarios/{evaluatorId}:
 *   get:
 *     summary: Obtém horários dado um avaliador
 *     description: Retorna uma lista de horários de entrevista para um avaliador específico
 *     parameters:
 *       - in: path
 *         name: evaluatorId
 *         required: true
 *         schema:
 *           type: string
 *           pattern: "^[a-fA-F0-9]{24}$"
 *         description: ID do avaliador (24 caracteres hexadecimais)
 *     responses:
 *       200:
 *         description: Lista de horários obtida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   dateTime:
 *                     type: string
 *                     format: date-time
 *                   evaluatorId:
 *                     type: string
 *                   status:
 *                     type: integer
 *                   candidateId:
 *                     type: string
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/horarios/:evaluatorId', getSchedulesByEvaluatorId);

export default router;