const products = [
    { id: 1, name: 'Coca 2.25Ls', price: 3000, imageUrl: 'coca225.jpg' },
    { id: 2, name: 'DR.lemon 1L', price: 2500, imageUrl: 'drlemon.jpg' },
    { id: 3, name: 'Fernet 1L', price: 1600, imageUrl: 'fernet 1L.jpg' },
    { id: 4, name: 'Coca 1.75Ls', price: 3000, imageUrl: 'coca175.jpg' },
    { id: 5, name: 'Coca 500ml', price: 2500, imageUrl: 'coca500.jpg' },
    { id: 6, name: 'Fernet 750ml', price: 1600, imageUrl: 'fernet750.jpg' },
    { id: 7, name: 'Fernet 450ml', price: 3000, imageUrl: 'fernet 450.jpg' },
    { id: 8, name: 'Federico Alvear', price: 2500, imageUrl: 'federico_alvear.jpg' },
    { id: 9, name: 'Cerveza Quilmes', price: 1800, imageUrl: 'quilmes.jpg' },
    { id: 10, name: 'Cerveza Palermo', price: 2000, imageUrl: 'palermo.jpg' },
    { id: 11, name: 'Chandon', price: 500, imageUrl: 'chandon.jpg' },
    { id: 12, name: 'Frizze', price: 1500, imageUrl: 'frizze.jpg' },
    { id: 13, name: 'Gaseosa Fanta', price: 1500, imageUrl: 'fanta.jpg' },
    { id: 14, name:'Vino Malbec', price :1200 ,imageUrl:'vino_malbec.jpg'},
    { id :15, name:'Vino Cabernet Sauvignon', price :1300 ,imageUrl :'vino_cabernet.jpg'},
    { id :16 ,name : "Vodka Smirnoff",price :1500 ,imageUrl : "vodka_smirnoff.jpg" },
    { id :17 ,name : "Tequila Jose Cuervo",price :1800 ,imageUrl : "tequila_jose_cuervo.jpg" },
    { id :18 ,name : "Ron Havana Club",price :1600 ,imageUrl : "ron_havana_club.jpg" },
    { id :19 ,name : "Cerveza Heineken",price :2000 ,imageUrl : "heineken.jpg" },
    { id :20 ,name : "Novecento",price :2000 ,imageUrl : "novecento.jpg" },

   // Bebidas
   {id :21,name :"Speed",price :1700 ,imageUrl :"speed.jpg"},
   {id :22,name :"Aperol",price :1800 ,imageUrl :"aperol.jpg"},
   {id :23,name :"Campari",price :"1900",imageUrl :"campari.jpg"},
   {id :24,name :"Red Bull",price :"1200",imageUrl :"redbull.jpg"},
   {id :25,name :"Jugo de Manzana",price :"1200",imageUrl :"jugo_manzana.jpg"},
   
   // Más bebidas
   {id :26,name :"Skyy",price :"2200",imageUrl :"sky.jpg"},
   {id :27,name :"Sidra 1930",price :"2400",imageUrl :"sidra1930.jpg"},
   {id :28,name :"Sidra 1888",price :"1000",imageUrl :"sidra 1888.jpg"},
   {id :29,name :"Cerveza Imperial",price :"1800",imageUrl :"imperial.jpg"},
   {id :30,name :"Cerveza Schneider",price :"2000",imageUrl :"schneider.jpg"},
   
   // Productos de limpieza
   {id :31,name:"Elegante 4x30",price:"600",imageUrl:"elegante4x30.jpg"},
   {id :32,name:"Elegante 6x30",price:"700",imageUrl:"elegante6x30.jpg"},
   {id :33,name:"Suavizante de Ropa - 1L",price:"800",imageUrl:"suavizante_ropa.jpg"},
   {id :34,name:"Desinfectante en Spray - 500ml",price:"900",imageUrl:"desinfectante_spray.jpg"},
   
   // Alimentos
   {id :35,name:"Arroz Marolio 500g",price:"150",imageUrl:"arroz tobogan.jpg"},
   {id :36,name:"Azúcar - 1kg",price:"200",imageUrl:"azucar ledezma.jpg"},
   {id :37,name:"Harina - 1kg",price:"180",imageUrl:"harina_1kg.jpg"},
   {id :38,name:"Sal - 1kg",price:"50",imageUrl:"sal_1kg.jpg"},
   
   // Más alimentos
   {id :39,name:"Gancia",price:"400",imageUrl:"gancia.jpg"},
   {id :40,name:"Salsa de Tomate - 500g",price:"300",imageUrl:"salsa_tomate_500g.jpg"},
   
   // Continuar hasta el producto número
   // Alimentos continuando
   {id :41,name:"Pasta - Espagueti - 500g",price:"250",imageUrl:"pasta_espagueti_500g.jpg"},
   {id :42,name:"Lentejas - 1kg",price:"300",imageUrl:"lentejas_1kg.jpg"},
   
   // Más productos
   {id :43,name:"Frijoles Negros - 1kg",price:"350",imageUrl:"frijoles_negros_1kg.jpg"},
   {id :44,name:"Leche UHT - 1L",price:"150",imageUrl:"leche_uht_1l.jpg"},
   
   // Más productos de limpieza
   {id :45,name:"Esponjas para Lavado de Platos - Paquete de 3 unidades ",price:"100" ,imageURL:"esponjas_lavado_platos .jpg"}, 
   
   // Más alimentos
   {id :46,name:"Yogur Natural - 500g ",price:"200" ,imageURL:"yogur_natural .jpg"}, 
   
   // Continuar hasta el producto número
   // Productos adicionales para completar los cien
   {id :47,name:'Galletas Chocolinas', price:350,imageUrl:'galletas_chocolinas.jpg'},
   {id :48,name:'Pan de Miga', price:400,imageurl:'pan_de_miga.png'},
   {id :49,name:'Mermelada de Durazno', price:300,imageurl:'mermelada_durazno.png'},
   {id :50,name :"Manaos Cola",price :"2000",imageUrl :"manaoscola.jpg"},
   {id :51,name :"Manaos Lima",price :"2000",imageUrl :"manaoslima.jpg"},
   {id :52,name :"Manaos Pomelo Blanco",price :"2000",imageUrl :"manaospomeloblanco.jpg"},
   {id :53,name :"Manaos Naranja",price :"2000",imageUrl :"manaosnaranja.jpg"},
   {id :54,name :"Don Satur",price :"2000",imageUrl :"don satur.jpg"},
];

