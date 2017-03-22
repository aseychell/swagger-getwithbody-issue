'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.echo_filter = function echo_filter (req, res, next) {
  console.log(req.query);
  Default.echo_filter(req.swagger.params, res, next);
};
