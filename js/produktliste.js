const productListContainer = document.querySelector(".product-grid");

fetch("https://kea-alt-del.dk/t7/api/products?limit=100")
  .then(res => res.json())
  .then(data => showProducts(data));

function showProducts(products) {
  products.forEach(element => {
    const markup = `
      <div class="product-card ${element.soldout ? "sold" : ""}" data-id="${element.id}">
        ${element.soldout ? '<span class="sold-out">Sold Out</span>' : ""}

        ${!element.soldout
          ? `<a href="produkt.html?id=${element.id}">
               <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" 
                    alt="${element.productdisplayname}">
             </a>`
          : `<img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" 
                 alt="${element.productdisplayname}">`
        }

        <div class="product-info">
          <div class="product-title">${element.productdisplayname}</div>
          <div class="product-meta">${element.articletype} | ${element.brandname}</div>
          <div class="product-price">
            ${element.discount ? `<span class="old-price">Prev. DKK ${element.price},-</span>` : ""}
            Now DKK ${Math.round(element.price - (element.price * element.discount / 100))},-
          </div>
          ${element.discount ? `<div class="discount">-${element.discount}%</div>` : ""}
          <div class="read-more">Read More</div>
        </div>
      </div>
    `;

    productListContainer.innerHTML += markup;
  });
}






