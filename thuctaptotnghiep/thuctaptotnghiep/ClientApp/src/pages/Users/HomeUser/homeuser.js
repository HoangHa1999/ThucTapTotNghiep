import React, { Component } from 'react'
import Menu from '../../../components/Menu/menu'
import FooterUser from '../../../components/FooterUser/footeruser'

class homeuser extends Component {
  render() {
    return (
      <div>
          <header className="header-area">
          <Menu/>
          </header>
            <section className="welcome-area">
              <div className="single-welcome-slide bg-img bg-overlay" style={{backgroundImage: 'url(../user/img/bg-img/18.jpg)'}} data-img-url="../user/img/bg-img/18.jpg">
                <div className="welcome-content h-100">
                  <div className="container h-100">
                    <div className="row h-100 align-items-center">
                      <div className="col-12">
                        <div className="welcome-text text-center">
                          <h6 data-animation="fadeInDown" data-delay="200ms">Hotel &amp; Resort</h6>
                          <h2 data-animation="fadeInDown" data-delay="500ms">Welcome To Roberto</h2>
                          <a href="#" className="btn roberto-btn btn-2" data-animation="fadeInDown" data-delay="800ms">Discover Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          <section className="roberto-about-area section-padding-100-0">
            <div className="hotel-search-form-area">
              <div className="container-fluid">
                <div className="hotel-search-form">
                  <form action="#" method="post">
                    <div className="row justify-content-between align-items-end">
                      <div className="col-6 col-md-2 col-lg-3">
                        <label htmlFor="checkIn">Check In</label>
                        <input type="date" className="form-control" id="checkIn" name="checkin-date" />
                      </div>
                      <div className="col-6 col-md-2 col-lg-3">
                        <label htmlFor="checkOut">Check Out</label>
                        <input type="date" className="form-control" id="checkOut" name="checkout-date" />
                      </div>
                      <div className="col-4 col-md-1">
                        <label htmlFor="room">Room</label>
                        <select name="room" id="room" className="form-control">
                          <option value>01</option>
                          <option value>02</option>
                          <option value>03</option>
                          <option value>04</option>
                          <option value>05</option>
                        </select>
                      </div>
                      <div className="col-4 col-md-1">
                        <label htmlFor="adults">Adult</label>
                        <select name="adults" id="adults" className="form-control">
                          <option value>01</option>
                          <option value>02</option>
                          <option value>03</option>
                          <option value>04</option>
                          <option value>05</option>
                        </select>
                      </div>
                      <div className="col-4 col-md-2 col-lg-1">
                        <label htmlFor="children">Children</label>
                        <select name="children" id="children" className="form-control">
                          <option value>01</option>
                          <option value>02</option>
                          <option value>03</option>
                          <option value>04</option>
                          <option value>05</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-3">
                        <button type="submit" className="form-control btn roberto-btn w-100">Check Availability</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="container mt-100">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="section-heading wow fadeInUp" data-wow-delay="100ms">
                    <h6>About Us</h6>
                    <h2>Welcome to <br />Roberto Hotel Luxury</h2>
                  </div>
                  <div className="about-us-content mb-100">
                    <h5 className="wow fadeInUp" data-wow-delay="300ms">With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering for a perfect stay no matter where your destination.</h5>
                    <p className="wow fadeInUp" data-wow-delay="400ms">Manager: <span>Michen Taylor</span></p>
                    <img src="../user/img/core-img/signature.png" alt className="wow fadeInUp" data-wow-delay="500ms" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="about-us-thumbnail mb-100 wow fadeInUp" data-wow-delay="700ms">
                    <div className="row no-gutters">
                      <div className="col-6">
                        <div className="single-thumb">
                          <img src="../user/img/bg-img/13.jpg" alt />
                        </div>
                        <div className="single-thumb">
                          <img src="../user/img/bg-img/14.jpg" alt />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="single-thumb">
                          <img src="../user/img/bg-img/15.jpg" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="roberto-service-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="service-content d-flex align-items-center justify-content-between">
                    <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="100ms">
                      <img src="../user/img/core-img/icon-1.png" alt />
                      <h5>Transportion</h5>
                    </div>
                    <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="300ms">
                      <img src="../user/img/core-img/icon-2.png" alt />
                      <h5>Reiseservice</h5>
                    </div>
                    <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="500ms">
                      <img src="../user/img/core-img/icon-3.png" alt />
                      <h5>Spa Relaxtion</h5>
                    </div>
                    <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="700ms">
                      <img src="../user/img/core-img/icon-4.png" alt />
                      <h5>Restaurant</h5>
                    </div>
                    <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="900ms">
                      <img src="../user/img/core-img/icon-1.png" alt />
                      <h5>Bar &amp; Drink</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="roberto-rooms-area">
            <div className="rooms-slides owl-carousel">
              <div className="single-room-slide d-flex align-items-center">
                <div className="room-thumbnail h-100 bg-img" style={{backgroundImage: 'url(../user/img/bg-img/16.jpg)'}} />
                <div className="room-content">
                  <h2 data-animation="fadeInUp" data-delay="100ms">Premium King Room</h2>
                  <h3 data-animation="fadeInUp" data-delay="300ms">400$ <span>/ Day</span></h3>
                  <ul className="room-feature" data-animation="fadeInUp" data-delay="500ms">
                    <li><span><i className="fa fa-check" /> Size</span> <span>: 30 ft</span></li>
                    <li><span><i className="fa fa-check" /> Capacity</span> <span>: Max persion 5</span></li>
                    <li><span><i className="fa fa-check" /> Bed</span> <span>: King Beds</span></li>
                    <li><span><i className="fa fa-check" /> Services</span> <span>: Wifi, Television, Bathroom</span></li>
                  </ul>
                  <a href="#" className="btn roberto-btn mt-30" data-animation="fadeInUp" data-delay="700ms">View Details</a>
                </div>
              </div>
              <div className="single-room-slide d-flex align-items-center">
                <div className="room-thumbnail h-100 bg-img" style={{backgroundImage: 'url(../user/img/bg-img/17.jpg)'}} />
                <div className="room-content">
                  <h2 data-animation="fadeInUp" data-delay="100ms">Best King Room</h2>
                  <h3 data-animation="fadeInUp" data-delay="300ms">125$ <span>/ Day</span></h3>
                  <ul className="room-feature" data-animation="fadeInUp" data-delay="500ms">
                    <li><span><i className="fa fa-check" /> Size</span> <span>: 30 ft</span></li>
                    <li><span><i className="fa fa-check" /> Capacity</span> <span>: Max persion 5</span></li>
                    <li><span><i className="fa fa-check" /> Bed</span> <span>: King Beds</span></li>
                    <li><span><i className="fa fa-check" /> Services</span> <span>: Wifi, Television, Bathroom</span></li>
                  </ul>
                  <a href="#" className="btn roberto-btn mt-30" data-animation="fadeInUp" data-delay="700ms">View Details</a>
                </div>
              </div>
            </div>
          </section>
          <section className="roberto-project-area">
            <div className="projects-slides owl-carousel">
              <div className="single-project-slide active bg-img" style={{backgroundImage: 'url(../user/img/bg-img/5.jpg)'}}>
                <div className="project-content">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                  </div>
                </div>
                <div className="hover-effects">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                  </div>
                  <a href="#" className="btn project-btn">Discover Now <i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                </div>
              </div>
              <div className="single-project-slide bg-img" style={{backgroundImage: 'url(../user/img/bg-img/6.jpg)'}}>
                <div className="project-content">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                  </div>
                </div>
                <div className="hover-effects">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                  </div>
                  <a href="#" className="btn project-btn">Discover Now <i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                </div>
              </div>
              <div className="single-project-slide bg-img" style={{backgroundImage: 'url(../user/img/bg-img/7.jpg)'}}>
                <div className="project-content">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                  </div>
                </div>
                <div className="hover-effects">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                  </div>
                  <a href="#" className="btn project-btn">Discover Now <i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                </div>
              </div>
              <div className="single-project-slide bg-img" style={{backgroundImage: 'url(../user/img/bg-img/8.jpg)'}}>
                <div className="project-content">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                  </div>
                </div>
                <div className="hover-effects">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                  </div>
                  <a href="#" className="btn project-btn">Discover Now <i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                </div>
              </div>
              <div className="single-project-slide bg-img" style={{backgroundImage: 'url(../user/img/bg-img/9.jpg)'}}>
                <div className="project-content">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                  </div>
                </div>
                <div className="hover-effects">
                  <div className="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                  </div>
                  <a href="#" className="btn project-btn">Discover Now <i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </section>
          <section className="roberto-blog-area section-padding-100-0">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading text-center wow fadeInUp" data-wow-delay="100ms">
                    <h6>Our Blog</h6>
                    <h2>Latest News &amp; Event</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="single-post-area mb-100 wow fadeInUp" data-wow-delay="300ms">
                    <a href="#" className="post-thumbnail"><img src="../user/img/bg-img/2.jpg" alt /></a>
                    <div className="post-meta">
                      <a href="#" className="post-date">Jan 02, 2019</a>
                      <a href="#" className="post-catagory">Event</a>
                    </div>
                    <a href="#" className="post-title">Learn How To Motivate Yourself</a>
                    <p>How many free autoresponders have you tried? And how many emails did you get through using them?</p>
                    <a href="index.html" className="btn continue-btn"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="single-post-area mb-100 wow fadeInUp" data-wow-delay="500ms">
                    <a href="#" className="post-thumbnail"><img src="../user/img/bg-img/3.jpg" alt /></a>
                    <div className="post-meta">
                      <a href="#" className="post-date">Jan 02, 2019</a>
                      <a href="#" className="post-catagory">Event</a>
                    </div>
                    <a href="#" className="post-title">What If Let You Run The Hubble</a>
                    <p>My point here is that if you have no clue for the answers above you probably are not operating a followup.</p>
                    <a href="index.html" className="btn continue-btn"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="single-post-area mb-100 wow fadeInUp" data-wow-delay="700ms">
                    <a href="#" className="post-thumbnail"><img src="../user/img/bg-img/4.jpg" alt /></a>
                    <div className="post-meta">
                      <a href="#" className="post-date">Jan 02, 2019</a>
                      <a href="#" className="post-catagory">Event</a>
                    </div>
                    <a href="#" className="post-title">Six Pack Abs The Big Picture</a>
                    <p>Some good steps to take to ensure you are getting what you need out of a autoresponder include…</p>
                    <a href="index.html" className="btn continue-btn"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer-area section-padding-80-0">
          <FooterUser/>
          </footer>    
      </div>
    );
  }
}
export default homeuser