var plates = require('plates')
  , fs     = require('fs')
  , lang   = require('../lang')
  , root   = exports
  , html   = fs.readFileSync(__dirname + "/../views/index.html", 'utf8')
  , files  = {}
  ;

// each languange
for(var key in lang) {
  var data      = lang[key]
    , map       = plates.Map()
    , otherlang = (key === "en" ? "pt" : "en")
    ;

  // first pass for ids
  files[key] = plates.bind(html, data);

  // links for switch language
  data.lang_img  = "./assets/" + otherlang + ".png";
  data.lang_link = "/" + otherlang;

  map.where('id').is('lang_img').use('lang_img').as('src');
  map.where('id').is('lang_a').use('lang_link').as('href');

  // second pass for attributes
  files[key] = plates.bind(files[key], data, map);
}

root.index = function (language) {
  this.res.html(files[language]);
};