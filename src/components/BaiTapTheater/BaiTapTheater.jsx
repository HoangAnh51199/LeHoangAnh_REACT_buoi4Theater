import React, { Component } from "react";
import "./style.css";

export default class BaiTapTheater extends Component {
  render() {
    return (
      <div>
        <div className="d-flex">
          <div class="content left col-8">
            <div className="container">
              <h1 style={{ color: "orange" }}>Đặt vé xem phim Cyberlearn.vn</h1>
              <h3 style={{ color: "white" }}> Màn hình </h3>
            </div>
          </div>
          <div className="content right col-4">
            <div className="container">
              <h1 style={{ color: "orange" }}>Danh sách ghế bạn đã chọn</h1>

              <div className="boxChair ">
                <div>
                  <div className="row">
                    <div className="box red" />
                    <span style={{color:"white"}}>Ghế đã đặt</span>
                  </div>
                  <div className="row">
                    <div className="box green" />
                    <span style={{color:"white"}}>Ghế đang chọn </span>
                  </div>
                  <div className="row">
                    <div className="box white" />
                    <span style={{color:"white"}}> Ghế chưa đặt</span>
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
