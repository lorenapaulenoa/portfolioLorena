import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/atoms/Button/Button.component';

export const ContactUs = () => {

    const navigate = useNavigate();

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_8wku71j', 'template_vrz6xvl', form.current as HTMLFormElement, 'JJyqpc-D_YEvGexOf')
            .then((result) => {
                console.log(result.text);
                navigate('/');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-teja to-beige p-2">

        <div className="flex flex-col items-center h-screen w-screen p-4">

            <div className="w-24">
                    <Button text="Inicio" onClick={() => navigate('/')} />
            </div>
                        
            

            <form className="bg-verde shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 mt-10 w-full sm:w-2/4" ref={form} onSubmit={sendEmail}>
            <h1 className="text-center font-bold text-black text-xs sm:text-xl my-4">FORMULARIO DE CONTACTO</h1>
                <div className="mb-4">
                    <label className="block font-bold text-xs sm:text-xl text-black-600 underline mb-4 mr-4">Nombre</label>
                    <input className="shadow appearance-none border-black border-solid border-2 rounded-lg ml-3 w-full py-2 px-3 text-xs sm:text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa tu nombre" type="text" name="user_name" />
                </div>

                <div className="mb-4">
                    <label className="block font-bold text-xs sm:text-xl text-black-600 underline mb-4 mr-4">Correo electrónico</label>
                    <input className="shadow appearance-none border-black border-solid border-2 rounded-lg ml-3 w-full py-2 px-3 text-xs sm:text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa tu correo electrónico" type="email" name="user_email" />
                </div>

                <div className="mb-4">
                    <label className="block font-bold text-xs sm:text-xl text-black-600 underline mb-4 mr-4">Message</label>
                    <textarea className="shadow appearance-none border-black border-solid border-2 rounded-lg ml-3 w-full py-2 px-3 text-xs sm:text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Escribe tu mensaje aquí" name="message" />
                </div>

                <div className="flex items-center justify-between">
                    <button className="border-black rounded border-2 bg-beige hover:bg-gradient-to-r from-teja to-beige text-xs sm:text-lg text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="submit" >
                        Enviar </button>
                </div>
            </form>
        </div>
    </div>
    );
};