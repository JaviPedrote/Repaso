(()=>{

    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna Verde";
    const volcanNegro:string = `Volcan Negro`;

    console.log('Mi nombre es: ', batman.toUpperCase());

    console.log(`Mi nombre es: ${linternaVerde.toUpperCase()}`);

    console.log(volcanNegro.charAt(5)); // Imprime la sexta letra de la cadena

    // Imprime la novena letra
    console.log(batman[8]?.toUpperCase || 'No hay novena letra'); 

})();