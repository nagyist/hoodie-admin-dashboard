var BaseModel = require('../helpers/mvc/model');

var Model = BaseModel.extend({

  // TODO: the below should be extended by appconfig
  defaults: {
    app: {
      name: 'appname',
      components: {
        'layout': {
          config: {
            app_template: '../templates/index.hbs',
            login_template: '../templates/login.hbs'
          }
        },
        'sidebar': {
          config: {
            template: null
          }
        },
        'content': {
          config: { }
        }
      }
    },

    api: {
      url: '/_api/'
    },

    ajax: {
      timeout: 10000,
      cache: true,
      async: true
    },

    debug: true
  }

});

module.exports = Model;
