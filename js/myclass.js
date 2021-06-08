class Local {
  productName = "product";
  //when add to local storage
  increase(id) {
    var data = fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    data.then((res) => {
      let item = data.then((res) => {
        return res.find((item) => item.id == id);
      });
      let products = this.getFromStorage();

      //let pItem = products.find((p) => p.id == id);
      const pItem = products.findIndex((p) => {
        return p.id == id;
      });

      if (pItem == -1) {
        item.then((element) => {
          const obj = {
            id: element.id,
            title: element.title,
            desc: element.desc,
            text: element.text,
            price: element.price,
            image: element.image,
            category: element.category,
            count: 1,
          };
          products.push(obj);
          localStorage.setItem(this.productName, JSON.stringify(products));
        });
      } else {
        products[pItem].count++;
        localStorage.setItem(this.productName, JSON.stringify(products));
        let i = (document.querySelector("#count").innerHTML =
          products[pItem].count);
      }
    });
  }
  //when mines from local storage
  dcrease(id) {
    let products = this.getFromStorage();

    //let pItem = products.find((p) => p.id == id);
    const pItem = products.findIndex((p) => {
      return p.id == id;
    });
    if (pItem > -1) {
      if (products[pItem].count > 1) {
        products[pItem].count--;
        localStorage.setItem(this.productName, JSON.stringify(products));
        let i = (document.querySelector("#count").innerHTML =
          products[pItem].count);
      } else {
        //change btn when finish count
        document.querySelector(".btn-add-ls").style.display = "none";
        let btnCard = document.querySelector(".btn-add-card");
        btnCard.style.display = "block";
        btnCard.className = "m-auto border-0 btn-add-card";
        //remove from ls when finish count
        let displayItems = JSON.parse(localStorage.getItem(this.productName));
        displayItems.splice(pItem, 1);
        localStorage.clear();
        localStorage.setItem(this.productName, JSON.stringify(displayItems));
      }
    }
  }

  //when remove from local storage
  removeItem(id) {
    let products = this.getFromStorage();

    //let pItem = products.find((p) => p.id == id);
    const pItem = products.findIndex((p) => {
      return p.id == id;
    });
    let displayItems = JSON.parse(localStorage.getItem(this.productName));
    displayItems.splice(pItem, 1);
    localStorage.clear();
    localStorage.setItem(this.productName, JSON.stringify(displayItems));
    //change buttons
    document.querySelector(".btn-add-ls").style.display = "none";
    let btnCard = document.querySelector(".btn-add-card");
    btnCard.style.display = "block";
    btnCard.className = "m-auto border-0 btn-add-card";
  }
  //local saving
  getFromStorage() {
    let products;

    // if courses exist before
    if (localStorage.getItem(this.productName)) {
      products = JSON.parse(localStorage.getItem(this.productName));
    } else {
      products = [];
    }
    return products;
  }

  onloadproduct(id) {
    let products = this.getFromStorage();
    if (products.length > 0) {
      //reload count
      const pItem = products.findIndex((p) => {
        return p.id == id;
      });
      //change btn when finish count
      if (pItem > -1) {
        let btnCard = document.querySelector(".btn-add-card");
        btnCard.style.display = "none";
        btnCard.className = "m-auto border-0 btn-add-card";
        document.querySelector(".btn-add-ls").style.display = "block";
        document.querySelector("#count").innerHTML = products[pItem].count;
      }
    }
  }

  increaseLs(id) {
    var data = fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    data.then((res) => {
      let item = data.then((res) => {
        return res.find((item) => item.id == id);
      });
      let products = this.getFromStorage();

      //let pItem = products.find((p) => p.id == id);
      const pItem = products.findIndex((p) => {
        return p.id == id;
      });

      if (pItem == -1) {
        item.then((element) => {
          const obj = {
            id: element.id,
            title: element.title,
            desc: element.desc,
            text: element.text,
            price: element.price,
            image: element.image,
            category: element.category,
            count: 1,
          };
          products.push(obj);
          localStorage.setItem(this.productName, JSON.stringify(products));
        });
      } else {
        products[pItem].count++;
        localStorage.setItem(this.productName, JSON.stringify(products));
        let i = (document.querySelector("#count" + id).innerHTML =
          products[pItem].count);
      }
    });
    this.priceItems();
  }
  dcreaseLs(id) {
    let products = this.getFromStorage();

    //let pItem = products.find((p) => p.id == id);
    const pItem = products.findIndex((p) => {
      return p.id === id;
    });
    if (pItem > -1) {
      if (products[pItem].count > 1) {
        products[pItem].count--;
        localStorage.setItem(this.productName, JSON.stringify(products));
        let i = (document.querySelector("#count" + id).innerHTML =
          products[pItem].count);
      }
    }
    this.priceItems();
  }
  removeItemLs(id) {
    let products = this.getFromStorage();

    //let pItem = products.find((p) => p.id == id);
    const pItem = products.findIndex((p) => {
      return p.id == id;
    });
    let displayItems = JSON.parse(localStorage.getItem(this.productName));
    displayItems.splice(pItem, 1);
    localStorage.clear();
    localStorage.setItem(this.productName, JSON.stringify(displayItems));
    //change buttons
    document.querySelector(".card-item-" + id).style.display = "none";
    this.priceItems();
  }
  priceItems() {
    let products = this.getFromStorage();
    let computing = 0;
    products.forEach((element) => {
      computing += element.price * element.count;
    });
    document.querySelector("#showPrice").innerHTML = `$${computing}`;
  }

  //check icon fo tiked
  checkIcon(id) {
    console.log("hi");
    var data = fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    let products = this.getFromStorage();
    let item = data.then((res) => {
      res.forEach((element) => {
        if (element.id == id) {
          localStorage.setItem(this.productName, JSON.stringify(element));
          this.className = "far fa-check";
        }
      });
    });
  }
}
