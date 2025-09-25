const productContainer = document.querySelector(".grid_2-3");


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then(res => res.json())
  .then((product) => {
    console.log(product.articletype);

    productContainer.innerHTML = `
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
      <div class="product-info">
        <p>${product.gender} / ${product.category}</p>
        <h1>${product.productdisplayname}</h1>
        <p>${product.price} DKK</p>
        <p>${product.brandname}</p>
        <div class="color">
          <h3>Color:</h3>
          <p>${product.basecolour}</p>
        </div>
        <h4>Size</h4>
        <div class="size">
          <p>S</p>
          <p>M</p>
          <p>L</p>
          <p>XL</p>
        </div>
        <a href="#" class="product-btn">ADD TO BAG</a>
        <div class="p-info">
          <p>${product.description}</p>
        </div>
      </div>`;
  });


