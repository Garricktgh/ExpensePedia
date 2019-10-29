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
  app.post('/', expenseControllerCallbacks.expenseSort),
  app.post('/receipts/upload', upload.single('myFile'), expenseControllerCallbacks.receiptUpload)

  //statistic routes
  app.get('/statistics/new', statisticControllerCallbacks.statisticNew);
  app.post('/statistics/create', statisticControllerCallbacks.statisticCreate);

  // app.post('/', upload.single('myFile'), function(req, res) {
  //   cloudinary.uploader.upload(req.file.path, function(result) {
  //     res.send(result);
  //   });
  // });
};
