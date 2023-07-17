import { Button } from "../components/atoms/Button/Button.component";
import { Input } from "../components/atoms/Input/Input.component";
import { useForm } from "../hooks/useForm.hooks";


interface FormI {
  name?: string,
  surname: string,
  email: string,
  password1: string,
  password2: string,

}

export const Registro = () => {

  const initialFormState: FormI = {
    name: '',
    surname: '',
    email: '',
    password1: '',
    password2: '',

  }

  const {formData, onChange, resetForm} = useForm<FormI>(initialFormState);

  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-col w-2/4 ">
        <div className="flex flex-col p-5 rounded bg-sky-200 w-4/6 sm:w-full">
          <h1 className="text-center font-bold text-black text-2x1">Formulario de Registro</h1>
          <Input text='Nombre' name='name' type='text' value={formData.name} onChange={onChange} />
          <Input text='Apellidos' name= 'surname' type='text' value={formData.surname} onChange={onChange} />
          <Input text='Correo electrónico' name= 'email' type='email' value={formData.email} onChange={onChange} />
          <Input text='Contraseña' name= 'password1' type='password' value={formData.password1} onChange={onChange} />
          <Input text='Repetir contraseña' name= 'password2' type='password' value={formData.password2} onChange={onChange} />
          <div className=" flex flex-row mx-8 items-center justify-center" >
            <Button text='Registrarse' type="submit" color='orange'  />
            <Button text='Borrar' type="reset" color='white' onClick={resetForm}/>
          </div>
        </div>
      </div>
    </main>
  )
}



