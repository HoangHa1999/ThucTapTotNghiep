import React, { Component } from 'react'

class footeruser extends Component {
  render() {
      return (
          <div>
            <div>
            <div className="main-footer-area">
                <div className="container">
                <div className="row align-items-baseline justify-content-between">
                    <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-footer-widget mb-80">
                        <a href="#" className="footer-logo"><img src="../user/img/core-img/logo2.png" alt /></a>
                        <h4>+12 345-678-9999</h4>
                        <span>Info.colorlib@gmail.com</span>
                        <span>856 Cordia Extension Apt. 356, Lake Deangeloburgh, South Africa</span>
                    </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-footer-widget mb-80">
                        <h5 className="widget-title">Our Blog</h5>
                        <div className="latest-blog-area">
                        <a href="#" className="post-title">Freelance Design Tricks How</a>
                        <span className="post-date"><i className="fa fa-clock-o" aria-hidden="true" /> Jan 02, 2019</span>
                        </div>
                        <div className="latest-blog-area">
                        <a href="#" className="post-title">Free Advertising For Your Online</a>
                        <span className="post-date"><i className="fa fa-clock-o" aria-hidden="true" /> Jan 02, 2019</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-2">
                    <div className="single-footer-widget mb-80">
                        <h5 className="widget-title">Links</h5>
                        <ul className="footer-nav">
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" /> About Us</a></li>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" /> Our Room</a></li>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" /> Career</a></li>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true" /> FAQs</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-12 col-sm-8 col-lg-4">
                    <div className="single-footer-widget mb-80">
                        <h5 className="widget-title">Subscribe Newsletter</h5>
                        <span>Subscribe our newsletter gor get notification about new updates.</span>
                        <form action="index.html" className="nl-form">
                        <input type="email" className="form-control" placeholder="Enter your email..." />
                        <button type="submit"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="copywrite-content">
                <div className="row align-items-center">
                    <div className="col-12 col-md-8">
                    <div className="copywrite-text">
                        <p>Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="social-info">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
          </div>
      );
  }
}
export default footeruser

