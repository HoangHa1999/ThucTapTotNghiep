import React, { Component } from 'react'
import Menu from '../../../components/Menu/menu'
import FooterUser from '../../../components/FooterUser/footeruser'
import callApi from '../../../api/callApi';
import { Link } from 'react-router-dom';

class room extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaiphong: []
        }
    }
    componentDidMount() {
        callApi('Loaiphong', 'GET', null)
            .then(res => {
                this.setState({
                    loaiphong: res.data
                });
            });
    }

    renderloaiphong = () => {
        var ngd = localStorage.getItem("user-info");
        var kh = JSON.parse(ngd);
        let loaiphong = this.state.loaiphong.map((data, index) =>
            <tr key={data.maloaiphong}>
                <div className="single-room-area d-flex align-items-center mb-100 wow fadeInUp" data-wow-delay="100ms">
                    <div className="room-thumbnail">
                        <img src="../user/img/bg-img/16.jpg" alt />
                    </div>
                    <div className="room-content">
                        <h2>{data.tenloaiphong}</h2>
                        <h4> {data.giaphong.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                        })} <span>/ Ngày</span></h4>
                        <div className="room-content">
                            {/* <h6>Size: <span>30 ft</span></h6>
                          <h6>Capacity: <span>Max persion 5</span></h6>
                          <h6>Bed: <span>King beds</span></h6>
                          <h6>Services: <span>Wifi, television ...</span></h6> */}
                            <h7> {data.chitiet}</h7><br />
                        </div>
                        {ngd ?
                            <Link to="/book" className="btn roberto-btn mt-15">Đặt Phòng</Link>
                        :
                            <Link to="/login" className="btn roberto-btn mt-15">Đặt Phòng</Link>
                        }
                        
                    </div>
                </div>
            </tr>

        );
        return loaiphong;
    }


    render() {
        
        return (
            <div>
                <header className="header-area">
                    <Menu />
                </header>
                <div>
                    <div className="breadcrumb-area bg-img bg-overlay jarallax" style={{ backgroundImage: 'url(../user/img/bg-img/16.jpg)' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="breadcrumb-content text-center">
                                        <h2 className="page-title">Our Room</h2>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb justify-content-center">
                                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Room</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="roberto-rooms-area section-padding-100-0">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading text-center wow fadeInUp" data-wow-delay="100ms">
                                    <h6>Rooms</h6>
                                    <h2>Danh Sách Phòng</h2>
                                </div>
                            </div>
                        </div><br />
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-12">
                                    {this.renderloaiphong()}
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-area section-padding-80-0">
                    <FooterUser />
                </footer>
            </div>
        )
    }
}
export default room