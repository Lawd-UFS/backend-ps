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