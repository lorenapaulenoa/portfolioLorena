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

  const { setToken, setUser } = useContext(AppContext)

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
      if (!!data.token) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

    } catch (error) {
    }
  }

  return (
    <main className="flex w-screen h-screen items-center justify-center bg-gradient-to-r from-teja to-beige">

<div className="flex flex-col items-center h-screen w-screen p-4">

<div className="w-24">
        <Button text="Inicio" onClick={() => navigate('/')} />
</div>
             

            <div className="flex flex-col w-full sm:w-2/4 p-2 mt-10">
              <div className="flex flex-col p-8 rounded-xl bg-verde/80 w-full sm:w-full">
                <h1 className="text-center font-bold text-black text-xs sm:text-xl my-4">INTRODUCE DATOS DE USUARIO</h1>

                <Input2 value={formData.email} onChange={onChange} text='Correo electrónico' name='email' type='email' />
                <Input2 value={formData.password} onChange={onChange} text='Contraseña' name='password' type='password' />
                  <div className="flex flex-row"> 
                    <h1 className='text-xs sm:text-xl'>¿No tienes una cuenta?</h1>
                    <button type="button" onClick={() => navigate('/registro')}><h1 className="underline ml-1 text-xs sm:text-xl">Registrarse</h1></button>
                  </div>
                
                <div className=" flex flex-col sm:flex-row items-center justify-between p-8" >
                  <Button text='Iniciar Sesión' type="reset" onClick={onSubmit} />
                  <Button text='Borrar' type="reset" onClick={resetForm} />
                  {/* <Button text='Registro' onClick={() => navigate('/registro')} /> */}
                  {/* <Button text="Principal" onClick={() => navigate('/')} /> */}
                </div>
              </div>
            </div>

      </div>

    </main>
  )
}