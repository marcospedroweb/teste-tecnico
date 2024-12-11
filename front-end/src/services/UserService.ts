import axios from 'axios';
import type { IUser } from './UserService.struct';

export const API_URL = process.env.REACT_APP_API_URL;

interface IGetUserServiceResponse {
  message: string;
  data: IUser | null;
}

export const getUserService = async (
  nameCode: string,
): Promise<IGetUserServiceResponse> => {
  try {
    const response = await axios.get<IGetUserServiceResponse>(
      `${API_URL}/user/get/${nameCode}`,
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer requisição:', error);
    throw new Error(
      'Erro ao buscar dados do usuário. Tente novamente mais tarde.',
    );
  }
};

export const createUserService = async (nameCode: string): Promise<IUser> => {
  try {
    const response = await axios.post<IUser>(`${API_URL}/user/create`, {
      nameCode,
    });

    return response.data;
  } catch (error) {
    throw new Error('Falha ao criar novo usuário');
  }
};

interface IStartShiftResponse {
  message: string;
  data: IUser | null;
}

export const starShiftService = async (
  nameCode: string,
): Promise<IStartShiftResponse> => {
  try {
    const response = await axios.post<IStartShiftResponse>(
      `${API_URL}/user/startShift`,
      {
        nameCode,
      },
    );

    return response.data;
  } catch (error) {
    throw new Error('Falha ao iniciar turno');
  }
};

interface IEndShiftResponse {
  message: string;
  data: IUser | null;
}

export const endShiftService = async (
  nameCode: string,
): Promise<IEndShiftResponse> => {
  try {
    const response = await axios.post<IEndShiftResponse>(
      `${API_URL}/user/endShift`,
      {
        nameCode,
      },
    );

    return response.data;
  } catch (error) {
    throw new Error('Falha ao parar turno');
  }
};
