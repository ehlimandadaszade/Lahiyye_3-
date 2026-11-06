import React from 'react'
import './Hero.css'
import heroimg from './Image.png'

const Hero = () => {
  return (
    <>
    <div className='hero-parent'>
        <div className='hero-chaild'>
            <div className='hero-info'>
                <h1>Título de la página de inicio</h1>
                <p>Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general, motiva a la gente a seguir navegando. </p>
                <button>Botón</button>
            </div>
            <div className='hero-img'>
                <img src={heroimg} alt="heroimg" />

            </div>
        </div>
    </div>
    </>
  )
}

export default Hero