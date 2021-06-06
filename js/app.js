/////////////////////////////////////////////////functions all started////////////////////////////////////////////////
//exit product
function exitProduct(element) {
  let html;
  html = `
          <div id="${element.id}" class="products-item animate__animated animate__fadeInUp show col-6 col-xl-3 col-sm-4 col-md-4 col-lg-3" onclick="getProduct(${element.id})">
          <div class="image-box">
          <img src="${element.image}" class="img-fluid" alt="">
          </div>
          <div class="text-box pt-3">
          <div class="row px-2">
          <div class="div col-9">
          <h6>${element.title}</h6>
          <p>${element.price}</p>
          </div>
          <div class="span mt-3 pr-3">
          <i class="far fa-shopping-cart"></i>
          </div>
          </div>
          </div>
          </div>
        `;
  let output = document.querySelector("#products-box");
  output.innerHTML += html;
}
/////////////////////////////////////////////////functions all ended////////////////////////////////////////////////

///////////////////page index started//////////////////

///////////////fetch products in json
var data = fetch("./products.json")
  .then((response) => response.json())
  .then((data) => {
    return data;
  });

//result 0
productItem();
function productItem() {
  data.then(function (result) {
    result.forEach((element) => {
      exitProduct(element);
    });
  });
}

// Add active class to the current button (highlight it)
acctiveBtn();
function acctiveBtn() {
  var btns = document.getElementsByClassName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("acc");
      current[0].className = current[0].className.replace("acc", "");
      this.className += " acc";
    });
  }
}

///////////gallery Filter js
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("products-item");
  //when click on all
  if (c == "all") {
    for (i = 0; i < x.length; i++) {
      $(x).remove();
    }
    data.then(function (result) {
      result.forEach((element) => {
        exitProduct(element);
      });
    });
  }
  if (c == "tshirt") {
    for (i = 0; i < x.length; i++) {
      $(x).remove();
    }
    data.then(function (result) {
      result.forEach((element) => {
        if (element.category == "tshirt") {
          exitProduct(element);
        }
      });
    });
  }
  if (c == "pants") {
    for (i = 0; i < x.length; i++) {
      $(x).remove();
    }
    data.then(function (result) {
      result.forEach((element) => {
        if (element.category == "pants") {
          exitProduct(element);
        }
      });
    });
  }
}

// //remove class gallery
// function removeClass() {

// }
// //add class gallery
// function addClass() {

// }

///////////////////page index finished//////////////////

///////////////////page product started//////////////////
//get product
function getProduct(id) {
  window.location.href='http://localhost:5500/product.html?id='+id;
}
///////////////////page product finished//////////////////
