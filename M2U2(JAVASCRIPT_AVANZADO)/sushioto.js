document.addEventListener('DOMContentLoaded', function() {
            const h1Element = document.querySelector('h1.titulo2');
            h1Element.addEventListener('click', function() {
                h1Element.style.color = 'green';
            });
        });