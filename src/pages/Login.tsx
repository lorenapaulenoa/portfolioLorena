import { FormEvent, useContext } from "react";
import { Button } from "../components/atoms/Button/Button.component";
import { Input2 } from "../components/atoms/Input/Input2.component";
import { useForm } from "../hooks/useForm.hooks";
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../assets/contexts/App.context";

interface LoginDataI {
  email: string,
  password: string,
}

const initialLoginForm: LoginDataI = { email: '', password: '' };

export interface LoginResponse {
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
}

export const Login = () => {

  const { setToken } = useContext(AppContext)

  const { formData, onChange, resetForm } = useForm<LoginDataI>(initialLoginForm);

  const navigate = useNavigate();

  const onSubmit = async (e?: FormEvent) => {

    e?.preventDefault();

    try {
      const resp = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(formData)
        });
      const data: LoginResponse = await resp.json()
      if (!!data.token){
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON(stringfy));
      }
      
    } catch (error) {
    }
  }

  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-col w-2/4 ">
        <div className="flex flex-col p-5 rounded bg-teal-600 w-4/6 sm:w-full">
          <h1 className="text-center font-bold text-black text-2x1">Formulario de Login</h1>

          <Input2 value={formData.email} onChange={onChange} text='Correo electrónico' name='email' type='email' />
          <Input2 value={formData.password} onChange={onChange} text='Contraseña' name='password' type='password' />

          <div className=" flex flex-row mx-8 items-center justify-center" >
            <Button text='Iniciar Sesión' type="reset" onClick={onSubmit} />
            <Button text='Borrar' type="reset" onClick={resetForm} />
            <Button text='Registro' onClick={() => navigate('/registro')} />
            <Button text="Principal" onClick={() => navigate('/')} />
          </div>
        </div>
      </div>
    </main>
  )
}
