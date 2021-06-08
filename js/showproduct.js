//call my class
const ls=new Local();

//my data
var data = fetch("./products.json")
  .then((response) => response.json())
  .then((data) => {
    return data;
  });

//for back to home
function back() {
  history.back();
}

// show product for add to local storage

showProduct();
function showProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  let item = data.then((res) => {
    return res.find((item) => item.id == id);
  });

  item.then((res) => {
    let output = document.querySelector(".product-add-card");
    let html;
    html = `
      <header>
      <div id="${res.id}" class="product-image-box animate__animated animate__fadeIn">
          <span onclick="back()">
              <i class="fal fa-chevron-left"></i>
          </span>
          <img src="${res.image}" alt="product">
      </div>
    </header>
    <main class="px-4">
          <div class="title-product d-flex justify-content-between">
              <h5>${res.title}</h5>
              <h5>$${res.price}</h5>
          </div>
          <div class="footer-product">
              <span>${res.desc}</span>
              <p class="mt-3">${res.text}</p>
              <div class="text-center pb-3">

                  <button id="btnCard" class="btn-add-card border-0 " onclick="(addToCard(${res.id}))">Add to cart</button>
                
                  <span id="btnLs" class="btn-add-ls m-auto">
                      <span onclick="(dcrease(${res.id}))" id="mines-count">-</span>
                      <span class="mr-2 ml-2" id="count">1</span>
                      <span onclick="(increase(${res.id}))" id="pluse-count">+</span>
                      <i onclick="(removeFromeBasket(${res.id}))" class="fas fa-trash-alt ml-2"></i>
                  </span>

              </div>
          </div>
    </main>
      `;
    output.innerHTML = html;
  });
}

// when click in add to card
function addToCard(id) {
  //none display add to card button
  document.querySelector(".btn-add-card").style.display = "none";
  //block display add to ls button
  document.querySelector(".btn-add-ls").style.display = "block";
  //add to storage
  ls.increase(id);
}

//when click in pluse
function increase(id) {
  // add to storage
  ls.increase(id);
}

//when click in mines
function dcrease(id) {
  ls.dcrease(id)
}

//when click in remove
function removeFromeBasket(id) {
  ls.removeItem(id)
}
// function ali() {
//   var x= document.getElementById('btnCard');
//   console.log(x);
// }
window.addEventListener('load', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  setTimeout(function(){ ls.onloadproduct(id) }, 100);
})