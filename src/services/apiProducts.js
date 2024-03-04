const API_URL = "http://localhost:3333";


export function getProducts() {
  return async function (dispatch) {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    dispatch({ type: "products/getProducts", payload: data });
  };
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
