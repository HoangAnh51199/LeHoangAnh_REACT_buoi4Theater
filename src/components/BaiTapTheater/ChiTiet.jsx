import React, { Component } from "react";
import { connect } from "react-redux";

class ChiTiet extends Component {
  renderContent = () => {
     console.log(this.props.cartList);
    // console.log(this.props.danhSachGhe);
    return this.props.cartList.map((element) => {
      return (
        <tr>
          <td key={element.element.soGhe} className="chiTiet">
            {element.element.soGhe}
          </td>
          <td className="chiTiet">{element.element.gia}</td>
          <td className="chiTiet">
            <i //nút hủy
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE",
                  payload: element, //truyền element hien tại
                })
              }
            >
              &#x274C;
            </i>
          </td>

          {/* <td className="chiTiet">Tổng tiền</td>
          <td className="chiTiet"> {(this.tongTien()).toLocaleString()}</td>
          <td className="chiTiet"></td> */}
        </tr>
      );
    });
  };
  

  tongTien = () => {
   return this.props.cartList.reduce((sum,element)=>{
    return sum+element.element.gia;
   },0)
    //console.log(123);
  };


  render() {
    return (
      <div>
        <h2 style={{ color: "orange" }}>Danh sách ghế bạn đã chọn</h2>

        <div className="boxChair ">
          <div>
            <div className="row">
              <div className="box red" />
              <span style={{ color: "white" }}>Ghế đã đặt</span>
            </div>
            <div className="row">
              <div className="box green" />
              <span style={{ color: "white" }}>Ghế đang chọn </span>
            </div>
            <div className="row">
              <div className="box white" />
              <span style={{ color: "white" }}> Ghế chưa đặt</span>
            </div>
          </div>
        </div>

        <div className="chiTiet">
          <table style={{ width: "100%" }}>
            <tr>
              <th className="chiTiet">Số ghế</th>
              <th className="chiTiet">Giá</th>
              <th className="chiTiet">hủy</th>
            </tr>

            {/* <tr>
              <td className="chiTiet"></td>
              <td className="chiTiet"></td>
              <td className="chiTiet">
                <i>&#x274C;</i>
              </td>
            </tr> */}
            {this.renderContent()}
            <tr>
              <td className="chiTiet">Tổng tiền</td>
              <td className="chiTiet">{this.tongTien()}</td>
              <td className="chiTiet"></td>
            </tr>
          </table>
        </div>
        <button
          onClick={() =>
            this.props.dispatch({
              type: "PAYMENT",
              payload: this.props.cartList, //cartlist
            })
          }
          className="pay"
        >

          PAYMENT
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  danhSachGhe: state.datGheReducer.danhSachGhe 
  .map((element)=> ({
    ...element,
    danhSachGhe:element.danhSachGhe.filter((hangGhe) => hangGhe.DangChon),
  })),
  cartList:state.datGheReducer.cartList,
};
  
  
}

//cartList: state.datGheReducer.cartList,

export default connect(mapStateToProps)(ChiTiet);
