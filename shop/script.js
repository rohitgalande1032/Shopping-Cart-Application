// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };

// document.addEventListener("DOMContentLoaded", ()=> {
 
  
// })

console.log("Welcome to our store...");
let colors = ["red", "blue", "green", "black", "white"];
let sizes = ["S", "M", "L", "XL"];

if(localStorage.getItem("products")){
  products = JSON.parse(localStorage.getItem("products"));
  console.log("Products: ", products)
  
}else{
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let newData = data.map(product => {
        product.color = colors.slice(Math.floor(Math.random() * 4));
        product.size = sizes.slice(Math.floor(Math.random() * 3));
        return product;
      })
      console.log("New Data: " ,newData)
      localStorage.setItem("products", JSON.stringify(newData));
  })
}


function mensClothings() {
  let mens = JSON.parse(localStorage.getItem("products"));
  let mensCloths = mens.filter((item) => {
    return item.category === "men's clothing";
  })
  console.log("Mens Cloths: ", mensCloths)

  let mensSection = document.getElementById("mens-cloths");


  mensCloths.forEach((product) => {
    mensSection.innerHTML +=
          `<div class="item">
              <img src="${product.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">Price $${product.price}</div>
                  <div class="sized">${product.size}</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating: ${product.rating.rate}</div>
              </div>
              <button id="addBtn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>`
  }) 
}

function womensClothings() {
  let products = JSON.parse(localStorage.getItem("products"));
  let womensCloths = products.filter((item) => {
    return item.category === "women's clothing";
  })
  console.log("Womens Cloths: ", womensCloths)

  let womensSection = document.getElementById("womens-cloths");

  womensCloths.forEach((product) => {
    womensSection.innerHTML +=
          `<div class="item">
              <img src="${product.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">Price $${product.price}</div>
                  <div class="sized">${product.size}</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating: ${product.rating.rate}</div>
              </div>
              <button id="addBtn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>`
  }) 
}

function electronics() {
  let products = JSON.parse(localStorage.getItem("products"));
  let electronics = products.filter((item) => {
    return item.category === "electronics";
  })
  console.log("Womens Cloths: ", electronics)

  let electronicsProduct = document.getElementById("electronics");

  electronics.forEach((product) => {
    electronicsProduct.innerHTML +=
          `<div class="item">
              <img src="${product.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">Price $${product.price}</div>
                  <div class="sized">${product.size}</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating: ${product.rating.rate}</div>
              </div>
              <button id="addBtn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>`
  }) 
}

function jewelery() {
  let products = JSON.parse(localStorage.getItem("products"));
  let jewelery = products.filter((item) => {
    return item.category === "jewelery";
  })
  console.log("jewelery: ", jewelery)

  let jeweleryProduct = document.getElementById("jewelery");

  jewelery.forEach((product) => {
    jeweleryProduct.innerHTML +=
          `<div class="item">
              <img src="${product.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">Price $${product.price}</div>
                  <div class="sized">${product.size}</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating: ${product.rating.rate}</div>
              </div>
              <button id="addBtn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>`
  }) 
}


mensClothings()
womensClothings()
electronics()
jewelery()



