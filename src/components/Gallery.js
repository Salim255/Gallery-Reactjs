import React from 'react'
import hero from '../img/hero.jpg'

const Gallery = () => {
  return (
    <section className='gallery'> 
       <figure className='gallery__item--1'>
          <img src={hero} alt='' className='gallery__img'/>
        </figure>
        <figure className='gallery__item--2'>
          <img src={hero} alt='' className='gallery__img'/>
        </figure>
        <figure className='gallery__item--3'>
          <img src={hero} alt='' className='gallery__img'/>
        </figure>
        <figure className='gallery__item--4'>
          <img src={hero} alt='' className='gallery__img'/>
        </figure> 
    </section>
  )
}

export default Gallery