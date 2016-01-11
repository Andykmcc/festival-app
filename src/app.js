require('angular');
require('angular-ui-router');
var states = require('./states');

module.exports = angular.module('am.fest', ['ui.router'])
.config(states);
