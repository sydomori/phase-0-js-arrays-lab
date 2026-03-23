// Write your code here
const products = [
  "Laptop",
  "Phone",
  "Headphones",
  "Monitor",
]

function logFirstProduct(){
  console.log(products[0]);
}

function addProduct(product){
  products.push(product);
}

addProduct("Keyboard");

function updateProductName(index, newName){
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  }
}

updateProductName(1, "Smartphone");

function removeLastProduct(){
  products.pop();
}

removeLastProduct();


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};


