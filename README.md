# PETERMBENJAMIN
This is me!

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