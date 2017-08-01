const chokidar = require('chokidar');
const exec = require('child_process').exec;
const reload = "browser-sync reload";
const html = "npm run build:html";
const css = "npm run build:css";


// Initialize watch for assets like img and fonts
let watchAssets = chokidar.watch(['public/assets/img/**/*.*', 'public/assets/fonts/**/*.*', 'public/assets/js/*.js'], {
  ignored: /[\/\\]\./,
  persistent: true,
  ignoreInitial: true,
});

let log = console.log.bind(console);

// Watch pug file for add, change, and delete.
let watchHTML = chokidar.watch('src/markup/**/*.{pug,jade,html}', {
  ignored: /[\/\\]\./,
  persistent: true
});

watchHTML
  .on('add', path => {
    log(`File ${path} has been added`);
    exec(html, (err, stdout, stderr) => {
      if (err) {
        log(err);
      }

    });
  })
  .on('change', path => {
    log(`File ${path} has been changed`);
    exec(html, (err, stdout, stderr) => {
      if (err) {
        log(err);
      }

    });
  })
  .on('unlink', path => {
    log(`File ${path} has been removed`);
    exec(html, (err, stdout, stderr) => {
      if (err) {
        log(err);
      }

    });
  });