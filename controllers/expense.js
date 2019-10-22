const sha256 = require('js-sha256');
const salt = 'expediasalt';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let expenseIndexControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseIndex(req.cookies.user_id, (err, result) => {
        if (result != null) {
        data = {
          result: result
        }
        res.render('expense/index', data);
        } else {
        res.redirect('expense/new');
        }
      });
    } else {
      res.redirect('/login');
    }
  };

  let expenseNewControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      res.render('expense/new');
    } else {
      res.redirect('/login');
    }
  };

  let expenseCreateControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseCreate(req.body, req.cookies.user_id, (err, result) => {
        data = {
          result: result
        }
        res.render('expense/create', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let expenseShowControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseShow(req.params.id, (err, result) => {
        data = {
          result: result
        }
        res.render('expense/show', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let expenseDeleteControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseDelete(req.params.id, (err, result) => {
        res.render('expense/delete');
      });
    } else {
      res.redirect('/login');
    }
  };

  let expenseEditControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseEdit(req.params.id, (err, result) => {
        data = {
          id: req.params.id,
          result : result
        };
        res.render('expense/edit', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let expenseUpdateControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseUpdate(req.body, req.params.id, (err, result) => {
        data = {
          id: req.params.id,
          result : result
        };
        res.render('expense/update', data);
      });
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
    expenseindex: expenseIndexControllerCallback,
    expenseNew: expenseNewControllerCallback,
    expenseCreate: expenseCreateControllerCallback,
    expenseShow: expenseShowControllerCallback,
    expenseDelete: expenseDeleteControllerCallback,
    expenseEdit: expenseEditControllerCallback,
    expenseUpdate: expenseUpdateControllerCallback
  };

}
