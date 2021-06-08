//my class
let ls = new Local();
let getStorage = ls.getFromStorage();

//when load page load data on local storage
loadData();
function loadData() {
  let html = "";
  getStorage.forEach((element) => {
    html += `
        <div class="row card-item card-item-${element.id} mb-3">
            <div class="card-item-image col-3">
                <img src="${element.image}" alt="">
            </div>
            <div class="card-item-price col-5 pt-2">
                <h6>${element.title}</h6>
                <p>${element.desc}</p>
                <h4>${element.price}</h4>
            </div>
            <div class="card-item-count col-4 text-center pt-3">
                <i onclick="removeProduct(${element.id})" class="fas fa-trash-alt"></i>
                <div class="count-box">
                    <span onclick="addToCount(${element.id})">+</span>
                    <span id="count${element.id}" class="ml-2 mr-2">${element.count}</span>
                    <span onclick="minesToCount(${element.id})">-</span>
                </div>
            </div>
        </div>
        `;
    document.querySelector(".card-box").innerHTML = html;
  });
}
function addToCount(id) {
  ls.increaseLs(id);
}
function minesToCount(id) {
  ls.dcreaseLs(id);
}
function removeProduct(id) {
  ls.removeItemLs(id);
}

//for Computing price
ls.priceItems();
