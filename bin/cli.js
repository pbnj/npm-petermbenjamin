#!/usr/bin/env node

const commander = require('commander');
const chalk = require('chalk');
const packageJson = require('../package.json');
const info = require('../index.js');
const Table = require('cli-table');

commander.version(packageJson.version)
  .usage('[command]');

commander.command('fullname').alias('f')
  .description('Print Full Name')
  .action(() => {
    console.log(chalk.bold.underline(`${info.name.first} ${info.name.middle} ${info.name.last}`), '|', info.name.title);
  });

commander.command('contact').alias('c')
  .description('Print Contact Info')
  .action(() => {
    const table = new Table({
      head: ['Site', 'Contact'],
      colWidths: [10, 50],
    });
    Object.keys(info.contact).forEach((key) => {
      table.push([key, info.contact[key]]);
    });
    console.log(table.toString());
  });

commander.parse(process.argv);

if (!process.argv.slice(2).length) commander.outputHelp();
