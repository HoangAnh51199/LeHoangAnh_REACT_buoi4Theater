import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../store/actions/datGheAction";

 class Ghe extends Component {
  render() {
    //console.log(this.props.element);
    const { soGhe,DangChon, daDat } = this.props.element; //bóc tách phẩn tữ
    return (
      <button
      onClick={() => this.props.dispatch(datGheAction(this.props.element,this.props.hang))
      }
        disabled={daDat}
        className={`chair ${(DangChon && "btn-success") || (daDat && " btn-danger")}`}
      >
        {soGhe}
      </button>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
   
//     addToCart: (chair) => {
//       const action = {
//         type: "ADD_TO_CART",
//         payload: chair,
//       };

//       dispatch(action);
//     },
//   };
// }; 

export default connect()(Ghe);
