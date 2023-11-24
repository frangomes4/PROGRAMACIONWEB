document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("blancoNegro").addEventListener("click", function () {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        changeParagraphColor("black"); 
    });

    document.getElementById("negroBlanco").addEventListener("click", function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "grey";
        changeParagraphColor("grey"); 
    });

    function changeParagraphColor(color) {
        var paragraphs = document.getElementsByTagName("p");
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = color;
        }
    }
});








document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("blancoNegro").addEventListener("click", function () {
        document.body.style.backgroundColor = "silver";
        document.body.style.color = "black";
        changeParagraphColor("black"); 
    });

    document.getElementById("negroBlanco").addEventListener("click", function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "grey";
        changeParagraphColor("grey"); 
    });

    function changeParagraphColor(color) {
        var paragraphs = document.getElementsByTagName("p");
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = color;
        }
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const cartItems = [];

    function mostrarCompra(productName, productPrice) {
        cartItems.push({ name: productName, price: productPrice });
        mostrarCarrito();
    }

    function mostrarCarrito() {
        const carrito = document.getElementById('carrito');
        carrito.innerHTML = ''; 

        let total = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.innerText = `${item.name} - ${item.price}`;
            carrito.appendChild(itemElement);

            
            total += parseFloat(item.price.replace('$', '')); total+=(parseFloat(item.price.replace('$', ''))*999)
        });

        const totalElement = document.createElement('li');
        totalElement.innerText = `Total: $${total}`; total+=(parseFloat(item.price.replace('$', ''))*999);
        carrito.appendChild(totalElement);
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const product = event.target.parentNode;
            const productName = product.querySelector('h3').innerText;
            const productPrice = product.querySelector('p').innerText;

            mostrarCompra(productName, productPrice);

            alert(`"${productName}" ha sido agregado al carrito.`);
        });
    });
});








document.addEventListener("DOMContentLoaded", function () {
    const cartItems = [];

    function mostrarCompra(productName, productPrice) {
        cartItems.push({ name: productName, price: productPrice });
        mostrarCarrito();
    }

    function mostrarCarrito() {
        const carrito = document.getElementById('cart-items');
        carrito.innerHTML = ''; 

        let total = 0;






cartItems.forEach(item => {
    const itemElement = document.createElement('li');
    itemElement.innerText = `${item.name} - ${item.price}`;
    carrito.appendChild(itemElement);

    // Calculamos el total sumando los precios
    total += parseFloat(item.price.replace('$', '')); total+=(parseFloat(item.price.replace('$', ''))*999);
});

const totalElement = document.createElement('li');
totalElement.innerText = `Total: $${total}`;
carrito.appendChild(totalElement);
}

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
button.addEventListener('click', function (event) {
    const product = event.target.parentNode;
    const productName = product.querySelector('h3').innerText;
    const productPrice = product.querySelector('p').innerText;

    mostrarCompra(productName, productPrice);

    alert(`"${productName}" ha sido agregado al carrito.`);
});
});
});


var carrito = {};

function mostrarCompra(id) {
    if (carrito[id]) {
        carrito[id]++;
    } else {
        carrito[id] = 1;
    }
    actualizarCarrito();
    alert('Producto agregado al carrito.');
}

function actualizarCarrito() {
    var carritoItems = document.getElementById('cart-items');
    var totalPrecio = document.getElementById('cart-total');
    carritoItems.innerHTML = '';
    var total = 0;

    for (var id in carrito) {
        var cantidad = carrito[id];
        var producto = obtenerProductoPorId(id);
        var precio = producto.precio;

        var listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre}: ${cantidad} x $${precio} = $${cantidad * precio}`;
        carritoItems.appendChild(listItem);

        total += cantidad * precio;
    }

    totalPrecio.textContent = total;
}

function confirmarPedido() {
  
    alert('Pedido confirmado. El metodo de compra y los medios de pago fueron enviados al mail. Muchas gracias.');
    carrito = {}; 
    actualizarCarrito(); }


function obtenerProductoPorId(id) {
   
    return {
        id: id,
        nombre: 'Nombre del Producto',
        precio: 100 
    };
}

function mostrarCarrito() 
{
    actualizarCarrito();}