import { Request, Response } from 'express';
import {
  createUser,
  startShift,
  endShift,
  getUserData,
} from '../services/userService';

export const createUserController = async (req: Request, res: Response) => {
  try {
    const userData = { nameCode: req.body.nameCode };
    const user = await createUser(userData);
    res.status(201).json({ message: 'Usuário criado com sucesso', data: user });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).send('Erro ao criar usuário');
  }
};

export const startShiftController = async (req: Request, res: Response) => {
  try {
    const { nameCode } = req.body;
    console.log(req.body);
    console.log(req.body);
    console.log(req.body);
    console.log(req.body);
    console.log(req.body);
    const user = await startShift({ nameCode });
    res.status(201).json({ message: 'Turno iniciado com sucesso', data: user });
  } catch (error) {
    console.error('Erro ao iniciar o turno:', error);
    res.status(500).send('Erro ao iniciar o turno');
  }
};

export const endShiftController = async (req: Request, res: Response) => {
  try {
    const { nameCode } = req.body;
    const shiftData = await endShift({ nameCode });
    res.status(200).json({
      message: 'Turno finalizado com sucesso',
      data: shiftData,
    });
  } catch (error) {
    console.error('Erro ao finalizar o turno:', error);
    res.status(500).send('Erro ao finalizar o turno');
  }
};

export const getUserDataController = async (req: Request, res: Response) => {
  try {
    const { userCode } = req.params;

    const user = await getUserData(userCode);

    if (!user) {
      return res.status(404).json({
        message: 'Usuário não encontrado',
      });
    }

    res.status(200).json({
      message: 'Usuário encontrado com sucesso',
      data: user,
    });
  } catch (error) {
    console.error('Erro ao retornar usuário:', error);
    res.status(500).send('Erro ao retornar usuário');
  }
};
