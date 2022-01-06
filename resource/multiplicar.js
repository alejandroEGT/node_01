
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (num = 5, hasta, list) => {

    try {
        const max = hasta;

        let salida = '';

        for (let index = 1; index <= max; index++) {

            salida += `${num} * ${index} =  ${num * index}\n`;

        }

        if (list) {
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);
        return (`tabla-${num}.txt`);
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}
