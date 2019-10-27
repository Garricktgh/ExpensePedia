const sha256 = require('js-sha256');
const salt = process.env.SALT;

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let expenseIndexControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseIndex(req.cookies.user_id, (err, result) => {
        data = {
          req,
          result
        }
        if (result != null) {
        res.render('expense/index', data);
        } else {
        res.render('expense/new', data);
        }
      });
    } else {
      res.redirect('/login');
    }
  };

  let expenseNewControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      data = {
        req
      }
      res.render('expense/new', data);
    } else {
      res.redirect('/login');
    }
  };

  let expenseCreateControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseCreate(req.body, req.cookies.user_id, (err, result) => {
        data = {
          req,
          result
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
          req,
          result
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
        data = {
          req
        }
        res.render('expense/delete', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let expenseEditControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseEdit(req.params.id, (err, result) => {
        data = {
          req,
          result
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
          req,
          result
        };
        res.render('expense/update', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let expenseSortControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.expense.expenseSort(req.cookies.user_id, req.body, (err, result) => {
        data = {
          req,
          result
        };
        res.render('expense/indexSort', data);
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
    expenseIndex: expenseIndexControllerCallback,
    expenseNew: expenseNewControllerCallback,
    expenseCreate: expenseCreateControllerCallback,
    expenseShow: expenseShowControllerCallback,
    expenseDelete: expenseDeleteControllerCallback,
    expenseEdit: expenseEditControllerCallback,
    expenseUpdate: expenseUpdateControllerCallback,
    expenseSort: expenseSortControllerCallback
  };

}
