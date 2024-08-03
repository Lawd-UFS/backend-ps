import mongoose, { Types } from 'mongoose';
import Schedule from "../models/Schedule";

const createSchedule = async (dateTime: Date, evaluatorId: Types.ObjectId) => {
    const schedule = new Schedule({dateTime, evaluator: evaluatorId});
    return await schedule.save();
};

export default {
    createSchedule
};

    