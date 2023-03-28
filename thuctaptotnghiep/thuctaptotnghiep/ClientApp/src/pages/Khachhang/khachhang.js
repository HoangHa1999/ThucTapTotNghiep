import React from 'react'
import Nav from '../../components/Nav/nav';
import callApi from '../../api/callApi';

class Khachhang extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            khachhang: []
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
    findIndex = (khachhang, id) => {
        var result = -1;
        khachhang.forEach((item, index) => {
            if (item.makh === id)
                result = index;
        });
        return result;
    }

    onDelete = (id) => {
        var { khachhang } = this.state
        if (confirm("Bạn có chắc chắn muốn xóa?")) { //eslint-disable-line
            callApi(`khachhang/${id}`, 'DELETE', null)
                .then(res => {
                    if (res.status === 200) {
                        var index = this.findIndex(khachhang, id);
                        if (index !== -1) {
                            khachhang.splice(index, 1);
                            this.setState({
                                khachhang: khachhang
                            });
                        }
                    }
                });
        }
    }
  renderkhachhang = () => {
    let khachhang = this.state.khachhang.map((data, index) =>
      <tr key={data.makh}>
        <td> {data.makh}</td>
        <td> {data.tenkh}</td>
        <td> {data.ngaysinh}</td>
        <td> {data.gioitinh? "Nam":"Nữ"} </td>
        <td> {data.cmnd}</td>
        <td> {data.sdt}</td>
    
        <td> {data.email}</td>
        <td> {data.username}</td>
        <td>
                <button type="button" className="btn btn-danger btn-icon-text" onClick={() => this.onDelete(data.makh)}>
                    <i className="mdi mdi-delete-forever btn-icon-prepend" ></i> Xóa </button>  &nbsp;&nbsp;
                            <button type="button" className="btn btn-warning btn-icon-text">
                    <i className="mdi mdi-border-color btn-icon-prepend"></i> Sửa </button>
        </td>
      </tr>
    );
    return khachhang;
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
                    <h4 className="card-title">Dach sách khách hàng</h4>
                  
                    <div className="table-responsive">
                      <table className="table table-dark">
                        <thead>
                          <tr>
                            <th> Mã KH </th>
                            <th> Tên KH </th>
                            <th> Ngày Sinh </th>
                            <th> Giới Tính </th>
                            <th> CMND/CCCD </th>
                            <th> SDT </th>
                          
                            <th> Email </th>
                            <th> Username </th>
                            <th>  </th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.renderkhachhang()}
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
export default Khachhang;