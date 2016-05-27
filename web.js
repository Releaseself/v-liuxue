var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    keystone = require('keystone'),
    engine   = require('swig');

keystone.set('app', app);
keystone.set('mongoose', mongoose);

keystone.init({
    'name': 'V Liuxue',

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': ['public'],

    'views': 'templates/views',
    'custom engine': engine.renderFile,
    'view engine': 'html',

    'auto update': true,
    'mongo': 'mongodb://localhost/liuxue',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': '55707ff95425e39eb694e537cffe86d1'        // v-liuxue md5

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();