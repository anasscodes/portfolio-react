import './Contact.css'



const Contact = () => {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact Us
      </h1>

      <p className='sub-title'>Contact us for more information and get notified when i publish something new </p>
    

      <div className="flex">

        <form >
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name='' id='email' />
          </div>

          <div className='flex' style={{marginTop: "24px"}}>
            <label htmlFor="message">Your Message</label>
            <textarea required name="" id="message"></textarea>
          </div>

          <button className='submit'>Submit</button>
        </form>

        <div className="animation"></div>

      </div>



    </section>
  )
}

export default Contact