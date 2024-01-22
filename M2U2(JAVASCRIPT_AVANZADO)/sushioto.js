    document.addEventListener('DOMContentLoaded', function() {
            const divElement = document.querySelector('div.horarios');
            divElement.addEventListener('click', function() {
                divElement.style.backgroundColor = '#0000FF';
                setTimeout(function() {
       divElement.style.backgroundColor = '';
    }, 1000);
            });
        })
        document.addEventListener('DOMContentLoaded', function() {
            const divElement = document.querySelector('div.titulo');
            divElement.addEventListener('click', function() {
                divElement.style.backgroundColor = '#FF6347';
                setTimeout(function() {
       divElement.style.backgroundColor = '';
    }, 1000);
            });
        })
        document.addEventListener('DOMContentLoaded', function() {
            const divElement = document.querySelector('div.listas');
            divElement.addEventListener('click', function() {
                divElement.style.backgroundColor = '#708090';
                setTimeout(function() {
       divElement.style.backgroundColor = '';
    }, 1000);
            });
        })
        function countCharacters(textarea) {
        const charCount = document.getElementById("contador");
        charCount.textContent = textarea.value.length;
    }