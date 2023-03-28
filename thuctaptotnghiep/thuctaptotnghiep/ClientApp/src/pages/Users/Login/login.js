import React, { Component } from 'react'
import Menu from '../../../components/Menu/menu'
import FooterUser from '../../../components/FooterUser/footeruser'
import callApi from '../../../api/callApi';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            khachhang: [],
            
            txt_username: '',
            txt_password: '',
          
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
        var { txt_username, txt_password, khachhang } = this.state;

        var kttrung = khachhang.some(el => el.username === txt_username && el.password === txt_password);
        e.preventDefault();
        if (kttrung) {
            var ngd = khachhang.find((kh) => {
                return kh.username === txt_username;
            });
            localStorage.setItem("user-info", JSON.stringify(ngd));
            this.props.navigate('/');
        } else {
                confirm("Tài khoản hoặc mật khẩu không trùng khớp vui lòng kiểm tra lại!!!")  //eslint-disable-line
        }

    }
    render() {
        var {txt_username, txt_password} = this.state;
    return (
      <div>
        <header className="header-area">
        <Menu/>
        </header>
          <div>
            <div className="breadcrumb-area bg-img bg-overlay jarallax" style={{backgroundImage: 'url(../user/img/bg-img/17.jpg)'}}>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12">
                    <div className="breadcrumb-content text-center">
                      <h2 className="page-title">Đăng Nhập Ở Đây Nè</h2>
                      <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Đăng nhập</li>
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
                      <h6>Login</h6>
                      <h2>Đăng Nhập</h2>
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
                                                    name="txt_username"
                                                    className="form-control mb-30"
                                                    placeholder="Nhập Username"
                                                    value={txt_username}
                                                    onChange={this.onChange}
                                                    required                                                />
                                            </div>
                                            <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
                                                <input
                                                    type="password"
                                                    name="txt_password"
                                                    className="form-control mb-30"
                                                    placeholder="Nhập Password"
                                                    value={txt_password}
                                                    onChange={this.onChange}
                                                    required                                                />
                                            </div>
                                            <label htmlFor="#">Bạn chưa có tài khoản sao? <Link to="/register" style={{ color: 'teal' }}>Đăng kí tài khoản mới ở đây!</Link></label>
                          <div className="col-12 text-center wow fadeInUp" data-wow-delay="100ms">
                            <button type="submit" className="btn roberto-btn mt-15">Đăng nhập ngay</button>
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
        <FooterUser/>
        </footer> 
      </div>
    )
  }
}
export default (props) => (
    <Login
        {...props}
      
        navigate={useNavigate()}
    />

);