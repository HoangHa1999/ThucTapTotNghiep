import React from 'react'
import { Link } from 'react-router-dom';
import callApi from '../../api/callApi';
import Nav from '../../components/Nav/nav';


class Loaiphong extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaiphong: []
        }
    }
    componentDidMount() {
        callApi('Loaiphong', 'GET', null)
            .then(res => {
                this.setState({
                    loaiphong: res.data
                });
            });
    }

    findIndex = (loaiphong, id) => {
        var result = -1;
        loaiphong.forEach((item, index) => {
            if (item.maloaiphong === id)
                result = index;
        });
        return result;
    }

    onDelete = (id) => {
        var { loaiphong } = this.state
        if (confirm("Bạn có chắc chắn muốn xóa?")) { //eslint-disable-line
            callApi(`Loaiphong/${id}`, 'DELETE', null)
                .then(res => {
                    if (res.status === 200) {
                        var index = this.findIndex(loaiphong, id);
                        if (index !== -1) {
                            loaiphong.splice(index, 1);
                            this.setState({
                                loaiphong: loaiphong
                            });
                        }
                    }
                });
        }
    }
       
    

    renderloaiphong = () => {
        let loaiphong = this.state.loaiphong.map((data, index) =>
            <tr key={data.maloaiphong}>
                <td> {data.maloaiphong}</td>
                <td> {data.tenloaiphong}</td>
                <td> {data.giaphong}</td>
                <td> {data.chitiet}</td>
                <td>
                    <button type="button" className="btn btn-danger btn-icon-text" onClick={() => this.onDelete(data.maloaiphong)}>
                        <i className="mdi mdi-delete-forever btn-icon-prepend" ></i> Xóa </button>  &nbsp;&nbsp;
                    <Link type="button" className="btn btn-warning btn-icon-text" to={`/sualoaiphong/${data.maloaiphong}`}>
                        <i className="mdi mdi-border-color btn-icon-prepend"></i> Sửa </Link>
                </td>
            </tr>
        );
        return loaiphong;
    }

    render() {

        return (
            <div>
                <div className="container-scroller">
                    <Nav />

                    <div className="container-fluid page-body-wrapper">
                        <div className="main-panel">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Dach sách loại phòng</h4>

                                        <div className="table-responsive">
                                            <table className="table table-dark">
                                                <thead>
                                                    <tr>
                                                        <th> Mã Loại Phòng </th>
                                                        <th> Tên Loại Phòng </th>
                                                        <th> Giá Phòng </th>
                                                        <th> Chi Tiết Loại Phòng </th>
                                                        <th> </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.renderloaiphong()}
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
export default Loaiphong;