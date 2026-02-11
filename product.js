let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0

function resetProducts() {
  products = [];
  id = 0;
}

function addProduct(name, price) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Invalid product name");
  }
  if (typeof price !== "number" || price < 0) {
    throw new Error("Invalid product price");
  }
  const product = { id: ++id, name, price };
  products.push(product);
  return products;
}

function removeProduct(id) {
  products = products.filter((product) => product.id !== id);
}

function getProducts() {
  return products;
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function updateProduct(id, name, price) {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], name, price };
    return products[productIndex];
  }
}

module.exports = {
  resetProducts,
  addProduct,
  removeProduct,
  getProducts,
  getProduct,
  updateProduct,
};
