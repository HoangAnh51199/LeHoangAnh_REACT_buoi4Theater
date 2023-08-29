import { DAT_GHE, DELETE, PAY_MENT } from "../types/datGheType";

export const datGheAction = (data,data2) => {
  return {
    type: DAT_GHE,
    payload: {
        element: data,
        hang: data2,
      },
    
  };
};

export const xoaGheAction = (data) => {
  return {
    type: DELETE,
    payload: data,
    
  };
};

export const payMentAction = () => {
  return {
    type: PAY_MENT,
    
    
  };
};




// type: "DAT_GHE",

// payload: {
//   element: this.props.element,
//   hang: this.props.hang,