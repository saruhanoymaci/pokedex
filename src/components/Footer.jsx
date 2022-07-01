import React from 'react'
import "../scss/Footer.scss"
import { useState } from 'react'


function Footer() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="footer footer-expand-lg footer-dark footer-bg">
            <div className="container d-flex justify-content-between"><div className="footer-brand">
                <i className="fa-solid fa-angles-up fa-lg"
                    onClick={scrollToTop}
                    style={{ display: visible ? 'block' : 'none' }} ></i>
            </div>
            </div>
        </div>
    )
}

export default Footer