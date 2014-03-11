/*jshint -W079 */
'use strict';
var Marionette = require('backbone.marionette');
var Backbone = require('backbone');

var Router = require('../router');
var Config = require('../models/config');

var app = new Marionette.Application();
var AdminUser = require('../components/pocket/models/user');

//
// set global request handler exposing app config
//
app.reqres.setHandler('config', function () {
  return new Config().toJSON();
});

app.on('initialize:before', function (options) {

  app.hoodieAdmin = new AdminUser().admin;

  // create router instance
  app.router = new Router();

  // create layout manager
  app.rm = new Marionette.RegionManager();

  // log to console in debug mode
  if (options.debug) {
    global.app = app;

    app.vent.on('all', function (evt) {
      console.log(evt);
    });
  }

});

app.on('initialize:after', function () {

  // start router
  if (Backbone.history) {
    Backbone.history.start();
  }

});

module.exports = app;

