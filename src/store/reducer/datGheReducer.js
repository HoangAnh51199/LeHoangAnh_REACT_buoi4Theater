import data from "../../data/danhSachGhe.json";

const DEFAULT_STATE = {
  danhSachGhe: data,
  cartList: [],
};

export const datGheReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "DAT_GHE": {
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


          //đổi thuộc tính sang true dangchon
          cartList.push({ ...action.payload });//push element {soGhe,gia,DangChon,daDat} payload vào cartList 
        } else if (index !== -1 && DangChon == true) {
          data[idxHang].danhSachGhe[index].DangChon = !data[idxHang].danhSachGhe[index].DangChon;

          cartList.splice(cartList[index], 1);//xóa cartlist
        }


      }

      state.danhSachGhe = data;//render table
      state.cartList = cartList;//render table chitiet 
      break;
    }


    case "PAY_MENT": {
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));
      const cartList = JSON.parse(JSON.stringify(state.cartList));

      const idxHang = data.findIndex(// tim hàng ?
      (element) => element.hang === cartList.hang //tìm index theo payload soGhe

    );
     //cartList: [element:{},hang] 2 propery
     
     if (idxHang !== -1) {
      //  console.log(data);
      const indexSG = data[idxHang].danhSachGhe.findIndex(//tim soghe
        (element) => element.soGhe === cartList[idxHang].element.soGhe //tìm index theo payload soGhe

      );
      //  console.log(index);
      if (indexSG !== -1 && data[idxHang].danhSachGhe[indexSG].daDat == false) {
        data[idxHang].danhSachGhe[indexSG].daDat = !data[idxHang].danhSachGhe[indexSG].daDat;

      } 


    }
    
   
    
       cartList.splice(0, cartList.length);
      state.cartList = cartList; //render lại
      state.danhSachGhe = data;//render lại ra table -> daDat
      break;
    }

    case "DELETE": {
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));
      const cartList = JSON.parse(JSON.stringify(state.cartList));
      const soGhePayLoad = action.payload.element.soGhe;
      const Hang = action.payload.hang;

      const idxHang = data.findIndex(// tim hàng ?
        (element) => element.hang === Hang //tìm index theo payload soGhe

      );

      if (idxHang !== -1) {
        //  console.log(data);
        const index = data[idxHang].danhSachGhe.findIndex(//tim soghe
          (element) => element.soGhe === soGhePayLoad //tìm index theo payload soGhe

        );
        //  console.log(index);
        if (index !== -1) {
          data[idxHang].danhSachGhe[index].DangChon = !data[idxHang].danhSachGhe[index].DangChon;


          //đổi thuộc tính sang false
          cartList.splice(cartList[index], 1);//push element {soGhe,gia,DangChon,daDat} payload vào cartList 
        }
      }
      state.danhSachGhe = data;//render table
      state.cartList = cartList;//render table chitiet 
      break;
    }
  }
  return { ...state };
};
