import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CoffeCard from '../components/CoffeCard'
import PaginationBlog from '../components/PaginationBlog'
import usePagination from '../hooks/usePagination'
import './styles/Home.css'
const Home = () => {
  const [coffes, setCoffes] = useState([])

  const {pagination, numbersPage, setPage, CONTENT_PER_PAGE} = usePagination(coffes)

  useEffect(() => {
    const URL = 'https://api.sampleapis.com/coffee/hot'
      axios.get(URL)
        .then(res => setCoffes(res.data))
        .catch(err => console.log(err))
  }, [])
  

  return (
    <section className='containerGlobal containerPrincipal'>
      <section className='pagination__blog'>
        <PaginationBlog numbersPage={numbersPage} setPage={setPage} CONTENT_PER_PAGE={CONTENT_PER_PAGE}/>
      </section>
      <main className='blog'>
        <h3 className='blog__title'>Our products</h3>
        <section className='coffeProducts'>
          {
            pagination().map(coffe => <CoffeCard key={coffe.id} coffeId={coffe.id} coffe={coffe}/>)
          }
        </section>
      </main>


      <aside className='sidebar'>
        <h3 className='blog__title'>Our courses and workshops</h3>
        <ul className='courses'>
          <li className='course__widget'>
            <h4>Coffee extraction techniques</h4>
            <p className='widget__dato'><span>Price: </span>Free</p>
            <p className='widget__dato'><span>Quota: </span>20</p>
            <Link to='/courses' className='btn btn__sidebar'>More information</Link>  
          </li>
          <li className='course__widget'>
            <h4>Four Beginner Recipes</h4>
            <p className='widget__dato'><span>Price: </span>Free</p>
            <p className='widget__dato'><span>Quota: </span>20</p>
            <Link to='/courses' className='btn btn__sidebar'>More information</Link>  
          </li>
          <li className='course__widget'>
            <h4>Coffee preparation by machine</h4>
            <p className='widget__dato'><span>Price: </span>Free</p>
            <p className='widget__dato'><span>Quota: </span>20</p>
            <Link to='/courses' className='btn btn__sidebar'>More information</Link>  
          </li>
        </ul>
      </aside>
      <section className='pagination__blog'>
        <PaginationBlog numbersPage={numbersPage} setPage={setPage} CONTENT_PER_PAGE={CONTENT_PER_PAGE}/>
      </section>
    </section>
  )
}

export default Home