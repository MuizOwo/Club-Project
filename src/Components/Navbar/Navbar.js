import React, { Component } from 'react'
import './Navbar.css'
import blue from '@material-ui/core/colors/blue'

const  background = blue[500]

export class Navbar extends Component {
     render() {
          return (
               <div className='navbar' style={{backgroundColor:(background)}}>
                    <div className='navbar-logo'>
                    <i class="fas fa-futbol "></i>
                    </div>
                    <div className='navbar-text'>
                    <a href='https://github.com/MuizOwo'  target='_blank'><i class="fab fa-github "></i></a>
                    </div>
               </div>
          )
     }
}

export default Navbar
