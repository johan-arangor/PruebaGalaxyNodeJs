const mysql = require("mysql");
const { promisify } = require("util");

const { database } = require("./keys");

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOLE_CONNECTION_LOST") {
      console.error("LLA CONEXION CON LA BASE DE DATOS FUE CERRADA");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("DATABASE HAS TO MANY CONNECTIONS");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("CONEXION A LA BASE DE DATOS RECHAZADA");
    }
  }

  if (connection) connection.release();
  console.log("BASE DE DATOS CONECTADA");

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;
