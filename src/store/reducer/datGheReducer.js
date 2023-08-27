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

     
      for (let i = 0; i < cartList.length; i++) {
        const hangCartList = cartList[i].hang;
        const soGheCart = cartList[i].element.soGhe;
        console.log(hangCartList);
        for (let j = 0; j < data.length; j++) {
          const hangData = data[j].hang;
          const soGheData = data[j].danhSachGhe.soGhe;
            console.log(soGheData);
          if (hangCartList === hangData) {
           if(soGheCart === soGheData) {
            // data[idxHang].danhSachGhe[index].daDat = !data[idxHang].danhSachGhe[index].daDat; 
            data[j].danhSachGhe.daDat = !data[j].danhSachGhe.daDat;
           }
            
          }
        }
      }
      // console.log(cartList);

      // if(idxHang !== -1)  {
      //   //  console.log(data);
      //   const index = data[idxHang].danhSachGhe.findIndex(//tim soghe trong data
      //     (element) => element.soGhe === cartList.element.soGhe //tìm index theo soGhe

      //   );
      //     console.log(index);
      //   if (index !== -1) {
      //     data[idxHang].danhSachGhe[index].daDat = !data[idxHang].danhSachGhe[index].daDat; 

      //   //đổi thuộc tính false sang true daDat
      //     cartList.splice(0, cartList.length);//clear table
      //   }
      // }
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
