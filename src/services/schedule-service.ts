import mongoose, { Types } from 'mongoose';
import Schedule, { ISchedule } from "../models/Schedule";
import { Status } from '../models/status.enum';

const createSchedule = async (dateTime: Date, evaluatorId: Types.ObjectId): Promise<ISchedule> => {
    const schedule = new Schedule({
        dateTime, 
        evaluator: evaluatorId,
        status: Status.NotScheduled,
        candidate: null
    });
    return await schedule.save();
};

export default {
    createSchedule
};