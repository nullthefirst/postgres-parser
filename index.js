// postgres://USER:PASSWORD@HOST:PORT/NAME

const parserCore = (dbUrl, delimiter) => {
  // initialize element base variable to empty string
  let element_ = '';

  // initialize database string
  let databaseUrl = `${dbUrl}`;

  for (let char of databaseUrl) {
    // iterate through trimmed database url
    element_ += char; // add characters to element base variable
    if (char === delimiter) {
      break; // break at selected character
    }
  }

  // trim element base variable
  element = element_.split('');
  element.pop();
  element = element.join('');

  // trim database url, remove element
  databaseUrl = databaseUrl.slice(element_.length);

  // return database url, and element
  return [databaseUrl, element];
};

const databaseUrlPostgresParser = (databaseUrl) => {
  // remove "postgres://" from database url
  let dbUrl = databaseUrl.slice(11);

  // extract trimmed database url and user value
  let [userTrimmed, user] = parserCore(dbUrl, ':');

  // extract trimmed database url and password value
  let [passwordTrimmed, password] = parserCore(userTrimmed, '@');

  // extract trimmed database url and host value
  let [hostTrimmed, host] = parserCore(passwordTrimmed, ':');

  // extract trimmed name value and port value
  let [dbName, port] = parserCore(hostTrimmed, '/');

  // return object with values and keys for relevant elements
  return {
    user: user,
    password: password,
    host: host,
    port: port,
    name: dbName,
  };
};

module.exports = databaseUrlPostgresParser;
