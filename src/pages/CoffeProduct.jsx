import './styles/CoffeProduct.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CoffeProduct = () => {

  const [coffes, setCoffes] = useState([])
  
  const {id} = useParams()
  
  const idCoffe = Number(id) - 1

  useEffect(() => {
    const URL = 'https://api.sampleapis.com/coffee/hot'
      axios.get(URL)
        .then(res => setCoffes(res.data))
        .catch(err => console.log(err))
  }, [])

  return (
    <main className="productCoffe">
      <section className="containerGlobal">
        <h2 className="productCoffe__title">{coffes[idCoffe]?.title}</h2>
        <article className="productCoffe__info">
          <div className="productCoffe__img">
            <img src={coffes[idCoffe]?.image} alt="" />
          </div>
          <div className="productCoffe__text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas aperiam vero tempore porro assumenda enim blanditiis. Itaque harum incidunt obcaecati? Sint nam ducimus, doloribus odio soluta rem dicta mollitia officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit quis aliquam ex, aspernatur debitis earum officia pariatur mollitia tempora reiciendis voluptatem doloremque minima ab! Nesciunt fugit illum consequatur consectetur.</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default CoffeProduct