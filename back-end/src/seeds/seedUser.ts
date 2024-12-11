import User from '../models/User';
const connectDB = require('../config/database');

export const seedUsers = async () => {
  try {
    await connectDB();

    await User.deleteMany({});

    const users = [
      {
        nameCode: 'user001',
        startTime: new Date('2024-12-10T08:00:00Z'),
        previousShifts: [
          {
            date: new Date('2024-12-09T09:00:00Z'),
            duration: 120,
          },
        ],
      },
      {
        nameCode: 'user002',
        startTime: new Date('2024-12-11T10:30:00Z'),
        previousShifts: [
          {
            date: new Date('2024-12-10T08:30:00Z'),
            duration: 90,
          },
        ],
      },
      {
        nameCode: 'user003',
        startTime: new Date('2024-12-12T14:00:00Z'),
        previousShifts: [
          {
            date: new Date('2024-12-11T11:00:00Z'),
            duration: 150,
          },
        ],
      },
    ];

    await User.insertMany(users);

    console.log('Usuários inseridos com sucesso');
  } catch (error) {
    console.error('Erro ao criar os usuários:', error);
    process.exit(1);
  }
};
