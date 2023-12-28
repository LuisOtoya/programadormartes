        const nombre = prompt('Ingrese su nombre:', ''); // prompt > Cada vez que necesitamos ingresar un dato con esta función, aparece una ventana donde cargamos el valor.
        const lugar = prompt('lugar donde vas:', '');
        let   distancia; 
        do {
            distancia = prompt('metros(en numeros)')} while(isNaN(distancia));
    console.log(`Hola ${nombre}, hoy vas a ir a ${lugar}, a ${distancia} metros`)
    document.write(`Hola ${nombre}, hoy vas a ir a  ${lugar}, a ${distancia} metros\n`)
        if
    (distancia <= 1000)
    {console.log('SE RECOMIENDA IR A PIE"'); 
    document.write('SE RECOMIENDA IR A PIE')}
        else if 
    (distancia > 1000 && distancia <= 10000)
        {console.log('SE RECOMIENDA IR EN BICICLETA');
        document.write('SE RECOMIENDA IR EN BICICLETA')}
        else if 
    (distancia > 10000 && distancia <= 30000)
        {console.log('VIAJAR EN COLECTIVO');
        Document.write('VIAJAR EN COLECTIVO')
        }
        else if 
        (distancia > 30000 && distancia <= 100000)
        {console.log('VIAJAR EN AUTO');
        document.write('VIAJAR EN AUTO') }
        else if
        (distancia > 100000)
        {console.log('VIAJAR EN AVION');
        document.write('VIAJAR EN AVION')}
