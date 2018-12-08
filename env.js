const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://patel:patel@ds153752.mlab.com:53752/civilized'; // Databse URI and database name
  process.env.databaseName = 'production database: civilized'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/civilized'; // Databse URI and database name
  process.env.databaseName = 'development database: civilized'; // Database name
}
