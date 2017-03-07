//MODULE

"use strict";
var express = require('express');

//Now the module exports a function instead of an object
module.exports = function(client) {
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res) {
        client.query("SELECT id, name, flavor FROM teas;", function(err, result) {
            res.locals.teas = result.rows;
            res.render('index');
        });
    });

    return router;
}
