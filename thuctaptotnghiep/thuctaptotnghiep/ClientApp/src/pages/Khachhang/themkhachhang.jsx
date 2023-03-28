import React from 'react'
import Nav from '../../components/Nav/nav';


class Themkhachhang extends React.Component{
    render(){
        return(
        <div>
             <div className="container-scroller">
                <Nav/>

      <div className="container-fluid page-body-wrapper">
        <div className="main-panel"> 
        <div className="col-12 grid-margin stretch-card">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Thêm Khách Hàng</h4>
                    <p className="card-description"> Điền vào thông tin Khách hàng </p>
                    <form className="forms-sample">
                    <div className="form-group">
                        <label for="exampleInputName1">Mã khách hàng</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Nhập mã khách hàng"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputName1">Tên khách hàng</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Nhập tên khách hàng"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputName1">Ngày sinh</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Nhập ngày sinh"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleSelectGender">Giới tính</label>
                        <select className="form-control" id="exampleSelectGender">
                          <option>Nam</option>
                          <option>Nữ</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputName1">CMND/CCCD</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Nhập CMND/CCCD"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputName1">Số điện thoại</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Nhập số điện thoại"/>
                      </div>
                      <div className="form-group">
                        <label>Quốc Tịch</label>
                        <select className="form-control" style={{width: '100%'}}>
                          <option value="VN">Việt Nam</option>
                          <option value="AL">Alabama</option>
                          <option value="WY">Wyoming</option>
                          <option value="AM">America</option>
                          <option value="CA">Canada</option>
                          <option value="RU">Russia</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputName1">Email</label>
                        <input type="Email" className="form-control" id="exampleInputName1" placeholder="Nhập Email"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputName1">Password</label>
                        <input type="Password" className="form-control" id="exampleInputName1" placeholder="Nhập Password" />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputName1">Nhập lại mật khẩu</label>
                        <input type="Password" className="form-control" id="exampleInputName1" placeholder="Re-Password" />
                      </div>

                      <button type="submit" className="btn btn-primary mr-2">Thêm</button>
                      <button className="btn btn-dark">Hủy</button>
                    </form>
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
export default Themkhachhang;