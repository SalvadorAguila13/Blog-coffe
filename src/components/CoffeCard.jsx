import { useNavigate } from 'react-router-dom'
import './styles/CoffeCard.css'
const CoffeCard = ({coffe, coffeId}) => {

    const navigate = useNavigate()
    const handleClickProduct = () => {
        navigate(`/coffe/${coffeId}`)
    }

  return (
    <article className='coffeCard'>
        <div className='coffeCard__img'>
            <img src={coffe.image} alt="" />
        </div>
        <div className='coffeCard__info'>
            <h4 className='coffeCard__title'>{coffe.title}</h4>
            <p className='coffeCard__description'>{coffe.description}</p>
            <ul className='coffeCard__ingredients'>
                {
                    coffe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }
            </ul>
            <a onClick={handleClickProduct} className='btn coffeCard__btn'>More information</a>
        </div>
        
    </article>
  )
}

export default CoffeCard