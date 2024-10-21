const nodemon = require('nodemon');
const browserSync = require('browser-sync').create();

nodemon({
  script: 'server.js',
  ignore: ['**/public/**', 'node_modules'],
})
.on('start', () => {
  browserSync.init({
    proxy: 'http://localhost:3000',
    files: ['*.html', '*.css', '*.js'],
    port: 4000,
  });
})
.on('restart', () => {
  setTimeout(() => {
    browserSync.reload();
  }, 1000);
});
