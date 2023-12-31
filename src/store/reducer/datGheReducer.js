import data from "../../data/danhSachGhe.json";
import { DAT_GHE, DELETE, PAY_MENT } from "../types/datGheType";

const DEFAULT_STATE = {
  danhSachGhe: data,
  cartList: [],
};

export const datGheReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case DAT_GHE: {
      console.log(action.payload);

      // CLONE DEEP
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));
      const cartList = JSON.parse(JSON.stringify(state.cartList));
      const soGhePayLoad = action.payload.element.soGhe;
      const Hang = action.payload.hang;
      const DangChon = action.payload.element.DangChon;

      const idxHang = data.findIndex(// tim hàng ?
        (element) => element.hang === Hang //tìm index theo payload soGhe

      );

      if (idxHang !== -1) {
        //  console.log(data);
        const index = data[idxHang].danhSachGhe.findIndex(//tim soghe
          (element) => element.soGhe === soGhePayLoad //tìm index theo payload soGhe

        );
        //  console.log(index);
        if (index !== -1 && DangChon == false) {
          data[idxHang].danhSachGhe[index].DangChon = !data[idxHang].danhSachGhe[index].DangChon;
          console.log(data[idxHang].danhSachGhe[index]);

          //đổi thuộc tính sang true dangchon
          
          cartList.push({ ...data[idxHang].danhSachGhe[index],hang: Hang});//push element {soGhe,gia,DangChon,daDat} payload vào cartList 
          state.cartList=cartList;
        } else if (index !== -1 && DangChon == true) {
          data[idxHang].danhSachGhe[index].DangChon = !data[idxHang].danhSachGhe[index].DangChon;
          const newArray = cartList.filter(item => item.soGhe !== soGhePayLoad);
          // cartList.splice(cartList[index], 1);//xóa cartlist
          console.log(newArray);
          state.cartList = newArray;
        }


      }

      state.danhSachGhe = data;//render table
      //v = newArray;//render table chitiet 
      break;
    }


    case PAY_MENT: {
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));
      const cartList = JSON.parse(JSON.stringify(state.cartList));

      const idxHang = data.findIndex(// tim hàng ?
        (element) => element.hang === cartList.hang //tìm index theo payload soGhe
      );


      console.log(data);
      console.log(cartList);

      console.log(idxHang);

      for (const [index1, property1] of data.entries()) {
        for (const [index2, property2] of cartList.entries()) {
          if (property1.hang === property2.hang) {
            const hangData = data[index1].danhSachGhe;
            const hangCart = cartList[index2];
            console.log(`Vị trí của thuộc tính có giá trị giống nhau: ${index1} trong mảng 1 và ${index2} trong mảng 2`);
            console.log(hangData);
            console.log(hangCart);

            const idxSoGhe = hangData.findIndex(//tim soghe
              (element) => element.soGhe === hangCart.soGhe//tìm index theo payload soGhe

            );
            console.log(idxSoGhe);
            console.log(hangData[idxSoGhe]);

            if (idxSoGhe !== -1 && hangData[idxSoGhe].daDat == false) {
              hangData[idxSoGhe].daDat = !hangData[idxSoGhe].daDat;
              hangData[idxSoGhe].DangChon = !hangData[idxSoGhe].DangChon;
            }
            console.log(hangData[idxSoGhe].DangChon);

           console.log(hangData[idxSoGhe]);

          }
        }
      }
     


      cartList.splice(0, cartList.length);
      state.cartList = cartList; //render lại
      state.danhSachGhe = data;//render lại ra table -> daDat
      break;
    }

    case DELETE: {
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));
      const cartList = JSON.parse(JSON.stringify(state.cartList));
      const soGhePayLoad = action.payload.soGhe;
      const Hang = action.payload.hang;
      const DangChon = action.payload.DangChon;

      const idxHang = data.findIndex(// tim hàng ?
        (element) => element.hang === Hang //tìm index theo payload soGhe

      );
      console.log(action.payload);
      if (idxHang !== -1) {
        //  console.log(data);
        const index = data[idxHang].danhSachGhe.findIndex(//tim soghe
          (element) => element.soGhe === soGhePayLoad //tìm index theo payload soGhe

        );
          console.log(index);
        if (index !== -1 && DangChon ==true) {
          data[idxHang].danhSachGhe[index].DangChon = !data[idxHang].danhSachGhe[index].DangChon;

         
          const newArray = cartList.filter(item => item.soGhe !== soGhePayLoad);
          // cartList.splice(cartList[index], 1);//xóa cartlist
          console.log(newArray);
          state.cartList = newArray;
        }
      }
      state.danhSachGhe = data;//render table
      
      break;
    }
  }
  return { ...state };
};
