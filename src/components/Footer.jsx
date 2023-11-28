import React from 'react'
import Icon from '../assets/icon.png'

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-[#ff8b2b] text-primary-content">
        <aside>
            <img src={Icon} alt="Icon" width="50" height="50" className="inline-block fill-current"/>
            <p className="font-bold">
            GG <br/>Providing Gamers Throughout The World Joy
            </p> 
            <p>Copyright © 2023 - All right reserved</p>
        </aside> 
        <nav>
        </nav>
    </footer>
  )
}

export default Footer