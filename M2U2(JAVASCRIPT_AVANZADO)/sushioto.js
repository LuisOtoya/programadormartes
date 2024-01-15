    document.addEventListener('DOMContentLoaded', function() {
            const divElement = document.querySelector('div.horarios');
            divElement.addEventListener('click', function() {
                divElement.style.color = '#0000FF';
            });
        })
        document.addEventListener('DOMContentLoaded', function() {
            const divElement = document.querySelector('div.titulo');
            divElement.addEventListener('click', function() {
                divElement.style.color = '#FF6347';
            });
        })
        document.addEventListener('DOMContentLoaded', function() {
            const divElement = document.querySelector('div.listas');
            divElement.addEventListener('click', function() {
                divElement.style.color = '#708090';
            });
        })
        const textarea = document.getElementById("textarea");
        const charCount =document.getElementById("charCount");
        textarea.addEventListener; 
         function(){
            const text = textarea.Value;
            const remainingChars = 100 - text.length;
            charCount.textContent = remainingChars;
        })
