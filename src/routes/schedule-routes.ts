import { Router } from 'express';
import { createSchedule } from '../controllers/schedule-controller';

const router = Router();

/**
 * @swagger
 * /api/horarios:
 *   post:
 *     summary: Cria um novo horário
 *     description: Adiciona um novo horário de entrevista ao sistema.
 *     parameters:
 *       - in: body
 *         name: horario
 *         description: Dados do horário a ser criado.
 *         schema:
 *           type: object
 *           required:
 *             - dateTime
 *             - evaluatorId
 *           properties:
 *             dateTime:
 *               type: string
 *               format: date-time
 *               description: Data e hora do horário.
 *             evaluatorId:
 *               type: string
 *               description: ID do avaliador.
 *             status:
 *               type: integer
 *               description: Status do horário. Pode ser 1 (Não agendado), 2 (Agendado).
 *             candidateId:
 *               type: string
 *               description: ID do candidato associado.
 *     responses:
 *       201:
 *         description: Horário criado com sucesso.
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
 *         description: Erro de validação dos dados fornecidos.
 *       500:
 *         description: Erro interno do servidor.
 */
router.post('/horarios', createSchedule);

export default router;