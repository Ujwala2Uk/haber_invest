import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div >
        <nav className="navbar navbar-expand bg-secondary navbar-dark " >
            <ul className="navbar-nav" style={{paddingLeft:200}}>
                <li className="nav-item">
                    <div>
                    <Link className="nav-link" to="home"><img src="https://i.ytimg.com/vi/6jAEQrY5Yds/maxresdefault.jpg" style={{height:30,width:50,padding:'none'}}></img></Link>
                    </div>
                </li>
                <li className="nav-item" style={{marginLeft:100}}>
                    <Link className="nav-link" to="home">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home">ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home">SERVICES</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home">PROJECT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home">OUR BLOG</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home">CONTACT US</Link>
                </li>
                <li>
                <div className='row' style={{marginLeft:100}}>
                        <p>
                            <i style={{ color: 'rgb(90, 87, 87)', padding: 5, float: 'left' }} class="fa-brands fa-square-twitter fa-2x"></i>
                            <i style={{ color: 'rgb(90, 87, 87)', padding: 5, float: 'left' }} class="fa-brands fa-square-youtube fa-2x"></i>
                            <i style={{ color: 'rgb(90, 87, 87)', padding: 5, float: 'left' }} class="fa-solid fa-wifi fa-2x"></i>
                            <i style={{ color: 'rgb(90, 87, 87)', padding: 5, float: 'left' }} class="fa-brands fa-square-facebook fa-2x"></i>
                            <i style={{ color: 'rgb(90, 87, 87)', padding: 5, float: 'left' }} class="fa-brands fa-square-google-plus fa-2x"></i>
                        </p>
                    </div>
                </li>
            </ul>
        </nav>
        </div>
    )
}