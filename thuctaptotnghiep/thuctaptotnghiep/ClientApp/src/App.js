import React, { Component } from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";


import Home from "./pages/Home/home";
import Loaiphong from "./pages/Loaiphong/loaiphong";
import LoaiphongAction from "./pages/Loaiphong/loaiphongAction";
import Tienich from "./pages/Tienich/tienich";
import TienichAction from "./pages/Tienich/tienichAction";
import Khachhang from "./pages/Khachhang/khachhang";
import Themkhachhang from "./pages/Khachhang/themkhachhang";
import Nhanvien from "./pages/Nhanvien/nhanvien";
import NhanvienAction from "./pages/Nhanvien/nhanvienAction";



import HomeUser from "./pages/Users/HomeUser/homeuser";
import Login from "./pages/Users/Login/login";
import Register from "./pages/Users/Register/register";
import Room from "./pages/Users/Room/room";
import Update from './pages/Users/UpdateInfoUser/updateinfo';
import Book from './pages/Users/Book/book';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <Routes>

              {/*Backend*/}
              <Route path="/admin" element={<Home />} />

              <Route path="/loaiphong" element={<Loaiphong />} />
              <Route path="/themloaiphong" element={<LoaiphongAction />} />
              <Route path="/sualoaiphong/:id" element={<LoaiphongAction />} />

              <Route path="/tienich" element={<Tienich />} />
              <Route path="/themtienich" element={<TienichAction />} />
              <Route path="/suatienich/:id" element={<TienichAction />} />

              <Route path="/khachhang" element={<Khachhang />} />
              <Route path="/themkhachhang" element={<Themkhachhang />} />

              <Route path="/nhanvien" element={<Nhanvien />} />
              <Route path="/themnhanvien" element={<NhanvienAction />} />
              <Route path="/suanhanvien/:id" element={<NhanvienAction />} />

              {/*Fontend*/}
              <Route path="/" element={<HomeUser />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/update" element={<Update />} />
              <Route path="/room" element={<Room />} />
              <Route path="/book" element={<Book />} />
           </Routes>
    );
  }
}
