const sha256 = require('js-sha256');
const salt = process.env.SALT;

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let receiptEdit = (values, callback) => {
    const queryArray = [parseInt(values)];
    const queryString = 'SELECT * from expenses where ID = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let receiptUpdate = (v1, v2, callback) => {
    const queryArray = [v1.secure_url, v2];
    const queryString = 'UPDATE expenses SET receipt_img = $1 where id = $2 RETURNING *';
    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult);
        }else{
          callback(null, null);
        }
      }
    });
  };

  return {
    receiptEdit,
    receiptUpdate
  };
};
