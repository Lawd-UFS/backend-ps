import { Request, Response } from "express";
import scheduleService from '../services/schedule-service';
import mongoose, { Types } from 'mongoose';
import { ScheduleRequest, ScheduleResponse } from "../types/schedule-types";
import { ApiResponse } from "../types/api-types";

export const createSchedule = async (req: Request<{},{},ScheduleRequest>, res: Response<ApiResponse<ScheduleResponse>>) => {
    const { dateTime, evaluatorId } = req.body;

    if (!evaluatorId) return res.status(400).json({ 
        success: false,
        message: 'É necessário informar o id do avaliador'
    });

    const parsedDateTime = new Date(dateTime);
    if (isNaN(parsedDateTime.getTime())) {
        return res.status(400).json({ 
            success: false,
            message: 'Formato de data inválido' 
        });
    }

    try {
        const schedule = await scheduleService.createSchedule(
            new Date(dateTime), new Types.ObjectId(evaluatorId)
        );
        res.status(201).json({
            success: true,
            message: 'Horário criado com sucesso',
            data: schedule
        });
    } catch (error: any) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}

export const getSchedulesByEvaluatorId = async (req: Request<{ evaluatorId: string }>, res: Response<ApiResponse<ScheduleResponse[]>>) => {
    const { evaluatorId } = req.params;

    if (!evaluatorId) return res.status(400).json({ 
        success: false,
        message: 'É necessário informar o id do avaliador'
    });

    // TODO: validar no futuro a validade do id de avaliador fornecido (quando estiverem implementadas as entidades de avaliador)

    try {
        const schedules = await scheduleService.getSchedulesByEvaluatorId(new Types.ObjectId(evaluatorId));
        const scheduleResponses: ScheduleResponse[] = schedules.map(schedule => {
            return {
                id: schedule._id,
                dateTime: schedule.dateTime,
                evaluator: schedule.evaluator,
                status: schedule.status,
                candidate: schedule.candidate,
            }
        });

        res.status(200).json({
            success: true,
            message: 'Horários recuperados com sucesso',
            data: scheduleResponses
        });
    } catch (error: any) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}

export default { createSchedule, getSchedulesByEvaluatorId };