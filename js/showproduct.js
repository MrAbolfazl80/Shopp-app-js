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
              <div class="text-center">

                  <button class="btn-add-card border-0 mb-3" onclick="(addToCard(${res.id}))">Add to cart</button>
                
                  <span class="btn-add-ls m-auto mb-3">
                      <span onclick="dcrease()" id="mines-count">-</span>
                      <span id="count">1</span>
                      <span onclick="(increase(${res.id}))" id="pluse-count">+</span>
                      <i onclick="removeFromeBasket()" class="fas fa-trash-alt"></i>
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
  // data.then((res) => {
  //   res.forEach((element) => {
  //     if (element.id == id) {
  //       localStorage.setItem("product", JSON.stringify(element));
  //     }
  //   });
  // });
}

//when click in pluse
function increase(id) {
  // add to storage
  data.then((res) => {
    res.forEach((element) => {
      if (element.id == id) {
        localStorage.setItem("product", JSON.stringify(element));
        let courses;
        if (localStorage.getItem("product ")) {
          courses = JSON.parse(localStorage.getItem("product"));
          console.log(courses);
        } else {
          courses = [];
        }
        return courses;
      }
    });
  });
}

//when click in mines
function dcrease() {
  console.log("mines count");
}

//when click in remove
function removeFromeBasket() {
  console.log("remove");
}
