import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  show: {
    id: 1,
    title: "VESTIDO BOMBA",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: [
      "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
      "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
      "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
      "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
      "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
    ],
    rating: 5,
  },
  vestidosFiltrados: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        //The item exist in the basket ... remove it ..
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as it is not in the basket`
        );
      }
      state.items = newBasket;
    },
    idChoosen: (state, action) => {
      console.log("console action payload", action.payload);

      state.show = action.payload;
    },
    filtrarVestidos: (state, action) => {
      console.log("console action", action.payload);

      let VestFiltrados = [];
      if (
        action.payload.input.longitud.length > 0 &&
        action.payload.input.color.length > 0
      ) {
        console.log("console entre");
        for (let i = 0; i < action.payload.data.length; i++) {
          if (
            action.payload.data[i].longitud === action.payload.input.longitud &&
            action.payload.data[i].color === action.payload.input.color
          ) {
            VestFiltrados.push(action.payload.data[i]);
          }
        }
        console.log("console VestFiltrados", VestFiltrados);
        console.log("console action.payload.input", action.payload.input);
        return {
          ...state,
          vestidosFiltrados: VestFiltrados,
        };
      }

      if (action.payload.input.longitud.length > 0) {
        for (let i = 0; i < action.payload.data.length; i++) {
          if (
            action.payload.data[i].longitud === action.payload.input.longitud
          ) {
            VestFiltrados.push(action.payload.data[i]);
          }
        }
        console.log("console VestFiltrados", VestFiltrados);
        console.log("console action.payload.input", action.payload.input);
        return {
          ...state,
          vestidosFiltrados: VestFiltrados,
        };
      }
      if (action.payload.input.color.length > 0) {
        for (let i = 0; i < action.payload.data.length; i++) {
          if (action.payload.data[i].color === action.payload.input.color) {
            VestFiltrados.push(action.payload.data[i]);
          }
        }

        return {
          ...state,
          vestidosFiltrados: VestFiltrados,
        };
      } else {
        return {
          ...state,
          vestidosFiltrados: "",
        };
      }
    },
    resetVestidos: (state, action) => {
      return;
    },
  },
});

export const { addToBasket, removeFromBasket, idChoosen, filtrarVestidos } =
  basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
export const selectId = (state) => state.basket.show;
export const vestidosFiltrados = (state) => state.basket.vestidosFiltrados;

export default basketSlice.reducer;
