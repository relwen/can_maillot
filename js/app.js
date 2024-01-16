// Dom7
var $ = Dom7;

// Theme
var theme = 'md';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Preloader
setTimeout(function () {
    $('.loader-screen').hide();
}, 2000);

// Init App
 var myApp = new Framework7({
  id: 'mr.portfolio',
  el: '#app',
  theme,
  view : {
  pushState: true,
  browserHistory: true,
  },
  
  routes: routes,
   
  popup:{
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'portfolio.mrz',
  },
  
});




