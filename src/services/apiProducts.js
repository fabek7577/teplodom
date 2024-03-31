import { toast } from "react-toastify";

const API_URL = "http://localhost:3333";

export function getAccount(user) {
  return async function (dispatch) {
    const res = await fetch(
      `${API_URL}/accounts?contact=${user.contact}&password=${user.password}`
    );
    const data = await res.json();
    if (!data.length) {
      toast.error("Такой пользователь не найден", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch({ type: "user/loginUser", payload: data[0] });
      toast.success("Вы успешно вошли в аккаунт", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
}

export function registerAccount(product) {
  fetch(`${API_URL}/accounts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
}

export async function getProduct(productId) {
  const res = await fetch(`${API_URL}/products/${productId}`);
  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting product item");

  const data = await res.json();
  return data;
}

export function getProducts() {
  return async function (dispatch) {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    dispatch({ type: "products/getProducts", payload: data });
  };
}
export function getBrands() {
  return async function (dispatch) {
    const res = await fetch(`${API_URL}/brands`);
    const data = await res.json();
    dispatch({ type: "products/getBrands", payload: data });
  };
}
export function updateFavourites(product) {
  fetch(`${API_URL}/products/${product.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
}

export function getCategories() {
  return async function (dispatch) {
    const res = await fetch(`${API_URL}/category`);
    const data = await res.json();
    dispatch({ type: "categories/getCategories", payload: data });
  };
}

export function getCategoryProducts(category) {
  return async function (dispatch) {
    const res = await fetch(`${API_URL}/products?category=${category}`);
    const data = await res.json();
    dispatch({ type: "categories/getCategoryProducts", payload: data });
  };
}
