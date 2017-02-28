# PETERMBENJAMIN
> This is me!  

[![NPM](https://nodei.co/npm/petermbenjamin.png)](https://nodei.co/npm/petermbenjamin/)

[![Build Status](https://travis-ci.org/petermbenjamin/npm-petermbenjamin.svg?branch=master)](https://travis-ci.org/petermbenjamin/npm-petermbenjamin)
[![Known Vulnerabilities](https://snyk.io/test/npm/petermbenjamin/badge.svg?style=flat-square)](https://snyk.io/test/npm/petermbenjamin)

I also go by `pbenj` (pronounced _Pee-Bee-En-Jay_, like the sandwich)

## Install
- As a module:
```
npm i --save petermbenjamin
```

- As a CLI:
```
npm i -g petermbenjamin
```

## Usage
- As a module:
```
var pbenj = require('petermbenjamin');
pbenj.name.first      // => "Peter"
pbenj.contact         // { email: "petermbenjamin@gmail.com", ... }
```

- As a CLI:
```
$ pbenj

  Usage: pbenj [command]


  Commands:

    fullname|f   Print Full Name
    contact|c    Print Contact Info

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

$ pbenj f
Peter M Benjamin | Senior Software Engineer
```
