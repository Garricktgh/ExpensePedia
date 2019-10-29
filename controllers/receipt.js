const sha256 = require('js-sha256');
const cloudinary = require('cloudinary');
const salt = process.env.SALT;

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let receiptEditControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.receipt.receiptEdit(req.params.id, (err, result) => {
        data = {
          req,
          result
        };
        res.render('receipts/edit', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let receiptUpdateControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      if (req.file != undefined) {
        cloudinary.uploader.upload(req.file.path, (result) => {
          db.receipt.receiptUpdate(result, req.params.id, (err, result2) => {
            data = {
              req,
              result
            };
            res.render('receipts/update', data);
          });
        });
      } else {
        data = {
          req
        };
        res.render('errors/upload', data);
      }
    } else {
      res.redirect('/login');
    }
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    receiptEdit: receiptEditControllerCallback,
    receiptUpdate: receiptUpdateControllerCallback
  };

}
