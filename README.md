[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

[Express'](https://www.npmjs.com/package/express) application generator.

## Installation

```sh
$ npm install -g express-generate-wins
```

## Quick Start

The quickest way to get started with express is to use the `win generate` executable to generate the app as shown below,
with this command you have got some files and folders in your project:
Create the app:

```bash
$ npx wins-genartor <project_name>
```
## env setting
```bash
PORT =<PORT>

DB_NAME = <DB_NAME>
DB_PASSWORD =<DB_PASSWORD>
DB_USERNAME =<DB_USERNAME>
DB_HOST =<DB_PASSWORD>
```

## Informations

default setting my database is postgres sql if your db not postgres sql you
you can install dependencies like mysql 2 for mysql

```bash
# One of the following:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database
```

## Add setup database.js
```bash
dialect = <dialect>
```

## Install dependencies:

```bash
$ npm install
```
Start your Express.js app at `http://localhost:4001/`:

```bash
$ node app.js
```
## License

[MIT](LICENSE)
