const sha256 = require('js-sha256');
const salt = 'expediasalt';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let statisticNewControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      res.render('statistics/new');
    } else {
      res.render('/login');
    }
  };

  let statisticCreateControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.statistic.statisticByCategory(req, (err, result) => {
        db.statistic.statisticTotalExpense(req, (err, result2) => {
          data = {
            req,
            result,
            result2
          }
          console.log("result",result);
          console.log("test", req.body)
          console.log("total expense", result2);        
          res.render('statistics/create', data);
       });
      });
    } else {
      res.render('user/login');
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
