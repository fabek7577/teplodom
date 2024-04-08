import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  basket: [
    {
      id: "1",
      addedTime: "2024-03-13",
      title: "Eleron Шпатлевка Фасадная ОК С-003, 20кг",
      description:
        "Шпатлевочная смесь предназначена для фасадных работ и выравнивания поверхностей снаружи и внутри зданий и сооружений. Используется в сухих и влажных помещениях различного назначения. Применяется по бетонным, цементным, оштукатуренным основаниям и по кирпичной кладке.",
      price: 60000,
      discountPercentage: 13,
      rating: 4.69,
      brand: "Apple",
      color: "black",
      category: "Сухие строительные смеси",
      image:
        "https://www.prom.uz/_ipx/f_webp/https://devel.prom.uz/upload//products/2022/12/28/1/30.png",
    },
  ],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.basket = state.basket.filter(
        (product) => product.id !== payload.id
      );
      state.basket = [...state.basket, payload];
      toast.success("Добавлено в корзину", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    delFromBasket: (state, { payload }) => {
      state.basket = state.basket.filter((product) => product.id !== payload);
    },
  },
});

export const { addToBasket, delFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
