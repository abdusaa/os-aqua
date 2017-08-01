module.exports = {
    "ui": false,
    "files": [
        'public/index.html',
        'public/assets/css/style.css',
        'public/assets/img/**/*.{png, jpg, jpeg, svg}',
        'public/assets/fonts/**/*.{otf, eot, ttf, svg, woff, woff2}',
        'public/assets/js/*.js'
    ],
    "server": {
        baseDir: 'public',
        index: 'index.html',
    },
    "port": 4000,
    "notify": false,
    "injectChanges": true,
    "reloadDebounce": 800
};