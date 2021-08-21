# postgres-parser

Parses PostgreSQL database URL string and returns values for `user`, `password`, `host`, `port` and database `name`.

## Installation

```
npm install @usheninte/postgres-parser
// OR
yarn add @usheninte/postgres-parser
```

> Do the following to use the package

```js
const dbstring = require('@usheninte/postgres-parser');

const { user, password, host, port, name } = dbstring(
  'postgres://USER:PASSWORD@HOST:PORT/NAME',
);
```

Output from the following test string `postgres://USER:PASSWORD@HOST:PORT/NAME`

```json
{
  "user": "USER",
  "password": "PASSWORD",
  "host": "HOST",
  "port": "PORT",
  "name": "NAME"
}
```
