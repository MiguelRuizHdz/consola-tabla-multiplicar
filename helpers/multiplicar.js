const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {

        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } ${ 'x'.brightGreen } ${ i } ${ '='.brightGreen } ${ colors.yellow.hidden.underline(base * i) }\n`;
        }

        if (listar) {
            console.log('=================='.green);
            console.log('   Tabla del:'.green, colors.brightRed(base));
            console.log('=================='.green);
            console.log(salida);
            salida = salida.replace(/\x1b\[..?m/g, ''); // Remplaza caracteres de colores
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return `tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};