var config = exports;

['en', 'pt'].forEach(function (lang) {
  config[lang] = require('./' + lang);
});