const productsData = [
    {
    id: 1,
    name: "TV Phillips 24'' - color blanco",
    category: "electro",
    price:  20000,
    img: "./assets/img/electro/tv24.jpg",
    },
    {
    id: 2,
    name: "TV LG 32''",
    category: "electro",
    price:  30000,
    img: "./assets/img/electro/tvLG32.jpg",
    },
    {
    id: 3,
    name: "TV LG 32 Smart''",
    category: "electro",
    price:  40000,
    img: "./assets/img/electro/tvSmart.jpg",
    },
    {
    id: 4,
    name: "AIRE ACONDICIONADO F/C DELONGHI 2250 FRIGORIAS",
    category: "electro",
    price:  20000,
    img: "./assets/img/electro/Delonghi.jpg",
    },
    {
    id: 5,
    name: "AIRE ACONDICIONADO F/C DAEWOO 3250 FRIGORIAS",
    category: "electro",
    price:  30000,
    img: "./assets/img/electro/daewo.jpg",
    },
    {
    id: 6,
    name: "LAVARROPAS WHIRPOOL",
    category: "electro",
    price:  40000,
    img: "./assets/img/electro/lavarropas.jpg",
    },
    {
    id: 7,
    name: "Panel Calefactor",
    category: "electro",
    price:  40000,
    img: "./assets/img/electro/caloventor.jpeg",
    },
    {
    id: 9,
    name: "Silla de cocina",
    category: "sillassillones",
    price:  4000,
    img: "./assets/img/sillas/paulin.jpeg",
    },
    {
    id: 10,
    name: "Sillón Paulin",
    category: "sillassillones",
    price:  4000,
    img: "./assets/img/sillas/cocina.jpg",
    },
    {
    id: 11,
    name: "Butaca 2 cuerpos",
    category: "sillassillones",
    price:  4000,
    img: "./assets/img/sillas/butaca.jpg",
    },
    {
    id: 12,
    name: "Mueble recibidor",
    category: "muebles",
    price:  4000,
    img: "./assets/img/muebles/recibidor.jpeg",
    },
    {
    id: 13,
    name: "Mueble organizador cocina",
    category: "muebles",
    price:  4000,
    img: "./assets/img/muebles/muebleCocina.jpg",
    },
    {
    id: 14,
    name: "Cajonera natural",
    category: "muebles",
    price:  4000,
    img: "./assets/img/muebles/cajonera.jpeg",
    },
    {
    id: 15,
    name: "Cajonera Madera",
    category: "muebles",
    price:  4000,
    img: "./assets/img/muebles/cajoneraMadera.jpeg",
    },
    {
    id: 16,
    name: "Cajonera Blanca",
    category: "muebles",
    price:  4000,
    img: "./assets/img/muebles/cajoneraBlanca.jpeg",
    },
    {
    id: 17,
    name: "Cajonera Negra",
    category: "muebles",
    price:  4000,
    img: "./assets/img/muebles/cajoneraNegra.jpg",
    }, 
    {
    id: 17,
    name: "Mueble Negro",
    category: "muebles",
    price:  4000,
    img: "./assets/img/muebles/muebleNegro.jpg",
    }, 
    {
    id: 18,
    name: "Sommier Queen",
    category: "habitacion",
    price:  4000,
    img: "./assets/img/habitacion/sommier.jpeg",
    }, 
    {
    id: 19,
    name: "Mesa de Luz",
    category: "habitacion",
    price:  4000,
    img: "./assets/img/habitacion/mesaDeLuz.jpeg",
    }, 
    {
    id: 20,
    name: "Balanza ATMA Digital",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/balanza.jpg",
    },
    {
    id: 21,
    name: "Cafetera Dolce Gusto",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/cafetera.jpeg",
    },
    {
    id: 22,
    name: "Lechera espumador",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/lechera.jpeg",
    },
    {
    id: 23,
    name: "Perchero Madera",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/perchero1.jpeg",
    },
    {
    id: 24,
    name: "Perchero Mensula Hierro",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/perchero2.jpeg",
    },
    {
    id: 25,
    name: "Perchero Mensula Hierro",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/perchero3.jpeg",
    },
    {
    id: 26,
    name: "Lampara de Techo",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/lampara.jpeg",
    },
    {
    id: 27,
    name: "Escalera Aluminio",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/escalera.jpeg",
    },
    {
    id: 28,
    name: "Espejo",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/espejo.jpeg",
    },                  
    {
    id: 29,
    name: "Booster",
    category: "varios",
    price:  4000,
    img: "./assets/img/varios/booster.jpeg",
    },   
];


const splitProducts = (size) => {
  let dividedProducts = [];
  for (let i = 0; i < productsData.length; i += size)
    dividedProducts.push(productsData.slice(i, i + size));
  return dividedProducts;
};

const productsController = {
  dividedProducts: splitProducts(30), 
  nextProductsIndex: 1,
  productsLimit: splitProducts(30).length,
};


