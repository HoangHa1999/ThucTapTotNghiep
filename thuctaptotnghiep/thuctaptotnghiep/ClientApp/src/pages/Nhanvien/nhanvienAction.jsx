import React from 'react'
import Nav from '../../components/Nav/nav';
import callApi from '../../api/callApi';
import { useNavigate } from "react-router-dom";
import { Link, useParams } from 'react-router-dom';


class Nhanvienaction extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cmb_GT: '',
            date: '',
            txt_MaNV: '',
            txt_TenNV: '',
            txt_CMND: '',
            txt_SDT: '',
            txt_Email: '',
            txt_Diachi: '',
          
        }
    }



    componentDidMount() {
        var { id } = this.props.params;
        if (id) {
            document.getElementById("idnanv").disabled = true;
            callApi(`Nhanvien/${id}`, 'GET', null).then(res => {
                var data = res.data;

                this.setState({
                    txt_MaNV: data.manv,
                    txt_TenNV: data.tennv,
                    txt_CMND: data.cmndNv,
                    txt_SDT: data.sdtNv,
                    txt_Email: data.email,
                    txt_Diachi: data.diachiNv,
                    date: data.ngaysinh,
                    cmb_GT: data.gioitinh
                });
            });
        }
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
        var { txt_MaNV, txt_TenNV, txt_CMND, txt_SDT, txt_Email, txt_Diachi, date } = this.state;
        
        var cmb_GT = document.getElementById('cmb_GT').value;
        e.preventDefault();
        var { id } = this.props.params;
        if (id) {
            callApi(`Nhanvien`, 'PUT', {
                manv: id,
                tennv: txt_TenNV,
                ngaysinh: date,
                cmndNv: txt_CMND,
                diachiNv: txt_Diachi,
                sdtNv: txt_SDT,
                email: txt_Email,
                gioitinh: cmb_GT
            }).then(res => {
                this.props.navigate('/nhanvien');
            });
        } else {
            callApi('Nhanvien', 'POST', {
                manv: txt_MaNV,
                tennv: txt_TenNV,
                ngaysinh: date,
                cmndNv: txt_CMND,
                diachiNv: txt_Diachi,
                sdtNv: txt_SDT,
                email: txt_Email,
                gioitinh: cmb_GT
            }).then(res => {
                this.props.navigate('/nhanvien');
            });
        }
    }

    render() {
        var { txt_MaNV, txt_TenNV, txt_CMND, txt_SDT, txt_Email, txt_Diachi, date, cmb_GT } = this.state;
        return(
        <div>
             <div className="container-scroller">
                <Nav/>

      <div className="container-fluid page-body-wrapper">
        <div className="main-panel"> 
        <div className="col-12 grid-margin stretch-card">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Thêm Nhân Viên</h4>
                    <p className="card-description"> Điền vào thông tin nhân viên </p>
                                        <form className="forms-sample" onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Mã nhân viên</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nhập mã nhân viên"
                                                    id="idnanv"
                                                    name="txt_MaNV"
                                                    value={txt_MaNV}
                                                    onChange={this.onChange}
                                                    required                                                />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Tên nhân viên</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nhập tên nhân viên"
                                                    name="txt_TenNV"
                                                    value={txt_TenNV}
                                                    onChange={this.onChange}
                                                    required                                                />
                      </div>
                      <div className="form-group">
                                                <label htmlFor="exampleInputName1">Ngày sinh</label>
                                                <input type="date"
                                                    className="form-control"
                                                   
                                                    name="date"
                                                    value={date}
                                                    onChange={this.onChange}
                                                    required
                                                />
                      </div>
                      <div className="form-group">
                        <label for="exampleSelectGender">Giới tính</label>
                                                <select className="form-control"
                                                    name="cmb_GT"
                                                    id="cmb_GT"
                                                    value={cmb_GT}
                                                    onChange={this.onChange}
                                                    >
                          <option value="1">Nam</option>
                          <option value="0">Nữ</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">CMND/CCCD</label>
                                                <input
                                                    type="text" className="form-control"
                                                    placeholder="Nhập CMND/CCCD"
                                                    name="txt_CMND"
                                                    value={txt_CMND}
                                                    onChange={this.onChange}
                                                    required                                                />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Số điện thoại</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nhập số điện thoại"
                                                    name="txt_SDT"
                                                    value={txt_SDT}
                                                    onChange={this.onChange}
                                                    required                                                />
                      </div>                     
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Email</label>
                                                <input
                                                    type="Email"
                                                    className="form-control"
                                                    placeholder="Nhập Email"
                                                    name="txt_Email"
                                                    value={txt_Email}
                                                    onChange={this.onChange}
                                                    required                                                />
                      </div>
                      <div className="form-group">
                        <label for="exampleTextarea1">Địa chỉ</label>
                                                <textarea
                                                    className="form-control"
                                                    id="exampleTextarea1"
                                                    rows="2"
                                                    placeholder="Nhập Địa chỉ"
                                                    name="txt_Diachi"
                                                    value={txt_Diachi}
                                                    onChange={this.onChange}
                                                    required                                                ></textarea>
                      </div>
                                            <button type="submit" className="btn btn-primary mr-2">Lưu</button>
                                            <Link to="/nhanvien" className="btn btn-dark">Hủy</Link>
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
export default (props) => (
    <Nhanvienaction
        {...props}
        params={useParams()}
        navigate={useNavigate()}
    />

);