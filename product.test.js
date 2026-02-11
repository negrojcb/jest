const {
  resetProducts,
  addProduct,
  removeProduct,
  getProducts,
  getProduct,
  updateProduct,
} = require("./product");

beforeEach(() => {
  resetProducts();
});

describe("Adding products", () => {
  test("should add a product to the list", () => {
    const products = addProduct("Laptop", 1000);
    expect(products).toEqual([{ id: 1, name: "Laptop", price: 1000 }]);
    expect(typeof products[0].id).toBe("number");
    expect(typeof products[0].price).toBe("number");
  });

  test("should add multiple products to the list", () => {
    addProduct("Laptop", 1000);
    const products = addProduct("Phone", 500);
    expect(products).toEqual([
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 500 },
    ]);
  });
});

describe("Removing products", () => {
  test("should remove a product from the list", () => {
    addProduct("Laptop", 1000);
    addProduct("Phone", 500);
    removeProduct(1);
    const products = getProducts();
    expect(products).toEqual([{ id: 2, name: "Phone", price: 500 }]);
  });
});

describe("Getting products", () => {
  test("should get all products", () => {
    addProduct("Laptop", 1000);
    addProduct("Phone", 500);
    const products = getProducts();
    expect(products).toEqual([
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 500 },
    ]);
  });

  test("should get a product by id", () => {
    addProduct("Laptop", 1000);
    const product = getProduct(1);
    expect(product).toEqual({ id: 1, name: "Laptop", price: 1000 });
  });
});

describe("Updating products", () => {
  test("should update a product's name and price", () => {
    addProduct("Laptop", 1000);
    const updatedProduct = updateProduct(1, "Gaming Laptop", 1500);
    expect(updatedProduct).toEqual({
      id: 1,
      name: "Gaming Laptop",
      price: 1500,
    });
  });

  test("should return undefined if product to update does not exist", () => {
    const updatedProduct = updateProduct(999, "Non-existent Product", 0);
    expect(updatedProduct).toBeUndefined();
  });
});