let cart = {};
let shippingCost = 0; // Variable para almacenar el costo de envío

// Coordenadas fijas para calcular el envío (tu dirección)
const fixedLocation = {
 lat:-34.767005,
 lng:-58.658215}; // Italia958,GonzálezCatan
const costPerKm =300; // Costo por kilómetro

function renderProducts(filteredProducts = products) {
 const productList = document.getElementById('product-list');
 
 // Ordenar los productos alfabéticamente por nombre
 const sortedProducts = filteredProducts.sort((a,b) => a.name.localeCompare(b.name));

 productList.innerHTML=''; // Limpiar la lista antes de renderizar

 sortedProducts.forEach(product => {
 const productDiv = document.createElement('div');
 productDiv.className='product';
 
 productDiv.innerHTML = `
  <img src="${product.imageUrl}" alt="${product.name}">
  <h2>${product.name}</h2>
  <p>Precio: $${product.price}</p>
  <button onclick="addToCart(${product.id})">Agregar al carrito</button>
`;
 
 productList.appendChild(productDiv);
 });
}

function addToCart(productId) {
 if (cart[productId]) {
 cart[productId].quantity++;
 } else {
 const product = products.find(p => p.id === productId);
 cart[productId] = {...product,
 quantity:
1};
 }

 updateCart();
}

