import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/nav';
import callApi from '../../api/callApi';

class Nhanvien extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            nhanvien: []
        }
    }
    componentDidMount() {
        callApi('Nhanvien', 'GET', null)
            .then(res => {
                this.setState({
                    nhanvien: res.data
                });
            });
    }

    findIndex = (nhanvien, id) => {
        var result = -1;
        nhanvien.forEach((item, index) => {
            if (item.manv === id)
                result = index;
        });
        return result;
    }

    onDelete = (id) => {
        var { nhanvien } = this.state
        if (confirm("Bạn có chắc chắn muốn xóa?")) { //eslint-disable-line
            callApi(`Nhanvien/${id}`, 'DELETE', null)
                .then(res => {
                    if (res.status === 200) {
                        var index = this.findIndex(nhanvien, id);
                        if (index !== -1) {
                            nhanvien.splice(index, 1);
                            this.setState({
                                nhanvien: nhanvien
                            });
                        }
                    }
                });
        }
    }

  rendernhanvien = () => {
    let nhanvien = this.state.nhanvien.map((data, index) =>
      <tr key={data.manv}>
        <td> {data.manv}</td>
        <td> {data.tennv}</td>
        <td> {data.ngaysinh}</td>
        <td> {data.gioitinh ? "Nam":"Nữ"}</td>
        <td> {data.cmndNv}</td>
        <td> {data.sdtNv}</td>
      
        <td> {data.email}</td>
        <td> {data.diachiNv}</td>
            <td>
                <button type="button" className="btn btn-danger btn-icon-text" onClick={() => this.onDelete(data.manv)}>
                    <i className="mdi mdi-delete-forever btn-icon-prepend" ></i> Xóa </button>  &nbsp;&nbsp;
                <Link type="button" className="btn btn-warning btn-icon-text" to={`/suanhanvien/${data.manv}`}>
                    <i className="mdi mdi-border-color btn-icon-prepend"></i> Sửa </Link>
            </td>
      </tr>
    );
    return nhanvien;
  }

    render(){
        return(
        <div>
             <div className="container-scroller">
                <Nav/>

      <div className="container-fluid page-body-wrapper">
        <div className="main-panel"> 
        <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Dach sách nhân viên</h4>
                  
                    <div className="table-responsive">
                    <table className="table table-dark">
                        <thead>
                          <tr>
                            <th> Mã NV </th>
                            <th> Tên Nv </th>
                            <th> Ngày Sinh </th>
                            <th> Giới Tính </th>
                            <th> CMND/CCCD </th>
                            <th> SDT </th>
                          
                            <th> Email </th>
                            <th> Địa Chỉ </th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.rendernhanvien()}
                        </tbody>
                      </table>
                    </div>
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
export default Nhanvien;