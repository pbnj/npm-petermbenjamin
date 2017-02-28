const chalk = require('chalk');
const Table = require('cli-table');
const info = require('./info.json');

/**
 * Full Name
 */
const fullName = () => `${chalk.bold.underline(`${info.name.first} ${info.name.middle} ${info.name.last}`)} | ${info.name.title}`;

/**
 * Contact Info
 * @returns {string} - Table of contact info
 */
const contactInfo = () => {
  const table = new Table({
    head: ['Site', 'Contact'],
    colWidths: [10, 50],
  });
  Object.keys(info.contact).forEach((key) => {
    table.push([key, info.contact[key]]);
  });
  return table;
};

module.exports = {
  fullName,
  contactInfo,
};
