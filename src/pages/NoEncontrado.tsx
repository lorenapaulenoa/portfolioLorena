
import { useNavigate } from 'react-router-dom';
import notFound from '../assets/imagenes/404.jpg';
import { Button } from '../components/atoms/Button/Button.component';

export const NoEncontrado = () => {
  const navigate = useNavigate();
  return (
    <div>
    <Button text="Principal" onClick={() => navigate('/')} />
    <img src={notFound} className='h-3/6'/>
    </div>
  )
}
