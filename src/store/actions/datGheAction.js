import { DAT_GHE } from "../types/datGheType";

export const datGheAction = (data,data2) => {
  return {
    type: DAT_GHE,
    payload: {
        element: data,
        hang: data2,
      },
    
  };
};


// type: "DAT_GHE",

// payload: {
//   element: this.props.element,
//   hang: this.props.hang,