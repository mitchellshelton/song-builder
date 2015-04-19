// Start the application
main();

function main() {
  // Page setup
  setup();
  // Run the builder
  builder();
}

function setup() {
  // jQuery Actions
  jQuery(document).ready(function ($) {

    $('body').on('click', '.navigation-toggle a', function(event) {
      $('.navigation').toggleClass('hidden');
      event.preventDefault();
    });

    var parrallaxSpeed = 25;
    $(window).on('scroll', function() {
      introchange = 'background-position: center ' + ((window.pageYOffset)/parrallaxSpeed) + 'px';
      builderchange = 'background-position: center ' + ((window.pageYOffset)/parrallaxSpeed) + 'px';
      $('.intro-section-background').attr('style', introchange);
      $('.builder-section-background').attr('style', builderchange);
    });

  });
}

function builder() {
  // Initialize the return value
  var output = '';

  // Create an instance of the object
  var theory = new Musictheory();

  // Using the instance
  output = 'Major Song Scale: ' + theory.song_scale['Major'] + '<br />';
  output += 'Minor Song Scale: ' + theory.song_scale['Minor'] + '<br />';
  output += 'C Major Scale: ' + theory.scales['Major']['C'] + '<br />';
  output += 'Chord Progression Pattern: ' + theory.chord_progression_pattern['Major'] + '<br />';
  output += 'Theoretical Notes: ' + theory.theoretical_notes['Double Flats']['C'] + '<br />';

  var table = theory.chord_table_builder();
  output += 'Chord Table: ' + table['Major']['C'] + '<br />';

  var die = new Dice();
  var results = die.roll(2, 20);
  output += 'Roll Results: ' + results + '<br />';

  var gen = new Generator();
  var progression = gen.progression_steps(4);
  output += 'Progression: ' + progression + '<br />';

  var random_key = gen.random_key();
  random_key = 'C Major';
  output += 'Random Key: ' + random_key + '<br />';


  var working_progression = gen.working_progression(random_key, progression);
  output += 'Working Progression: ' + working_progression + '<br />';

  $('.builder').html(output);
}