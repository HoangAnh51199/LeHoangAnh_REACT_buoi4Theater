import React, { Component } from "react";
import { connect } from "react-redux";

 class Ghe extends Component {
  render() {
    //console.log(this.props.element);
    const { soGhe,DangChon, daDat } = this.props.element; //bóc tách phẩn tữ
    return (
      <button
      onClick={() =>
        this.props.dispatch({
          type: "DAT_GHE",

          payload: {
            element: this.props.element,
            hang: this.props.hang,
          },
        })
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
