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

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const query = document.getElementById("searchInput").value.toLowerCase();
        const pageContent = document.body.innerText.toLowerCase();

        if (pageContent.includes(query)) {
            alert(`Se encontró: "${query}" en la página.`);
            // Aquí podrías realizar alguna acción adicional, como resaltar el texto encontrado, mostrarlo en otra parte, etc.
        } else {
            alert(`No se encontró: "${query}" en la página.`);
        }
    });






