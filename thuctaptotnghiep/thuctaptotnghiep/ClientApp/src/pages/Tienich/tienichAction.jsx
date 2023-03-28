import React from 'react'
import Nav from '../../components/Nav/nav';
import callApi from '../../api/callApi';
import { useNavigate } from "react-router-dom";
import { Link, useParams } from 'react-router-dom';

class Tienichaction extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            txt_MaTI: '',
            txt_TenTI: ''
        }
    }

    componentDidMount() {
        var { id } = this.props.params;
        if (id) {
            document.getElementById("idtienich").disabled = true;
            callApi(`Tienich/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    txt_MaTI: data.matienich,
                    txt_TenTI: data.tentienich,
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
        var { txt_MaTI, txt_TenTI} = this.state;
        e.preventDefault();
        var { id } = this.props.params;
        if (id) {
            callApi(`Tienich`, 'PUT', {
                maTienich: id,
                tenTienich: txt_TenTI,
            }).then(res => {
                this.props.navigate('/tienich');
            });
        } else {
            callApi('Tienich', 'POST', {
                maTienich: txt_MaTI,
                tenTienich: txt_TenTI,
            }).then(res => {
                this.props.navigate('/tienich');
            });
        }
    }
    render() {
        var { txt_MaTI, txt_TenTI } = this.state;
        return (
        <div>
             <div className="container-scroller">
                <Nav/>

      <div className="container-fluid page-body-wrapper">
        <div className="main-panel"> 
        <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Điền vào thông tin tiện ích</h4>
                    
                        <form className="forms-sample" onSubmit={this.onSave}>
                     
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Mã tiện ích</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="idtienich"
                                                    placeholder="Nhập mã tiện ích"
                                                    value={txt_MaTI}
                                                    onChange={this.onChange}
                                                    name="txt_MaTI"
                                                    required                                                />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Tên tiện ích</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nhập tên tiện ích"
                                                    value={txt_TenTI}
                                                    onChange={this.onChange}
                                                    name="txt_TenTI"
                                                    required                                                />
                      </div>
                        
                        <button type="submit" className="btn btn-primary mr-2">Lưu</button>
                        <Link to="/tienich" className="btn btn-dark">Hủy</Link>
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
    <Tienichaction
        {...props}
        params={useParams()}
        navigate={useNavigate()}
    />
);