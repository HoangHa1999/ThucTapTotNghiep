import React from 'react'


class Footer extends React.Component{
    render(){ 
        return(
        <div>
            <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Dự án <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Quản lý khách sạn</a> sử dụng ReactJS</span>
            </div>
          </footer>
        </div>
        );
    }
}
export default Footer; 