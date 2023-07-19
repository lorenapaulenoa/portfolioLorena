import { Button } from "../components/atoms/Button/Button.component";
import { Input2 } from "../components/atoms/Input/Input2.component";
import { useForm } from "../hooks/useForm.hooks";
import { useNavigate } from 'react-router-dom';
import { User } from "./Login";
import { FormEvent, useContext } from 'react';



interface RegisterData {
  name?: string,
  email: string,
  password: string,
  role: string,

}

const initialRegisterData: RegisterData = { name: '', email: '', password: '', role: 'ADMIN_ROLE' };

export const Registro = () => {


  const { formData, onChange, resetForm } = useForm<RegisterData>(initialRegisterData);

  const navigate = useNavigate();

  const onSubmit = async (e?: FormEvent) => {

    e?.preventDefault();

    try {
      const resp = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/users/',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(formData)
        });
      const data: User = await resp.json()
      if (!!data?.uid) {     // dos !! es para confirmar algo
        navigate('/login');
      }
    } catch (e) {
    }
  }


  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-col w-2/4 ">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col p-5 rounded bg-teal-600 w-4/6 sm:w-full">
            <h1 className="text-center font-bold text-black text-2x1">Formulario de Registro</h1>
            <Input2 text='Nombre' name='name' type='text' value={formData.name} onChange={onChange} />

            <Input2 text='Correo electrónico' name='email' type='email' value={formData.email} onChange={onChange} />
            <Input2 text='Contraseña' name='password' type='password' value={formData.password} onChange={onChange} />

            <div className=" flex flex-row mx-8 items-center justify-center" >
              <Button text='Registrarse' type="submit" />
              <Button text='Borrar' type="reset" onClick={resetForm} />
              <Button text='Login' onClick={() => navigate('/login')} />
              <Button text="Principal" onClick={() => navigate('/')} />
            </div>
          </div>
        </form>

      </div>
    </main>
  )
}



