import { ObjectId } from "mongodb";
import { Status } from "../models/status.enum";

type ScheduleRequest = {
    dateTime: Date;
    evaluatorId: string;
}

type ScheduleResponse = {
    dateTime: Date;
    evaluator: ObjectId;
    status: Status;
    candidate: ObjectId;
}

export { ScheduleRequest, ScheduleResponse };