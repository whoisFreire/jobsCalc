const express = require('express');
const routes = express.Router();

const views = __dirname + '/views/';

const profile = {
  name: 'Leonardo Freire',
  avatar: 'https://github.com/freiiirer.png',
  'monthly-budget': '3000',
  'days-per-week': '5',
  'hours-per-day': '5',
  'vacation-per-year': '4',
};

routes.get('/', (req, res) => res.render(views + 'index', { profile }));
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile }));
routes.get('/job', (req, res) => res.render(views + 'job'));
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'));

module.exports = routes;
