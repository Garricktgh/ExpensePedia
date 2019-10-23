module.exports = (app, allModels) => {

  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const expenseControllerCallbacks = require('./controllers/expense')(allModels);
  const userControllerCallbacks = require('./controllers/user')(allModels);
  
  //user routes
  app.get('/register', userControllerCallbacks.userNew);

  app.post('/register', userControllerCallbacks.userCreate);

  app.get('/login', userControllerCallbacks.userLogin);

  app.post('/login', userControllerCallbacks.userLoggedIn);
  
  app.get('/users/:id',userControllerCallbacks.userProfile);

  app.get('/logout', userControllerCallbacks.userLogout);


  //expense routes
  app.get('/', expenseControllerCallbacks.expenseindex);

  app.get('/expenses/new', expenseControllerCallbacks.expenseNew);

  app.post('/expenses', expenseControllerCallbacks.expenseCreate);

  app.get('/expenses/:id',expenseControllerCallbacks.expenseShow);
  
  app.get('/expenses/:id/edit', expenseControllerCallbacks.expenseEdit);
  
  app.put('/expenses/:id', expenseControllerCallbacks.expenseUpdate);

  app.delete('/expenses/:id', expenseControllerCallbacks.expenseDelete);
};
