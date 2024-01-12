document.addEventListener('DOMContentLoaded', function() {
            const h1Element = document.querySelector('h1.titulo2');
            h1Element.addEventListener('click', function() {
                h1Element.style.color = 'green';
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            const divElement = document.querySelector('div.horarios');
            divElement.addEventListener('click', function() {
                divElement.style.color = 'green';
            });
        });