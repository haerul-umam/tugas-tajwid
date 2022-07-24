import { useNavigate } from 'react-router-dom'
import './Card.css'

function CardTajwid({title, subtitle, idPage}) {
  const navigate = useNavigate()

  const gotoDetail = ()=> navigate('/detail/'+idPage)
  
  return (
    <div className='card'>
        <div className='card-header'>
          <p className='arabic title'>{title}</p>
        </div>
        <div className='card-footer' onClick={gotoDetail}> 
          <p className='subtitle'>{subtitle}</p>
          <span className="material-symbols-outlined icon subtitle">
          chevron_right
          </span>
        </div>
    </div>
  )
}

export default CardTajwid