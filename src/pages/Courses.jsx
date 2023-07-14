import './styles/Courses.css'
const Courses = () => {
  return (
    <main className='courses'>
        <section className='containerGlobal'>
            <h2 className='courses__title'>Our courses and workshops</h2>
            <article className='courses__info'>
                <div className='courses__img'>
                    <img src="./img/curso1.jpg" alt="" />
                </div>
                <div className='courses__widget'>
                    <h4>Coffee extraction techniques</h4>
                    <p className='courses__dato'><span>Price: </span>Free</p>
                    <p className='courses__dato'><span>Quota: </span>20</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis perferendis beatae, vitae ad aliquam nulla eum, ea eveniet aliquid quibusdam ex, praesentium eaque et ipsum ducimus dolore placeat voluptatibus mollitia?</p>
                </div>
            </article>
            <article className='courses__info'>
                <div className='courses__img'>
                    <img src="./img/curso2.jpg" alt="" />
                </div>
                <div className='courses__widget'>
                    <h4>Four Beginner Recipes</h4>
                    <p className='courses__dato'><span>Price: </span>Free</p>
                    <p className='courses__dato'><span>Quota: </span>20</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis perferendis beatae, vitae ad aliquam nulla eum, ea eveniet aliquid quibusdam ex, praesentium eaque et ipsum ducimus dolore placeat voluptatibus mollitia?</p>
                </div>
            </article>
            <article className='courses__info'>
                <div className='courses__img'>
                    <img src="./img/curso3.jpg" alt="" />
                </div>
                <div className='courses__widget'>
                    <h4>Coffee preparation by machine</h4>
                    <p className='courses__dato'><span>Price: </span>Free</p>
                    <p className='courses__dato'><span>Quota: </span>20</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis perferendis beatae, vitae ad aliquam nulla eum, ea eveniet aliquid quibusdam ex, praesentium eaque et ipsum ducimus dolore placeat voluptatibus mollitia?</p>
                </div>
            </article>
        </section>
    </main>
  )
}

export default Courses