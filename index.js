const mysql = require("mysql");
const util = require('util');

class Database {
    constructor(dbName) {
        this.dbName = dbName;
        this.query;
    }
    promisifyQuery(){
        this.query = util.promisify(this.connection.query).bind(this.connection);
    }
    connectRemote(URL) {
        console.log("Connecting to DB");
        this.connection = mysql.createConnection(URL);
        promisifyQuery();
    }
    connectLocal(host,port,user,password) {
        console.log("Connecting to DB");
        this.connection = mysql.createConnection({
            host: host,
            port: port,
            user: user,
            password: password,
            database: this.dbName
        });
        promisifyQuery();
    }
    async executeQuery(textQuery) {
        const rows = await this.query(textQuery);
        return rows;
    }
    disconnect() {
        console.log("Disconnecting DB");
        this.connection.end();
    }
}

module.exports = Database;