// Configure require.js and define directories
requirejs.config({
  urlArgs: "v=" + (new Date()).getTime(),
  // Third party libraries
  baseUrl: 'js/lib',
  // Application path
  paths: {
    app: '../app',
  },
});

// Define and load all libraries
requirejs([
  'jquery.min',
  'modernizr.min',
  'jquery.formalize.min'
],
function ($, modernizr, formalize) {
  // All libraries loaded
});

// Load the main application
requirejs([
  'app/classes/dice.class',
  'app/classes/musictheory.class',
  'app/classes/generator.class',
  'app/main'
],
function (main) {
  // Application loaded
});