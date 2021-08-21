const dbstring = require('./index');

console.log(
  JSON.stringify(dbstring('postgres://USER:PASSWORD@HOST:PORT/NAME')),
);
