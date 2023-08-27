import React, { Component } from "react";
import "./style.css";
import DanhSachGhe from "./DanhSachGhe";
import ChiTiet from "./ChiTiet";

export default class BaiTapTheater extends Component {
  render() {
    return (
      <div className="container">
        
        <div className="d-flex">
          <div className  ="content-left col-8">
         
              <h3 style={{ color: "orange",textAlign:"center" }}>Đặt vé xem phim Cyberlearn.vn</h3>
              <h4 style={{ color: "white",textAlign:"center" }}> Màn hình </h4>
             <DanhSachGhe/>
            
          </div>
          <div className="content-right col-4">
           <ChiTiet />
          </div>
        </div>
      </div>
    );
  }
}

