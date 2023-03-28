import React from 'react'
import Nav from '../../components/Nav/nav';
import callApi from '../../api/callApi';
import { useNavigate } from "react-router-dom";
import { Link, useParams } from 'react-router-dom';




class Loaiphongaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         
            txt_ML: '',
            txt_TL: '',
            txt_Gia: '',
            txt_CT: ''
        }
    }

    

    componentDidMount() {
        var { id } = this.props.params;
        if (id) {
            document.getElementById("idmaloai").disabled = true;
            callApi(`Loaiphong/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    txt_ML : data.maloaiphong,
                    txt_TL : data.tenloaiphong,
                    txt_Gia : data.giaphong,
                    txt_CT : data.chitiet
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
        var { txt_ML, txt_TL, txt_Gia, txt_CT } = this.state;
        e.preventDefault();
        var { id } = this.props.params;
        if (id) {
            callApi(`Loaiphong`, 'PUT', {
                maloaiphong: id,
                tenloaiphong: txt_TL,
                giaphong: txt_Gia,
                chitiet: txt_CT
            }).then(res => {
                this.props.navigate('/loaiphong');
            });
        } else {
            callApi('Loaiphong', 'POST', {
                maloaiphong: txt_ML,
                tenloaiphong: txt_TL,
                giaphong: txt_Gia,
                chitiet: txt_CT
            }).then(res => {
                this.props.navigate('/loaiphong');
            });
        }
    }
    render() {
       
        var { txt_ML, txt_TL, txt_Gia, txt_CT } = this.state;
        return (
            <div>
                <div className="container-scroller">
                    <Nav />

                    <div className="container-fluid page-body-wrapper">
                        <div className="main-panel">
                            <div className="col-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                       
                                        <h4 className="card-title"> Điền vào thông tin loại phòng </h4>
                                        <form className="forms-sample" onSubmit={this.onSave}>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName1">Mã loại phòng</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id ="idmaloai"
                                                    name="txt_ML"
                                                    placeholder="Nhập mã loại phòng"
                                                    value={txt_ML}
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName1">Tên loại phòng</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="txt_TL"
                                                    placeholder="Nhập tên loại Phòng"
                                                    value={txt_TL}
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName1">Giá phòng</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="txt_Gia"
                                                    placeholder="Nhập giá phòng"
                                                    value={txt_Gia}
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleTextarea1">Chi tiết loại phòng</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="4"
                                                    name="txt_CT"
                                                    placeholder="Nhập Chi tiết loại phòng"
                                                    value={txt_CT}
                                                    onChange={this.onChange}
                                                    required
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary mr-2">Lưu</button>
                                            <Link to="/loaiphong" className="btn btn-dark">Hủy</Link>
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
    <Loaiphongaction
        {...props}
        params={useParams()}
        navigate={useNavigate()}
    />

);