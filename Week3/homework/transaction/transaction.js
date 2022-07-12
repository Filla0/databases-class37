import mysql from "mysql";
import { insert_into_account, transfer } from "./transactions-insert-values.js";
import create_tables from "./transactions-create-tables.js";

const Connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "transaction",
});

const execQuery = (query) => {
  Connection.query(query, function (error, results) {
    if (error) throw error;
    console.table(results);
  });
};

async function main() {
  Connection.connect();
  await Promise.all(create_tables.map((query) => execQuery(query)));
  await Promise.all(insert_into_account.map((query) => execQuery(query)));
  await Promise.all(transfer.map((query) => execQuery(query)));
  Connection.end();
}

main();