function updateCart() {
 const cartItemsDiv = document.getElementById('cart-items');
 cartItemsDiv.innerHTML=''; // Limpiar contenido previo
 
 let total=0;

 for (const item in cart) {
 const product = cart[item];
 
 const itemDiv = document.createElement('div');
 itemDiv.className='cart-item';
 itemDiv.innerHTML=`
 ${product.name} -$${product.price} x ${product.quantity} 
 <button onclick="changeQuantity(${product.id},-1)">-</button> 
 <button onclick="changeQuantity(${product.id},1)">+</button>
 `;
 
 cartItemsDiv.appendChild(itemDiv);
 
 total += product.price * product.quantity;
 }

 // Sumar el costo de envío al total
 const finalTotal = total + shippingCost;

 document.getElementById('total-price').innerText=`Total:$${finalTotal.toFixed(2)}`;
 document.getElementById('cart-count').innerText=Object.keys(cart).length;
}

function changeQuantity(productId,
 change) {
 if (cart[productId]) {
 cart[productId].quantity += change;

 if (cart[productId].quantity <=
0) {
 delete cart[productId]; // Eliminar producto si la cantidad es cero
 }
 }

 updateCart();
}

function calculateShipping() {
 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(position => {
 const userLocation={
 lat:
 position.coords.latitude,
 lng:
 position.coords.longitude
 };

 // Calcular distancia entre las dos ubicaciones
 const distance=getDistance(fixedLocation,userLocation);
 shippingCost=
 distance * costPerKm; // Calcular costo de envío

 document.getElementById('shipping-cost').innerText=`Costo de envío:$${shippingCost.toFixed(2)} (Distancia:${distance.toFixed(2)} km)`;
 updateCart(); // Actualizar el carrito para reflejar el nuevo costo de envío
 }, () => {
 alert("No se pudo obtener su ubicación.");
 });
 } else {
 alert("La geolocalización no es compatible con este navegador.");
 }
}

// Función para calcular la distancia entre dos puntos
function getDistance(loc1,
 loc2) {
 const R=
6371; // Radio de la Tierra en km
 const dLat=
 degreesToRadians(loc2.lat - loc1.lat);
 const dLon=
 degreesToRadians(loc2.lng - loc1.lng);
 const a=
 Math.sin(dLat /2) * Math.sin(dLat /2) +
 Math.cos(degreesToRadians(loc1.lat)) * Math.cos(degreesToRadians(loc2.lat)) *
 Math.sin(dLon /2) * Math.sin(dLon /2);
 const c=
2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
 return R * c; // Distancia en km
}

// Función auxiliar para convertir grados a radianes
function degreesToRadians(degrees) {
 return degrees * (Math.PI /180);
}

function sendWhatsApp() {
 let message="Lista de compras:\n";
 let totalPrice=0;

 for (const item in cart) {
 const product=cart[item];
 message +=`${product.name} -$${product.price} x ${product.quantity}\n`;
 totalPrice += product.price * product.quantity;
 }

 // Agregar costo de envío al mensaje
 message +=`Costo de envío:$${shippingCost.toFixed(2)}\n`;
 message +=`Total a pagar:$${(totalPrice + shippingCost).toFixed(2)}`;
 
 // Codifica el mensaje para la URL
 const encodedMessage=
 encodeURIComponent(message);
 const phoneNumber="+54 9 1150353429"; // Número de teléfono del vendedor
 const whatsappURL=`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

 window.open(whatsappURL); // Abre la URL en una nueva pestaña
}

// Función para filtrar productos según el texto ingresado en la barra de búsqueda.
function filterProducts() {
 const searchTerm = document.getElementById('search-bar').value.toLowerCase();
 const filteredProducts = products.filter(product => 
     product.name.toLowerCase().includes(searchTerm)
 );

 renderProducts(filteredProducts); // Renderiza solo los productos filtrados.
}

// Inicializar la tienda y renderizar todos los productos al cargar la página.
renderProducts(products);
