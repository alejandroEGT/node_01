const { crearArchivo } = require('./resource/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

// console.log(process.argv)
// const [,,num] = process.argv;
// const [, base] = num.split("=");

const base = argv.num;
const list = argv.list;
const hasta = argv.hasta;

crearArchivo(base, hasta, list)
    .then(res => console.log(res.rainbow, 'CREATED'))
    .catch(err => console.log(err));