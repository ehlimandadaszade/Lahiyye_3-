import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <div className='header-parent'>
      <div className='header-chaild'>
        <div className='header-logo'>
          <p>Nombre del sitio</p>
        </div>
        <div className='header-menyu'>
          <ul>
            <li>Página</li>
            <li>Página</li>
            <li>Página</li>
            <li className='botton'>Botón</li>
          </ul>
        </div>
      </div>  
    </div>

    </>
  )
}

export default Header