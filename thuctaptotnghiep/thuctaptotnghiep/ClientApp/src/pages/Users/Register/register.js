import React, { Component } from 'react'
import Menu from '../../../components/Menu/menu'
import FooterUser from '../../../components/FooterUser/footeruser'
import callApi from '../../../api/callApi';
import { Link } from 'react-router-dom'


class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            khachhang: [],
            date_ngaysinh: '',
            txt_tenKH: '',
            txt_CMND: '',
            txt_SDT: '',
            txt_Email: '',
            txt_password: '',
            txt_repassword: ''
        }
    }

    componentDidMount() {
        callApi('Khachhang', 'GET', null)
            .then(res => {
                this.setState({
                    khachhang: res.data
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


    onSave = (e) => {
        var { txt_tenKH, txt_CMND, txt_SDT, txt_Email, txt_password, txt_repassword, khachhang, date_ngaysinh } = this.state;
       
        var cmb_GT = document.getElementById('cmb_GT').value;
        var kttrung = khachhang.some(el => el.sdt === txt_SDT);
        e.preventDefault();
        if (kttrung) {
            confirm("SĐT đã tồn tại vui lòng nhập lại SĐT!!!")  //eslint-disable-line
        } else {
            if (txt_password !== txt_repassword) {
                confirm("Mật khẩu không trùng khớp vui lòng kiểm tra lại!!!")  //eslint-disable-line
            } else {
                callApi('Khachhang', 'POST', {
                    tenkh: txt_tenKH,
                    ngaysinh: date_ngaysinh,
                    cmnd: txt_CMND,
                    sdt: txt_SDT,
                    email: txt_Email,
                    gioitinh: cmb_GT,
                    username: txt_SDT,
                    password: txt_password
                }).then(res => {
                    document.getElementById('success').innerHTML = "<div class='alert alert-success'>Đăng ký thành công!!!</div>";
                });
            }
        }

    }
    render() {
        var { txt_tenKH, txt_CMND, txt_SDT, txt_Email, txt_password, txt_repassword, date_ngaysinh } = this.state;
        return (
            <div>
                <header className="header-area">
                    <Menu />
                </header>
                <div>
                    <div className="breadcrumb-area bg-img bg-overlay jarallax" style={{ backgroundImage: 'url(../user/img/bg-img/17.jpg)' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="breadcrumb-content text-center">
                                        <h2 className="page-title">Đăng Ký Tài Khoản Ở Đây Nè</h2>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb justify-content-center">
                                                <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Đăng ký</li>
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
                                        <h6>Register</h6>
                                        <h2>Đăng Ký</h2>
                                        <div id='success'></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="roberto-contact-form ">
                                        <form onSubmit={this.onSave}>
                                            <div className="row block-9 justify-content-center">
                                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                    <input
                                                        type="text"
                                                        name="txt_tenKH"
                                                        className="form-control mb-30"
                                                        placeholder="Nhập tên khách hàng"
                                                        value={txt_tenKH}
                                                        onChange={this.onChange}
                                                        required />
                                                </div>
                                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                    <input
                                                        type="text"
                                                        name="txt_CMND"
                                                        className="form-control mb-30"
                                                        placeholder="Nhập CMND"
                                                        value={txt_CMND}
                                                        onChange={this.onChange}
                                                        required />
                                                </div>

                                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                    <label htmlFor="exampleSelectGender">Ngày sinh</label>
                                                    <input
                                                        type="date"
                                                        
                                                        name="date_ngaysinh"
                                                        value={date_ngaysinh}
                                                        onChange={this.onChange}
                                                        className="form-control mb-30"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                    <label htmlFor="exampleSelectGender">Giới tính</label>
                                                    <select className="form-control"
                                                        name="cmb_GT"
                                                        id="cmb_GT"
                                                    >
                                                        <option value="1">Nam</option>
                                                        <option value="0">Nữ</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                    <br />
                                                </div>
                                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                    <input
                                                        type="email"
                                                        name="txt_Email"
                                                        className="form-control mb-30"
                                                        placeholder="Nhập Email"
                                                        value={txt_Email}
                                                        onChange={this.onChange}
                                                        required />
                                                </div>
                                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                    <label htmlFor="exampleSelectGender">*Lưu ý: Chúng tôi sẽ lấy SĐT làm Username của bạn. Bạn có thể thay đổi Username trong cập nhật thông tin!!!</label>
                                                    <input
                                                        type="number"
                                                        name="txt_SDT"
                                                        className="form-control mb-30"
                                                        placeholder="Nhập số điện thoại"
                                                        min="0"
                                                        value={txt_SDT}
                                                        onChange={this.onChange}
                                                        required />
                                                </div>
                                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                    <input
                                                        type="password"
                                                        name="txt_password"
                                                        className="form-control mb-30"
                                                        placeholder="Nhập Password"
                                                        value={txt_password}
                                                        onChange={this.onChange}
                                                        required />
                                                </div>
                                                <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                    <input
                                                        type="password"
                                                        name="txt_repassword"
                                                        className="form-control mb-30"
                                                        placeholder="Nhập lại Password"
                                                        value={txt_repassword}
                                                        onChange={this.onChange}
                                                        required />
                                                </div>

                                                <div className="col-12 text-center wow fadeInUp" data-wow-delay="100ms">
                                                    <button type="submit" className="btn roberto-btn mt-15">Đăng Ký ngay</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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
export default register