import React, { Component } from "react";
import Ghe from "./Ghe";
import { connect } from "react-redux";

class DanhSachGhe extends Component {
  renderContent = () => {
    return this.props.danhSachGhe.map((element) => {
      if (element.hang === "") return(
        <tr>
          
          <td/>
          {this.renderHangNumber(element.danhSachGhe)} 
        </tr>
      );

      return (
        <tr key={element.hang}>
          <td> {element.hang} </td>

          {this.renderHang(element.danhSachGhe, element.hang)}
        </tr>
      );
    });
  };

  renderHang = (data, hang) => {
    return data.map((element) => {
      return <td>  <Ghe hang={hang} element={element} key={element.soGhe} /> </td>;
    });
  };

  renderHangNumber=(data) => {
    return data.map((element)=>{
      return <td key={element.soGhe} className=" title_numb ">{element.soGhe}</td>
    }); 
  }

  render() {
   // console.log(this.props);
    return (
      <div className="seatStructure txt-center">
        <div className="py-1 screen text-center "></div>
        <div className="title my-2 "> </div>
        {/* <tr>
          <td />
          <td className=" title_numb ">1</td>
          <td className="title_numb ">2</td>
          <td className="title_numb ">3</td>
          <td className="title_numb ">4</td>
          <td className="title_numb ">5</td>
          <td className="title_numb ">6</td>
          <td className="title_numb ">7</td>
          <td className="title_numb ">8</td>
          <td className="title_numb ">9</td>
          <td className="title_numb ">10</td>
          <td className="title_numb ">11</td>
          <td className="title_numb ">12</td>
        </tr> */}
      <div className="demo">
      {this.renderContent()} 
      </div>
      
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.datGheReducer.danhSachGhe,
  };
};
export default connect(mapStateToProps)(DanhSachGhe);
