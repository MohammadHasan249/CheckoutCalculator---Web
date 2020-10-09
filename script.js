var taxButton = document.querySelector("#addTax");
var discountButton = document.querySelector("#addDiscount");
var taxInput = document.querySelector("#taxInput");
var discountInput = document.querySelector("#discountInput");

var taxSpan = document.querySelector("#tax");

var discount = 0;
var price = 0.0;
var tax = 0;
taxButton.onclick = () => {
  taxInput.style.display = "block";
};
// Records the tax and updates the value of tax displayed
function taxFocusOut() {
  tax = taxInput.value / 100;
  taxSpan.innerHTML = taxInput.value;
  taxInput.style.display = "none";
}

var vouchers = ['HELLOPROFS&TAS', 'PLSGIVEUS100PERCENT', 'SMILEYFACE', 'HAVEANICEDAY'];

discountButton.onclick = () => {
  discountInput.style.display = "block";
};
// Records the discount (if it is a valid voucher)
function discountFocusOut() {
  val = discountInput.value;
  if (vouchers.includes(val)) {
    alert("So you've agreed to give us 100%? Thanks :)! For that, you get a whole $100 discount!");
    price -= 100;
    setPrice(price);
    discountInput.style.display = "none";
  }
}
// Sets the final price
function setFinalPrice(price) {
  var finalPriceSpan = document.querySelector("#finalPrice");
  finalPrice = (price * tax) + price;
  if (finalPrice > 0) {
    finalPriceSpan.innerHTML = finalPrice.toFixed(2);
  }
  else {
    finalPriceSpan.innerHTML = 0.00;
  }
}

// Check if str exists in cart
function checkExists(str) {
  var cart = document.getElementById("Cart");
  children = cart.getElementsByTagName("li");
  children = Array.from(children);
  for (i = 0; i < children.length; i++) {
    child = children[i];
    if (child.id == str) {
      return child;
    }
  }
  return false;
}
// Sets the prices
function setPrice(price) {
  var basePrice = document.getElementById("basePrice");
  if (price > 0) {
    basePrice.innerHTML = price.toFixed(2);
  }
  else {
    price = 0.0;
    basePrice.innerHTML = 0.00;
  }
  setFinalPrice(price);
}

// Mechanics for the checkout button
var checkoutButton = document.querySelector("#checkout");

checkoutButton.onclick = () => {
  var finalPriceSpan = document.querySelector("#finalPrice");
  finalPrice = (price * tax) + price;

  if (finalPrice > 0) {
    finalPriceSpan.innerHTML = finalPrice.toFixed(2);
  }
  else {
    finalPriceSpan.innerHTML = 0.00;
  }
  alert("You have bought items worth of $" + finalPriceSpan.innerHTML + ", including tax. Please come again!");
  location.reload();
};


// Add one unit of an item to the cart
function addItem(str, qt) {
  var cart = document.getElementById("Cart");
  var b = checkExists(str);
  if (b == false) {
    var li = document.createElement("li");
    li.setAttribute('id', str);
    li.appendChild(document.createTextNode(str + " x" + qt));
    cart.appendChild(li);
  }
  else {
    b.innerHTML = str + " x" + qt;
  }

  setPrice(price);
}

// Remove one unit of an item from the cart
function removeItem(str, qt, price) {
  var cart = document.getElementById("Cart");
  children = cart.getElementsByTagName("li");
  children = Array.from(children);
  var b = checkExists(str);
  if (b == false) {
    return;
  }

  for (i = 0; i < children.length; i++) {
    child = children[i];
    if (child.id == str) {
      if (qt == 0) {
        cart.removeChild(child);
      }
      else {
        child.innerHTML = str + " x" + qt;
      }
    }
  }

  setPrice(price);
}

// The rest of the code in this file is for the mechanics of the "+" and "-" buttons under every item in the virtual store
var prices = [146.99, 2824.99, 777.29, 167.99, 399.99, 209.99];
var quantities = [0, 0, 0, 0, 0, 0];
const addItem1 = document.querySelector("#additem1");
const removeItem1 = document.querySelector("#removeitem1");

const addItem2 = document.querySelector("#additem2");
const removeItem2 = document.querySelector("#removeitem2");

const addItem3 = document.querySelector("#additem3");
const removeItem3 = document.querySelector("#removeitem3");

const addItem4 = document.querySelector("#additem4");
const removeItem4 = document.querySelector("#removeitem4");

