import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
           <p>Copyright Ⓒ <span>{year}</span></p> 
        </footer>
    )
}

export default Footer
