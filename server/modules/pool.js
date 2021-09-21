//require pg which is essential for databases
const pg = require('pg');
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: {rejectUnauthorized: false},
    };
} else {
    config = {
        database: 'weekend-to-do-app', 
        host: 'localhost', 
        port: 5432, 
        max: 10, 
        idleTimeoutMillis: 30000 
    };
}
 

const pool = new pg.Pool(config);

//indicate successful connection to postgresql
pool.on("connect", () => {
    console.log("connected to postgres");
});

//indicate connection error
pool.on("error", (err) => {
    console.log("error connecting to postgres", err);
    process.exit(-1);
});

//enables pool data to communicate between server, database, router and client
module.exports = pool;