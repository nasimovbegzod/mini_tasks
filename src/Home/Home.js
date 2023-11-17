import './Home.scss'
import Slider from '../Components/Slider'
import Main from '../Components/Main'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <>
      <div className="title container">
        <Header />
        <Slider />
        <h1>Hafta Aksiyalari</h1>
        <Main />
        <Footer/>
      </div>
    </>

  )
}

export default Home