const addItem5 = document.querySelector("#additem5");
const removeItem5 = document.querySelector("#removeitem5");

const addItem6 = document.querySelector("#additem6");
const removeItem6 = document.querySelector("#removeitem6");


addItem1.onclick = () => {
  var i = 0;
  var quantity = document.querySelector("#quantityItem1");
  quantities[i] += 1;
  quantity.innerHTML = quantities[i];
  price += prices[0];
  addItem("Real Madrid Jersey", quantity.innerHTML, price);
};

removeItem1.onclick = () => {
  var i = 0;
  var quantity = document.querySelector("#quantityItem1");
  if (quantities[i] > 0) {
      quantities[i] -= 1;
  }
  quantity.innerHTML = quantities[i];
  if (price > 0) {
    price -= prices[0];
  }
  removeItem("Real Madrid Jersey", quantity.innerHTML, price);
};


addItem2.onclick = () => {
  var i = 1;
  var quantity = document.querySelector("#quantityItem2");
  quantities[i] += 1;
  quantity.innerHTML = quantities[i];
  price += prices[1];
  addItem("Apple Macbook Air", quantity.innerHTML, price);
};

removeItem2.onclick = () => {
  var i = 1;
  var quantity = document.querySelector("#quantityItem2");
  if (quantities[i] > 0) {
      quantities[i] -= 1;
  }
  quantity.innerHTML = quantities[i];
  if (price > 0) {
    price -= prices[1];
  }
  removeItem("Apple Macbook Air", quantity.innerHTML, price);
};


addItem3.onclick = () => {
  var i = 2;
  var quantity = document.querySelector("#quantityItem3");
  quantities[i] += 1;
  quantity.innerHTML = quantities[i];
  price += prices[2];
  addItem("Samsung Gear S3 Smartwatch", quantity.innerHTML, price);
};

removeItem3.onclick = () => {
  var i = 2;
  var quantity = document.querySelector("#quantityItem3");
  if (quantities[i] > 0) {
      quantities[i] -= 1;
  }
  quantity.innerHTML = quantities[i];
  if (price > 0) {
    price -= prices[2];
  }
  removeItem("Samsung Gear S3 Smartwatch", quantity.innerHTML, price);
};


addItem4.onclick = () => {
  var i = 3;
  var quantity = document.querySelector("#quantityItem4");
  quantities[i] += 1;
  quantity.innerHTML = quantities[i];
  price += prices[3];
  addItem("Nike Tech Fleece Hoodie", quantity.innerHTML, price);
};

removeItem4.onclick = () => {
  var i = 3;
  var quantity = document.querySelector("#quantityItem4");
  if (quantities[i] > 0) {
      quantities[i] -= 1;
  }
  quantity.innerHTML = quantities[i];
  if (price > 0) {
    price -= prices[3];
  }
  removeItem("Nike Tech Fleece Hoodie", quantity.innerHTML, price);
};


addItem5.onclick = () => {
  var i = 4;
  var quantity = document.querySelector("#quantityItem5");
  quantities[i] += 1;
  quantity.innerHTML = quantities[i];
  price += prices[4];
  addItem("Playstation 5 Pre-Order", quantity.innerHTML, price);
};

removeItem5.onclick = () => {
  var i = 4;
  var quantity = document.querySelector("#quantityItem5");
  if (quantities[i] > 0) {
      quantities[i] -= 1;
  }
  quantity.innerHTML = quantities[i];
  if (price > 0) {
    price -= prices[4];
  }
  removeItem("Playstation 5 Pre-Order", quantity.innerHTML, price);
};


additem6.onclick = () => {
  var i = 5;
  var quantity = document.querySelector("#quantityItem6");
  quantities[i] += 1;
  quantity.innerHTML = quantities[i];
  price += prices[5];
  addItem("Nike CR7 Mercurial Superfly Boots", quantity.innerHTML, price);
};

removeItem6.onclick = () => {
  var i = 5;
  var quantity = document.querySelector("#quantityItem6");
  if (quantities[i] > 0) {
      quantities[i] -= 1;
  }
  quantity.innerHTML = quantities[i];
  if (price > 0) {
    price -= prices[5];
  }
  removeItem("Nike CR7 Mercurial Superfly Boots", quantity.innerHTML, price);
};


// Function to be tested in script.test.js.
// THIS HAS NOTHING TO DO WITH THE WEB APP; It is only here to show that our testing
// infrastructure works
function sum(a, b, c) {
  return a + b + c
}
