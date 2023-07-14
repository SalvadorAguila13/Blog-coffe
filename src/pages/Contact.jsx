import './styles/Contact.css'
const Contact = () => {
  return (
    <main className='contact'>
      <section className='containerGlobal'>
        <h2 className='contact__title'>Contact us</h2>
        <section className='contact__container'>
          <fieldset className='fieldset'>
            <legend>Fill in the fields</legend>
            <form className='contact__form'>
              <div className='contact__input'>
                <label>FullName: </label>
                <input type="text" />
              </div>
              <div className='contact__input'>
                <label>Number phone: </label>
                <input type="tel" />
              </div>
              <div className='contact__input'>
                <label>Email: </label>
                <input type="email" />
              </div>
              <div className='contact__input'>
                <label>Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button className='btn btn__sidebar'>Enviar</button>
            </form>
          </fieldset>
        </section>
      </section>
    </main>
  )
}

export default Contact