document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("blancoNegro").addEventListener("click", function () {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        changeParagraphColor("black"); // Cambia el color del texto de los párrafos a negro
    });

    document.getElementById("negroBlanco").addEventListener("click", function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "grey";
        changeParagraphColor("grey"); // Cambia el color del texto de los párrafos a blanco
    });

    function changeParagraphColor(color) {
        var paragraphs = document.getElementsByTagName("p");
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = color;
        }
    }
});


    function mostrarMensaje() {
    alert("Correo enviado con éxito. La información de la reserva ha sido enviada.");
}