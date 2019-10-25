const sha256 = require('js-sha256');
const salt = process.env.SALT;

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let userNewControllerCallback = (req, res) => {
    res.render('users/new');
  };

  let userCreateControllerCallback = (req, res) => {
    db.user.userCreate(req.body, (err, result) => {
      data = {
        req,
        result
      }
      res.render('users/create', data);
    });
  };

  let userLoginControllerCallback= (req, res) => {
    res.render('users/login');
  };

  let userLoggedInControllerCallback = (req, res) => {
    db.user.userLogin(req.body, (err, result) => {
      if (err) {
        res.send( 'query error' );
      } else {
        if (result.rows.length > 0) {
          let hashedPassword = sha256(req.body.password+salt);
          if (hashedPassword === result.rows[0].password) {
            let user_id = result.rows[0].id;
            let hashedCookie = sha256(user_id + salt);
  
            res.cookie('user_id', user_id);
            res.cookie('hasLoggedIn', hashedCookie);
            res.cookie('username', req.body.username);
            res.redirect('/');
          } else {
            res.status(403).send('wrong password');
          }
        } else {
          res.status(403).send('wrong username');
        }
      }
    });
  };

  let userProfileControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.user.userProfile(req.cookies.user_id, (err, result) => {
        data = {
          req,
          result
        }
        res.render('users/show', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let userLogoutControllerCallback = (req,res)=>{
    res.clearCookie('user_id');
    res.clearCookie('hasLoggedIn');
    res.clearCookie('username');
    res.redirect('/login');
  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    userCreate : userCreateControllerCallback,
    userNew : userNewControllerCallback,
    userLogin: userLoginControllerCallback,
    userLoggedIn: userLoggedInControllerCallback,
    userProfile: userProfileControllerCallback,
    userLogout: userLogoutControllerCallback
  };

}
