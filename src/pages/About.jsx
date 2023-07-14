import './styles/About.css'
const About = () => {
  return (
    <main className='about'>
      <section className='containerGlobal'>
        <h2 className='about__title'>About Us</h2>
        <section className='about__info'>
          <div className='about__img'>
            <img src="./img/nosotros.jpg" alt="nosotros" />
          </div>
          <div className='about__text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, impedit voluptatem molestias, voluptatum minus repudiandae, quisquam adipisci quo dolore debitis officia eius delectus itaque assumenda blanditiis deleniti? Ipsa, voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequuntur eum placeat adipisci minima earum voluptate accusamus ipsam blanditiis vitae iusto facere nisi illo perspiciatis, commodi magnam ex enim ducimus?</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default About
