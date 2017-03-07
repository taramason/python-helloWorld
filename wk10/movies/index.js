'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies').then((result) => {
  console.log(result);
  knex.destroy();
})
.catch((err) => {
  console.error(err);
  knex.destroy();
  process.exit(1);
});

//The main difference from jQuery is that Knex promises use the then() and catch() asynchronous functions instead of done() and fail().
