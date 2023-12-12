        const nombre = prompt('Ingrese su nombre:', ''); // prompt > Cada vez que necesitamos ingresar un dato con esta función, aparece una ventana donde cargamos el valor.
        const lugar = prompt('lugar donde vas:', '');
        let   distancia; do {distancia = prompt('metros(en numeros)')} while(isNaN(distancia));
    console.log(`Hola ${nombre}, hoy vas a ir a ${lugar}, a ${distancia} metros`)
    document.write(`Hola ${nombre}, hoy vas a ir a  ${lugar}, a ${distancia} metros\n`)
        if
    (distancia <= 1000)
    {console.log('caminar a pie"'); 
    document.write('CAMINAR A PIE')}
        else {
    (distancia > 1000 === 10000)
        {console.log('IR EN BICICLETA');
        document.write('IR EN BICICLETA')}}
        else {
    (distancia > 10000 === 30000)
        {console.log('VIAJAR EN COLECTIVO');
        Document.write('VIAJAR EN COLECTIVO')}
        }
