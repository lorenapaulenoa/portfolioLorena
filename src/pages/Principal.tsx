import { useNavigate } from 'react-router-dom';

import curriculum from '../assets/CV.pdf';
import PDF from '../assets/imagenes/PDF.png'
import linkedin from '../assets/imagenes/linkedin.png'
import github from '../assets/imagenes/github.png'

import { Button } from '../components/atoms/Button/Button.component';

import { CardPeque2 } from '../components/atoms/Cards/CardPeque2';


export const Principal = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-verde/50  h-screen w-screen flex justify-center p-2'>
      <div className='grid grid-cols-2 gap-2 bg-transparent w-5/6 h-[95%] sm:max-w-5xl'>

          <div className='bg-beige grid place-content-center rounded-xl'>
            <p className='text-center font-bold text-xs sm:text-xl m-4'>Enviar mensaje</p>
            {/* <p className='text-xs sm:text-xl text-center'>email: </p> */}
            {/* <p className='text-xs sm:text-xl'>lorena.paule.sanchez@gmail.com</p> */}
            <div className='grid place-content-center'>
              {/* <p className='datosContacto'><a href="mailto:lorena.paule.sanchez@gmail.com" target='_blank'><img className='w-5' src={email} /></a></p> */}
              <Button text='Contacto' onClick={() => navigate('/contact')} />
            </div>
          </div>

          <div className='bg-verde grid place-content-center rounded-xl'>
              <p className='text-center font-bold text-xs sm:text-xl'>Lorena Paule Sánchez</p>
          
            <div className='flex flex-row mt-4 justify-between'>
                <p className='logosEnlaces'><a href={curriculum} target='_blank' ><img className='w-5 sm:w-10' src={PDF} /></a></p>
                <p className='logosEnlaces'><a href='https://www.linkedin.com/in/lorena-paule-sánchez-67a259231' target='_blank'><img className='w-5 sm:w-10' src={linkedin} /></a></p>
                <p className='logosEnlaces'><a href='https://github.com/lorenapaulenoa' target='_blank'><img className='w-5 sm:w-10' src={github} /></a></p>
              
                
            </div>
          </div>

          <div className='bg-teja grid place-content-center p-2 rounded-xl'>
              <p className='text-center font-bold text-xs sm:text-xl'>SKILLS</p>
              <p className='text-xs sm:text-xl text-justify m-2 font-bold'> Aprendiendo ...</p>
              <p className='text-xs sm:text-xl text-justify m-2'>Lenguajes de programación:</p>
              <p className='text-xs sm:text-xl text-justify m-2 indent-4'>HTML, CSS, JavaScript, Java, SQL </p>
              <p className='text-xs sm:text-xl text-justify m-2'>Frameworks y librerías:</p>
              <p className='text-xs sm:text-xl text-justify m-2 indent-4'>React, Tailwind, Bootstrap</p>
              <p className='text-xs sm:text-xl text-justify m-2'>Software y herramientas:</p>
              <p className='text-xs sm:text-xl text-justify m-2 indent-4'>Visual Studio Code, Eclipse, Netbeans</p>
          </div>

          <div className='bg-beige grid place-content-center p-4 rounded-xl'>
              <p className='text-center font-bold text-xs sm:text-xl mb-3'>ABOUT ME</p>
              <p className='text-justify text-xs sm:text-xl m-4'>Soy una persona organizada, dinámica,
                comprometida, con espíritu de superación y
                siempre dispuesta a aprender, apasionada de la informática y de la magia de la programación.
              </p>
          </div>

          <div className='bg-verde grid place-content-center rounded-xl'>
              <Button text='Registro' onClick={() => navigate('/registro')} />
              <Button text='Login' onClick={() => navigate('/login')} />
              <Button text='Tiempo' onClick={() => navigate('/tiempo')} />
          </div>

          <div className='bg-teja grid place-content-center gap-1 p-1 rounded-xl'>
              <p className='text-center font-bold text-xs sm:text-xl mb-4'> PROYECTOS</p>
              <CardPeque2 text='Proyecto1 - SQL' url='https://github.com/lorenapaulenoa/SQL' img={github} />
              <CardPeque2 text='Proyecto2 - JAVA' url='https://github.com/lorenapaulenoa/JAVA' img={github} />
              <CardPeque2 text='Proyecto3 - JAVASCRIPT' url='https://github.com/lorenapaulenoa/JAVASCRIPT' img={github} />
              <CardPeque2 text='Proyecto4 - REACT' url='https://github.com/lorenapaulenoa/portfolioLorena' img={github} />
          </div>

      </div>
    </div>
  )
}



