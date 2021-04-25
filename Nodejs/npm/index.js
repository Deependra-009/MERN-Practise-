const chalk = require('chalk');
const c=require('chalk');
const validator= require('validator');

// console.log(c.red('deepu'));
// console.log(c.red.italic('deepu'));
// console.log(c.red.underline('deepu'));
// console.log(c.red.inverse('deepu'));

// console.log(c.green.inverse('success'));

const res=validator.isEmail("deepu@gmail.mom");
console.log(res? chalk.green.inverse(res):chalk.red.inverse(res));
