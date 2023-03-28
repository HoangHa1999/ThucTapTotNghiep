import React from 'react'
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render() {
        document.getElementById("virut").disabled = true;
        return(
        <div> 
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                        <Link className="sidebar-brand brand-logo" to="/admin"><img src="assets/images/logo.svg" alt="logo" /></Link>
                        <Link className="sidebar-brand brand-logo-mini" to="/admin"><img src="assets/images/logo-mini.svg" alt="logo" /></Link>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src="assets/images/faces/face15.jpg" alt=""/>
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                  <span>VIP Member</span>
                </div>
              </div>
              <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical"></i></a>
              <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Đổi mật khẩu</p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar-today text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Logout</p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/admin">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
                                <span className="menu-title">Trang Chủ</span>
                            </Link>
          </li>
          <li className="nav-item nav-category">
          <span className="nav-link">Danh mục quản lý</span>
          </li>
          
          <li className="nav-item menu-items">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">Quản lý loại phòng</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="/loaiphong">DS loại phòng</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/themloaiphong">Thêm loại phòng</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" data-toggle="collapse" href="#aaa" aria-expanded="false" aria-controls="aaa">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">Quản lý tiện ích</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="aaa">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="/tienich">DS tiện ích</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/themtienich">Thêm tiện ích</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" data-toggle="collapse" href="#bbb" aria-expanded="false" aria-controls="bbb">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">Quản lý khách hàng</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="bbb">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="/khachhang">DS khách hàng</Link></li>
                {/*<li className="nav-item"> <Link className="nav-link" to="/themkhachhang">Thêm khách hàng</Link></li>*/}
              </ul>
            </div>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" data-toggle="collapse" href="#ccc" aria-expanded="false" aria-controls="ccc">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">Quản lý nhân viên</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ccc">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="/nhanvien">DS nhân viên</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/themnhanvien">Thêm nhân viên</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
                <nav className="navbar p-0 fixed-top d-flex flex-row">
                    <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                        <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                    </div>
                    <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="mdi mdi-menu"></span>
                        </button>
           
           
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="mdi mdi-format-line-spacing"></span>
                        </button>
                    </div>
                </nav>
        </div>
        );
    }
}
export default Nav;