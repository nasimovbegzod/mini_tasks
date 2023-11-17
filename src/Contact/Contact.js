import React from 'react'
import Header from '../layout/Header'
import './Contact.scss'
const Contact = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="contact">
          <form>
            <div class="input-group">
              <input id="number" type="number" class="form-control" name="number" placeholder="Number" />
            </div>
            <div class="input-group">
              <input id="password" type="password" class="form-control" name="password" placeholder="Password" />
            </div>
          </form>
          <button>Kodni olish</button>
        </div>
      </div>
    </>
  )
}

export default Contact


