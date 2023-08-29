import { DAT_GHE } from "../types/datGheType";

export const datGheAction = (data) => {
  return {
    type: DAT_GHE,
    payload: data,
  };
};
