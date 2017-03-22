'use strict';

exports.echo_filter = function(args, res, next) {
  /**
   * Query a number of echos
   *
   * request EchoFilter 
   * returns Echo
   **/
  var examples = {};
  examples['application/json'] = {
  "surname" : "aeiou",
  "name" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

