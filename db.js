/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const pg = require('pg');
const url = require('url');
const cloudinary = require('cloudinary');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    port: process.env.port
  };
}

var configForCloudinary;
if( process.env.CLOUDINARY_URL ){   //FOR HEROKU
  configForCloudinary = process.env.CLOUDINARY_URL;
}else{ // FOR LOCAL
  configForCloudinary = {
    "cloud_name": process.env.cloud_name,
    "api_key": process.env.api_key,
    "api_secret": process.env.api_secret
  }
}
cloudinary.config(configForCloudinary);

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const allExpenseModelsFunction = require('./models/expense');

const expenseModelsObject = allExpenseModelsFunction( pool );

const allUserModelsFunction = require('./models/user');

const userModelsObject = allUserModelsFunction( pool );

const allStatisticModelsFunction = require('./models/statistic');

const statisticModelsObject = allStatisticModelsFunction( pool );

const allReceiptModelsFunction = require('./models/receipt');

const receiptModelsObject = allReceiptModelsFunction( pool );

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  /*
   * ADD APP MODELS HERE
   */

  // users: userModelsObject,
  expense: expenseModelsObject,
  user: userModelsObject,
  statistic: statisticModelsObject,
  receipt: receiptModelsObject
};
