import React, { Component } from 'react'
import Menu from '../../../components/Menu/menu'
import FooterUser from '../../../components/FooterUser/footeruser'
import callApi from '../../../api/callApi';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            random: 0,
            checkInDate: '',
            checkOutDate: '',
            loaiphong: []
        }
    }
    componentDidMount() {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        this.setState({ random: parseInt(this.state.random + rand) });

        callApi('Loaiphong', 'GET', null)
            .then(res => {
                this.setState({
                    loaiphong: res.data
                });
            });
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }


    renderloaiphong = () => {
        let loaiphong = this.state.loaiphong.map((data, index) =>
            <option value={data.maloaiphong}>{data.tenloaiphong} - {data.giaphong.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
            })}/Ngày</option>
        );
        return loaiphong;
    }

    onSave = (e) => {
        var { checkInDate, checkOutDate, random } = this.state;
        var cmb_LP = document.getElementById('cmb_LP').value;
        var ngd = localStorage.getItem("user-info");
        var kh = JSON.parse(ngd);
        
        e.preventDefault();
        
        callApi('PDP', 'POST', {
            maphieudatphong: `PDP${random}`,
            makh: kh.makh,
            ngayden: checkInDate,
            ngaydi: checkOutDate,
        }).then(res => {
            callApi('Thuephong', 'POST', {
                maphieudatphong: `PDP${random}`,
                maloaiphong: cmb_LP
            }).then(res => {
                document.getElementById('success').innerHTML = "<div class='alert alert-success'>Đặt phòng thành công!!!</div>";
            });
                });
          

    }

    render() {
        var { checkInDate, checkOutDate } = this.state;
    return (
      <div>
        <Menu/>
            <div className="breadcrumb-area bg-img bg-overlay jarallax" style={{ backgroundImage: 'url(../user/img/bg-img/17.jpg)' }}>
            <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                <div className="breadcrumb-content text-center">
                    <h2 className="page-title">Đặt Phòng Ở Đây Nè</h2>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Đặt Phòng</li>
                    </ol>
                    </nav>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="roberto-contact-form-area section-padding-100">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="section-heading text-center wow fadeInUp" data-wow-delay="100ms">
                    <h6>Book room</h6>
                                <h2>Đặt Phòng</h2>
                                <div id='success'></div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="roberto-contact-form ">
                                <form onSubmit={this.onSave}>
                    <div className="row block-6 justify-content-center hotel-reservation--area">
                        
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        <label htmlFor="checkIn">Loại Phòng</label>
                                            <select className="form-control"
                                                id="cmb_LP"
                                                name="cmb_LP"
                                            >
                                                {this.renderloaiphong()}
                                            </select>
                                            
                        </div>
                        
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        <label htmlFor="checkIn">Ngày Nhận Phòng</label>
                                            <input type="date" className="input-small form-control mb-30" name="checkInDate" value={checkInDate}
                                                onChange={this.onChange}
                                                required/>
                        </div><br />
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        <label htmlFor="checkOut">Ngày Trả Phòng</label>
                                            <input type="date" className="input-small form-control mb-30" name="checkOutDate" value={checkOutDate}
                                                onChange={this.onChange}
                                                required/>
                        </div><br />
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        <label htmlFor="checkIn">Số người tối đa</label>
                        <input type="text" className="form-control mb-30" readOnly="true" placeholder={2} />
                        </div>
                        
                        <label className="col-lg-12 wow fadeInUp"><a style={{color: 'teal'}}>Khách hàng nhận phòng trực tiếp tại khách sạn!</a></label>
                        <div className="col-lg-3 wow fadeInUp form-group">
                        <button type="submit" className="btn roberto-btn w-100">Đặt Phòng Ngay</button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        <FooterUser/>
      </div>
    )
  }
}
export default Book