const products = document.querySelector(".products-container");
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const btnLoad = document.querySelector(".btn-load");
const barsBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};


// Renderizar productos

const renderProduct = (product) => {
  const { img, name, description, price, id } = product;

    return `
     <div class="product">
            <img src=${img} alt=${name} />
            <h3>${name}</h3>
            <p>${description}</p>
            <div class="product-offer">
                <p>$${price}</p>
                <a 
                href="https://api.whatsapp.com/send?phone=5491166168493&text=Hola,%20te%20escribo%20por%20la%20venta%20por%20mudanza." target="_blank"
                class="btn-add"
                data-id='${id}'
                data-name='${name}'
                data-price='${price}'
                data-img='${img}'
                >Me interesa</a>
            </div>
     </div>      
    `;
};


const renderDividedProducts = (index = 0) => {
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct) // .map((e) => renderProduct(e))
    .join("");
};

const renderFilteredProducts = (category) => {
  const productsList = productsData.filter(
    (product) => product.category === category
  );
  products.innerHTML = productsList.map(renderProduct).join("");
};

const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    // !undefined === true
    renderDividedProducts(index);
    return;
  }
  renderFilteredProducts(category);
};

// LOGICA DE FILTROS

// funcion para cambiar todos los estados relacionados a los filtros
const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  // necesito cambiar el estado visual de los botones
  changeBtnActiveState(selectedCategory);

};

// funcion para cambiar el estado visual de las categorias (la categoria seleccionada)
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};



const applyFilter = (e) => {
  console.log(e.target.dataset);
  if (!e.target.classList.contains("category")) return;
  changeFilterState(e);
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);

  }
};




  const init = () => {
    renderProducts();
    categories.addEventListener("click", applyFilter);
  
  }
  init (); 