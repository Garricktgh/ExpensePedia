const multer = require('multer');
const upload = multer({ dest: './uploads/' });

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
  const statisticControllerCallbacks = require('./controllers/statistic')(allModels);
  const receiptControllerCallbacks = require('./controllers/receipt')(allModels);
  
  //user routes
  app.get('/register', userControllerCallbacks.userNew);
  app.post('/register', userControllerCallbacks.userCreate);
  app.get('/login', userControllerCallbacks.userLogin);
  app.post('/login', userControllerCallbacks.userLoggedIn);
  app.get('/users/profile',userControllerCallbacks.userProfile);
  app.get('/logout', userControllerCallbacks.userLogout);

  //expense routes
  app.get('/', expenseControllerCallbacks.expenseIndex);
  app.get('/expenses/new', expenseControllerCallbacks.expenseNew);
  app.post('/expenses', expenseControllerCallbacks.expenseCreate);
  app.get('/expenses/:id',expenseControllerCallbacks.expenseShow);
  app.get('/expenses/:id/edit', expenseControllerCallbacks.expenseEdit);
  app.put('/expenses/:id', expenseControllerCallbacks.expenseUpdate);
  app.delete('/expenses/:id', expenseControllerCallbacks.expenseDelete);
  app.post('/', expenseControllerCallbacks.expenseSort);

  //statistic routes
  app.get('/statistics/new', statisticControllerCallbacks.statisticNew);
  app.post('/statistics/create', statisticControllerCallbacks.statisticCreate);

  //receipt routes
  app.get('/receipts/:id/edit', receiptControllerCallbacks.receiptEdit);
  app.put('/receipts/:id', upload.single('myFile'), receiptControllerCallbacks.receiptUpdate);
};
