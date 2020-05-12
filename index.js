const chalk = require('chalk');
const superheroes = require('superheroes');

const mySuperheroName = superheroes.random();

console.log(chalk.yellow.underline.bold(mySuperheroName));
