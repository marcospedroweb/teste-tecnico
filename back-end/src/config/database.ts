import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://marcosDesafio:DrElXHHUgSfOL3m9@cluster0.jlnrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    );
    // DrElXHHUgSfOL3m9
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
