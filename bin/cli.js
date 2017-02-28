#!/usr/bin/env node
/* eslint-disable no-console */
const commander = require('commander');
const packageJson = require('../package.json');
const my = require('../index.js');

commander.version(packageJson.version)
  .usage('[command]');

commander.command('fullname').alias('f')
  .description('Print Full Name')
  .action(() => console.log(my.fullName()));

commander.command('contact').alias('c')
  .description('Print Contact Info')
  .action(() => console.log(my.contactInfo().toString()));

commander.parse(process.argv);

if (!process.argv.slice(2).length) commander.outputHelp();
