import React from 'react';
import styles from './Login.module.css';
import { getUserService } from '../services/UserService.ts';
import { toast } from 'react-toastify';
import { GlobalContext } from '../context/GlobalContext.tsx';
import { useNavigate } from 'react-router-dom';
import LogoTitle from '../components/LogoTitle.tsx';

const Login = () => {
  const { user, setUser } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [nameCode, setNameCode] = React.useState('');
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const user = await getUserService(nameCode);

      if (user.data) {
        setUser(user.data);
        navigate('/shifts');
      }

      toast.success('Usuário logado com sucesso!');
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      toast.error('Usuário não encontrado!');
    }
  }

  React.useEffect(() => {
    if (user && user.nameCode) navigate('/shifts');
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <LogoTitle />
      <form className={styles.divInput} onSubmit={handleSubmit}>
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            id="nameCode"
            placeholder="Código de usuário"
            value={nameCode}
            onChange={(e) => setNameCode(e.target.value)}
          />
          <label htmlFor="nameCode">Código do usuário</label>
        </div>
        <button type="submit" className={`${styles.bigBtn}`}>
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default Login;
