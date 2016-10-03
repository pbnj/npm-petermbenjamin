#!/usr/bin/env node

const commander = require('commander')
const chalk = require('chalk')
const packageJson = require('../package.json')
const Table = require('cli-table')
const petermbenjamin = require('../dist/index')

commander.version(packageJson.version)
  .usage('[command]')

commander.command('fullname').alias('f')
  .description('Print Full Name')
  .action(() => {
    console.log(chalk.bold.underline(`${petermbenjamin.name.first} ${petermbenjamin.name.middle} ${petermbenjamin.name.last}`), '|', petermbenjamin.name.title)
  })

commander.command('contact').alias('c')
  .description('Print Contact Info')
  .action(() => {
    const table = new Table({
      head: ['Site', 'Contact'],
      colWidths: [10, 50]
    })
    for (const key in petermbenjamin.contact) {
      table.push([key, petermbenjamin.contact[key]])
    }
    console.log(table.toString())
  })

commander.parse(process.argv)

if (!process.argv.slice(2).length) commander.outputHelp()