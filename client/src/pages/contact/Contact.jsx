import './contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-wrapper">
                <h1>Have Question?</h1>
                <div className='form-wrapper'>
                    <form>
                        <div className='form-item'>
                            <label htmlFor="name">Name: </label>
                            <input type="text" className='form-input' placeholder='Enter Your Name...' required/>
                        </div>
                        <div className='form-item'>
                            <label htmlFor="email">Email: </label>
                            <input type="email" className='form-input' placeholder='Enter Your Email...' required/>
                        </div>
                        <div className='form-item'>
                            <label htmlFor="query">Query: </label>
                            <textarea cols="30" rows="4" className='form-textarea' placeholder='Enter Your Query...' required></textarea>
                        </div>
                        <div className='form-item'>
                            <button type='submit' className='form-btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact