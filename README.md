# mysql-sync-query

#### 02/17/2020

#### By Siavash Ashkiani
​
## Description
Extends the mysql package to
* 1- Promisify the database connection object. 
* 2- Provide a method for executing queries synchronously.

## Setup/Installation Requirements
​
* Run command: npm install mysql-sync-query
* Declare a variable/constant to require the installed package e.g. let db = require("mysql-sync-query");
* The defined variable in the last step represents a class with a constructor that takes an existing database name. e.g. let databaseObject = new db("employees_db");
* 

## Methods
#### connectLocal
Connects Node to an existing local MySQL server.
Parameters:
* host - host name e.g. localHost
* port - database connection port e.g. 3306
* user - database login username
* password - database login password

#### connectRemote
Connects Node to an existing remote MySQL server.
Parameters:
* URL - e.g. process.env.JAWSDB_URL

#### executeQuery
Executes the input query and returns the affected rows
Parameters:
* textQuery - the SQL query string e.g. "SELECT * FROM table_name"
Returns:
* a JSON object that contains database records.

#### disconnect
Terminates the connection.​

## Example

const db = require("mysql-sync-query");
const dbObj = new db("employees_db");

async function start() {
    dbObj.connectLocal("localHost", 3306, "user", "password");
    try {
        let res = await dbObj.executeQuery("SELECT * FROM employee");
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        dbObj.disconnect();
    }
}

start();

## Known Bugs

None - at this time​.

​
## Support and contact details
​
Please email us for further questions at ashkiani@yahoo.com
​
## Technologies Used
​
Node.js, MySQL

​
## Contribution Guidlines 
​
Direct link to package: https://www.npmjs.com/package/mysql-sync-query
​
### License
​
Copyright(c) 2020 By Siavash Ashkiani
​
This software is licensed under MIT license.