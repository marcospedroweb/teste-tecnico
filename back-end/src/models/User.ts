import mongoose from 'mongoose';

interface IShift {
  date: Date;
  duration: number;
}

interface IUser extends Document {
  nameCode: string;
  startTime: Date | null;
  previousShifts: IShift[];
}

const shiftSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    min: 0,
  },
});

const userSchema = new mongoose.Schema({
  nameCode: {
    type: String,
    required: true,
    trim: true,
  },
  startTime: {
    type: Date,
    default: null,
  },
  previousShifts: {
    type: [shiftSchema],
    default: [],
  },
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
