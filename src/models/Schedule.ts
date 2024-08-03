import mongoose, {Document, Schema, Types} from 'mongoose';

interface ISchedule extends Document {
    dateTime: Date;
    evaluator: mongoose.Schema.Types.ObjectId;
}

const ScheduleSchema: Schema = new Schema({
    dateTime: {
        type: Date, 
        required: [true, 'É necessário informar um horário'],
        validate: {
            validator: (value: Date) => value >= new Date(),
            message: 'Não é possível definir um horário passado'
        }
    },
    evaluator: { 
        type: mongoose.Types.ObjectId,
        ref: 'Evaluator',
        required: [true, 'É necessário informar um avaliador']
    }
}, { collection: 'horarios' });

export default mongoose.model<ISchedule>('Schedule', ScheduleSchema);