window.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelectorAll(".product");
  let buttons = document.querySelectorAll("button");
  let openBtn = document.querySelector(".open");
  let productCart = document.querySelector(".product-cart");

  function createCart() {
    let cart = document.createElement("div"),
      field = document.createElement("div"),
      heading = document.createElement("h2"),
      closeBtn = document.createElement("button");

    cart.classList.add("cart");
    field.classList.add("cart-field");
    closeBtn.classList.add("close");

    heading.textContent = "Tanlangan maxsulotlar";
    closeBtn.textContent = "Yopish";

    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }
  createCart();

  let cart = document.querySelector(".cart"),
    closeBtn = document.querySelector(".close"),
    field = document.querySelector(".cart-field");

  openBtn.addEventListener("click", function () {
    cart.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    cart.style.display = "none";
  });

  buttons.forEach((item, i) => {
    item.addEventListener("click", () => {
      let bg = "white";
      if (bg) {
        item.style.backgroundColor = "red";
        item.style.color = "white";
      }
      //    else {
      //     item.style.backgroundColor = "white";
      //     item.style = "none";
      //   }
      bg = !"white";

      let cloneItem = products[i].cloneNode(true),
        btn = cloneItem.querySelector("button");

      btn.remove();
      field.appendChild(cloneItem);
    });
  });
});
