import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation, Thumbs } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import { url } from '../Components/useFetchData'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import './SinglePage.scss'

const SinglePage = () => {
  const { id } = useParams()
  const [ productData, setproductData ] = useState( {} )
  useEffect( () => {
    const getdata = async () => {
      const res = await fetch( url + 'products/' + id );
      const data = await res.json();
      setproductData( data )
      console.log( data );
    };
    getdata();
  }, [id] )

   const [thumbactive, setthumbactive] = useState()
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className='SinglePgaeleft'>
           <Swiper
           loop={true}
           spaceBetween={10}
           navigation={true}
           modules={[Navigation, Thumbs]}
           grabCursor={true}
              thumbs={{ swiper: thumbactive }}
           className='ProductImageSlider'
           >
                <SwiperSlide className='SwiperImg'>
                  <img src={productData.image} alt="" />
                </SwiperSlide>
              <SwiperSlide className='SwiperImg'>
                <img src={productData.image} alt="" />
              </SwiperSlide>
              <SwiperSlide className='SwiperImg'>
                <img src={productData.image} alt="" />
              </SwiperSlide>
              <SwiperSlide className='SwiperImg'>
                <img src={productData.image} alt="" />
              </SwiperSlide>
              <SwiperSlide className='SwiperImg'>
                <img src={productData.image} alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setthumbactive}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              modules={[ Navigation, Thumbs ]}
              className='Product-Image-Slider-thumbs'
            >
              <SwiperSlide className='SwiperImg'>
                <div className="Product-Image-Slider-thumbs-wrapper">
                  <img src={productData.image} alt="" />                </div>
              </SwiperSlide>
              <SwiperSlide className='SwiperImg'>
                 <div className="Product-Image-Slider-thumbs-wrapper">
                  <img src={productData.image} alt="" />                </div>
              </SwiperSlide>
              <SwiperSlide className='SwiperImg'>
                 <div className="Product-Image-Slider-thumbs-wrapper">
                  <img src={productData.image} alt="" />                </div>
              </SwiperSlide>
              <SwiperSlide className='SwiperImg'>
                 <div className="Product-Image-Slider-thumbs-wrapper">
                  <img src={productData.image} alt="" />                </div>
              </SwiperSlide>
              <SwiperSlide className='SwiperImg'>
                 <div className="Product-Image-Slider-thumbs-wrapper">
                  <img src={productData.image} alt="" />                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='SinglePgaeRight'>
            <h1>{productData.title}</h1>
            <p>Kiyim O'lchami:</p>
            <div className='kg'>
              <h3>XXL</h3>
              <h3>4XL</h3>
              <h3>5XL</h3>
            </div>
            <span className='adition'><button>-</button><p>{productData.price}</p><button>+</button></span>
            <p>Narx:</p>
            <h3>{productData.price
            }</h3>
          </div>
        </div>
        <Footer/>
      </div>
    </>

  )
}

export default SinglePage