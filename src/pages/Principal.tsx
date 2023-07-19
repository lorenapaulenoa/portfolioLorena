import { useNavigate } from 'react-router-dom';

import curriculum from '../assets/CV.pdf';
import PDF from '../assets/imagenes/PDF.png'
import linkedin from '../assets/imagenes/linkedin.png'
import github from '../assets/imagenes/github.png'
import email from '../assets/imagenes/email.png'
import { Button } from '../components/atoms/Button/Button.component';
import foto from '../assets/imagenes/avatar.png'
import { CardPeque2 } from '../components/atoms/Cards/CardPeque2';


export const Principal = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='contenedor'>
        <div className='uno'>
          <p className='titulo'>CONTACTO</p>
          <p className='datosContacto'>email: </p>
          <p className='email'>lorena.paule.sanchez@gmail.com</p>
          <p className='datosContacto'><a href="lorena.paule.sanchez@gmail.com" target='_blank'><img className='logoEmail' src={email} /></a></p>
        </div>
        <div className='dos'>
          <p className='tituloGrande'>Lorena Paule Sánchez</p>
          <div className='botonesYfoto'>
            <div className='enlaces'>
              <p className='logosEnlaces'><a href={curriculum} target='_blank' ><img src={PDF} /></a></p>
              <p className='logosEnlaces'><a href='https://www.linkedin.com/in/lorena-paule-sanchez-bb465b260' target='_blank'><img src={linkedin} /></a></p>
              <p className='logosEnlaces'><a href='https://github.com/lorenapaulenoa' target='_blank'><img src={github} /></a></p>
            </div>
            <div> <img className='foto' src={foto}></img></div>
          </div>
        </div>
        <div className='tres'>
          <p className='titulo'> PROYECTOS BACKEND</p>
          <CardPeque2 text='Proyecto1 - SQL' url='https://github.com/lorenapaulenoa' img={github} />
          <CardPeque2 text='Proyecto2 - JAVA' url='https://github.com/lorenapaulenoa' img={github} />
        </div>
        <div className='cuatro'>
          <p className='titulo'>SKILLS</p>
          <p className='skills'>Lenguajes de programación:</p>
          <p>HTML, CSS, JavaScript, Java, SQL </p>
          <p className='skills'>Frameworks y librerías:</p>
          <p>React, Tailwind, Bootstrap</p>
          <p className='skills'>Software y herramientas:</p>
          <p>Visual Studio Code, Eclipse, Netbeans</p>

        </div>
        <div className='cinco'>
          <p className='titulo'>ABOUT ME</p>
          <p className='descripcion'>Soy una persona organizada, dinámica,
            comprometida, con espíritu de superación y
            siempre dispuesta a aprender, apasionada de la informática y de la magia de la programación.
          </p>
        </div>
        <div className='seis'>
          <Button text='Registro' onClick={() => navigate('/registro')} />
          <Button text='Login' onClick={() => navigate('/login')} />
          <Button text='Tiempo' onClick={() => navigate('/tiempo')} />
        </div>
        <div className='siete'>
          <p className='titulo'> PROYECTOS FRONTEND</p>
          <CardPeque2 text='Proyecto3 - JAVASCRIPT' url='https://github.com/lorenapaulenoa' img={github} />
          <CardPeque2 text='Proyecto4 - REACT' url='https://github.com/lorenapaulenoa' img={github} />
        </div>
      </div>
    </>
  )
}



