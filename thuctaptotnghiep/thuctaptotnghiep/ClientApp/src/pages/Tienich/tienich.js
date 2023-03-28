import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/nav';
import callApi from '../../api/callApi';

class tienich extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            tienich: []
        }
    }
    componentDidMount() {
        callApi('Tienich', 'GET', null)
            .then(res => {
                this.setState({
                    tienich: res.data
                });
            });
    }
    findIndex = (tienich, id) => {
        var result = -1;
        tienich.forEach((item, index) => {
            if (item.matienich === id)
                result = index;
        });
        return result;
    }

    onDelete = (id) => {
        var { tienich } = this.state
        if (confirm("Bạn có chắc chắn muốn xóa?")) { //eslint-disable-line
            callApi(`Tienich/${id}`, 'DELETE', null)
                .then(res => {
                    if (res.status === 200) {
                        var index = this.findIndex(tienich, id);
                        if (index !== -1) {
                            tienich.splice(index, 1);
                            this.setState({
                                tienich: tienich
                            });
                        }
                    }
                });
        }
    }
  rendertienich = () => {
    let tienich = this.state.tienich.map((data, index) =>
      <tr key={data.matienich}>
        <td> {data.matienich}</td>
        <td> {data.tentienich}</td>
       
            <td>
                <button type="button" className="btn btn-danger btn-icon-text" onClick={() => this.onDelete(data.matienich)}>
                    <i className="mdi mdi-delete-forever btn-icon-prepend" ></i> Xóa </button>  &nbsp;&nbsp;
                <Link type="button" className="btn btn-warning btn-icon-text" to={`/suatienich/${data.matienich}`}>
                    <i className="mdi mdi-border-color btn-icon-prepend"></i> Sửa </Link>
            </td>
      </tr>
    );
    return tienich;
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
                    <h4 className="card-title">Dach sách tiện ích</h4>
                  
                    <div className="table-responsive">
                      <table className="table table-dark">
                      <thead>
                          <tr>
                            <th> Mã Tiện Ích </th>
                            <th> Tên Tiện Ích </th>
                           
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.rendertienich()}
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
export default tienich;