import { Request, Response } from "express";
import scheduleService from '../services/schedule-service';
import mongoose, { Types } from 'mongoose';

export const createSchedule = async (req: Request, res: Response) => {
    const { dateTime, evaluatorId } = req.body;

    if (!evaluatorId) return res.status(400).json({ message: 'É necessário informar o id do avaliador' });

    const parsedDateTime = new Date(dateTime);
    if (isNaN(parsedDateTime.getTime())) {
        return res.status(400).json({ message: 'Formato de data inválido' });
    }

    try {
        const schedule = await scheduleService.createSchedule(
            new Date(dateTime), new Types.ObjectId(evaluatorId)
        );
        res.status(201).json(schedule);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}