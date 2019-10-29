const sha256 = require('js-sha256');
const salt = process.env.SALT;

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let statisticNewControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      data = {
        req
      }
      res.render('statistics/new', data);
    } else {
      res.render('/login');
    }
  };

  let statisticCreateControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.statistic.statisticByCategory(req, (err, result) => {
        if (result != null) {
          db.statistic.statisticTotalExpense(req, (err, result2) => {
            data = {
              req,
              result,
              result2
            }     
            res.render('statistics/create', data);
         });
        } else {
          res.send('no receipts found during time period selected');
        }
      });
    } else {
      res.render('/login');
    }
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    statisticNew: statisticNewControllerCallback,
    statisticCreate: statisticCreateControllerCallback
  };

}
