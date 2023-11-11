document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("blancoNegro").addEventListener("click", function () {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        changeParagraphColor("black"); // Cambia el color del texto de los párrafos a negro
    });

    document.getElementById("negroBlanco").addEventListener("click", function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        changeParagraphColor("white"); // Cambia el color del texto de los párrafos a blanco
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
        changeParagraphColor("black"); // Cambia el color del texto de los párrafos a negro
    });

    document.getElementById("negroBlanco").addEventListener("click", function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        changeParagraphColor("white"); // Cambia el color del texto de los párrafos a blanco
    });

    function changeParagraphColor(color) {
        var paragraphs = document.getElementsByTagName("p");
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = color;
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const product = event.target.parentNode;
            const productName = product.querySelector('h3').innerText;
            const productPrice = product.querySelector('p').innerText;
            const productInfo = {
                name: productName,
                price: productPrice
                // Puedes añadir más detalles del producto si es necesario
            };
            cartItems.push(productInfo);
            alert(`"${productName}" TE HEMOS ENVIADO UN MAIL CON LOS MEDIOS DE PAGO.`);
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
        const carrito = document.getElementById('carrito');
        carrito.innerHTML = ''; // Limpiamos para actualizar la lista

        let total = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.innerText = `${item.name} - ${item.price}`;
            carrito.appendChild(itemElement);

            // Calculamos el total sumando los precios
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
        carrito.innerHTML = ''; // Limpiamos para actualizar la lista

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