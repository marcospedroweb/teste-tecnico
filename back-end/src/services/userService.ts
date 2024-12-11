import User from '../models/User';

export interface ICreateUserRequest {
  nameCode: string;
}

export const createUser = async (userData: ICreateUserRequest) => {
  const user = new User(userData);
  return await user.save();
};

export interface IStartShiftRequest {
  nameCode: string;
}

export const startShift = async (userData: IStartShiftRequest) => {
  const user = await User.findOne({ nameCode: userData.nameCode });
  if (!user) throw new Error('Usuário não encontrado');

  user.startTime = new Date();
  await user.save();
  return user;
};

export interface IEndShiftRequest {
  nameCode: string;
}

export const endShift = async (userData: IEndShiftRequest) => {
  const user = await User.findOne({ nameCode: userData.nameCode });
  if (!user) throw new Error('Usuário não encontrado');

  if (!user.startTime) {
    throw new Error('Turno não iniciado');
  }

  const endTime = new Date();
  const duration = Math.round(
    (endTime.getTime() - user.startTime.getTime()) / 60000,
  );

  user.previousShifts.push({
    date: endTime,
    duration,
  });

  user.startTime = null;
  await user.save();

  return {
    nameCode: user.nameCode,
    previousShifts: user.previousShifts,
  };
};

export const getUserData = async (nameCode: string) => {
  const user = await User.findOne({ nameCode });
  return user ?? null;
};
