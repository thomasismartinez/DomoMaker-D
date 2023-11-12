const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  console.log('entering jouter.js > router(app)');
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  console.log('survived line 5');
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.get('/maker', mid.requiresLogin, controllers.Domo.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Domo.makeDomo);

  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
