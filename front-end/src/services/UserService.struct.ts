export interface IShift {
  date: Date;
  duration: number;
}

export interface IUser {
  nameCode: string;
  startTime: Date | null;
  previousShifts: IShift[];
}
