const exec = require('child_process').exec


const browserSyncStart = 'browser-sync start -c config/browserSync.js'
const browserSyncReload = 'browser-sync reload'
const nodemonStart = 'nodemon --config config/nodemon.json'