const API_URL = "https://teplodomdata.onrender.com";

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
