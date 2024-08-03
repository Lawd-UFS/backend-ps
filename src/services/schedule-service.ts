import mongoose, { Types } from 'mongoose';
import Schedule, { ISchedule } from "../models/Schedule";
import { Status } from '../models/status.enum';

const createSchedule = async (dateTime: Date, evaluatorId: Types.ObjectId, status?: Status, candidateId?: Types.ObjectId): Promise<ISchedule> => {
    const schedule = new Schedule({
        dateTime, 
        evaluator: evaluatorId,
        status: status || null,
        candidate: candidateId || null
    });
    return await schedule.save();
};

export default {
    createSchedule
};

    