const argv = require('yargs')
    .option('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        default: false,
        describe: 'Permite el ingreso de un numero para la multiplicacion'
    })
    .check((arg, options) => {
        if (isNaN(arg.n)) {
            throw ('Error, la variable n debe ser un numero')
        }
        return true;
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Permite listar la tabla de multiplicacion'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Permite un maximo de tamanio de la lista'
    })
    .argv;

module.exports = argv;