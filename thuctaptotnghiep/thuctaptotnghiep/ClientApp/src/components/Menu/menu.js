import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        var ngd = localStorage.getItem("user-info");
        var kh = JSON.parse(ngd);

        this.logOut = () => {
            localStorage.clear();
        }
    return (
      <div>
          <div>
            <div className="top-header-area">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="top-header-content">
                      <a href="#"><i className="icon_phone" /> <span>(123) 456-789-1230</span></a>
                      <a href="#"><i className="icon_mail" /> <span>info.colorlib@gmail.com</span></a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="top-header-content">
                      <div className="top-social-area ml-auto">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-tripadvisor" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-header-area">
              <div className="classy-nav-container breakpoint-off">
                <div className="container">
                  <nav className="classy-navbar justify-content-between" id="robertoNav">
                    <Link className="nav-brand" to="/"><img src="../user/img/core-img/logo.png" alt /></Link>
                    <div className="classy-navbar-toggler">
                      <span className="navbarToggler"><span /><span /><span /></span>
                    </div>
                    <div className="classy-menu">
                      <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                      </div>
                      <div className="classynav">
                        <ul id="nav">
                          <li className="active"><Link to="/">Home</Link></li>
                          <li><Link to="/room">Rooms</Link></li>
                          <li><Link to="/">About Us</Link></li>
                                            <li><Link to="/">Contact</Link></li>
                                          
                                            
                                            {ngd ?
                                                <li className="cn-dropdown-item has-down"><Link to="/update" >Xin chào <strong>{kh.tenkh}</strong> </Link>
                                                    <li className="dropdown"><a href="/" onClick={this.logOut}>Logout</a></li>
                                                </li>
                                                :
                                                <li><Link to="/login">Login</Link></li>
                                            }
                        </ul>
                                        <div className="book-now-btn ml-3 ml-lg-5">
                                            {ngd ?
                                                <Link to="/book">Book Now <i className="fa fa-long-arrow-right" aria-hidden="true" /></Link>
                                                :
                                                <Link to="/login">Book Now <i className="fa fa-long-arrow-right" aria-hidden="true" /></Link>
                                            }
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Menu