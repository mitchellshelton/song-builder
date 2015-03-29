/**
 * Generator Class
 *
 * Requires dice and musictheory classes
 *
 */

// Define the Generator object
function Generator() { }

// Generate a progression for chords or melodies
Generator.prototype.progression_steps = function(length) {

  // Progression must at least have a length of one
  if (length == null) {
    length = 1;
  }

  // Create an instance of a die
  var dice = new Dice();

  // These are tonal steps for generating a "pleasing" pattern.
  // The 1 represents the first note in the pattern with the numbers
  // in the corresponding array representing the position of the next note.
  // This can be used both for chord progressions and melody generation.
  var steps = {
    1: [1, 2, 3, 4, 5, 6, 7],
    2: [4, 5, 7],
    3: [2, 4, 6],
    4: [1, 3, 5, 7],
    5: [1],
    6: [2, 4, 5, 1],
    7: [1, 3]
  };

  // Initialize the progression array
  var progression = [];
  // Generate the first note
  var first_note = dice.roll(1, 7);
  // Initialize the last step placeholder
  var last_step = first_note;

  // Populate the progression
  /**
   * This section needs more work, need a "center" note that we work toward from both ends
   */
  for (var i = 1; i < length; i++) {
    // Get the random index of our step
    var random_step_roll = dice.roll(1, steps[last_step].length) - 1;
    // Define the current step based on our random roll
    var current_step = steps[last_step][random_step_roll];

    // Add the step to the progression array
    progression.push(current_step);
    // Store the last step for the next pass
    var last_step = current_step;
  }
  // Close the progression with the first note
  progression.push(first_note);

  // Return the progression
  return progression;
} // Generator.prototype.progression_steps = function(length)

// Generate a random key
Generator.prototype.random_key = function() {
  // Create an instance of the music theory class
  var theory = new Musictheory();

  // Load the qualities and scales into an array
  var song_scale = theory.song_scale;

  // Create an instance of the dice class
  var dice = new Dice();

  // Roll for quality
  var quality_roll = dice.roll(1, 2);
  if (quality_roll == 1) {
    var quality = 'Major';
  }
  else {
    var quality = 'Minor';
  }

  // Get the number of notes from our selected quality
  var num_notes = song_scale[quality].length;

  // Roll for notes
  var note_roll = dice.roll(1, num_notes) - 1;

  // Get the note
  var note = song_scale[quality][note_roll];

  // Merge the quality and note for the key
  var key = note + ' ' + quality;

  // Return the random key
  return key;
} // Generator.prototype.random_key = function()

//
// Is this useful? This seems to ignore major/minor/diminished, I think I need to return that. Maybe this should
// be converted to be used for melodies and the other method for chords
//
// Return the working chord progression based on a given progression and key
Generator.prototype.working_progression = function(key, progression_steps) {

  // Create an instance of the music theory class
  var theory = new Musictheory();

  // Get the scales
  var scales = theory.scales;

  // Split the key and quality
  var key_parts = key.split(' ');
  var key_only = key_parts[0];
  var quality_only = key_parts[1];

  // Initialize our return array
  var working_progression = [];

  // Get the length of our progression
  var progression_length = progression_steps.length;

  // Loop over our steps
  for (var i = 0; i < progression_length; i++) {
    // Get each step from the scales in the progression
    working_progression.push(scales[quality_only][key_only][progression_steps[i] - 1]);
  }

  // Return our working progression
  return working_progression;
} // Generator.prototype.working_progression = function(key, progression_steps)

/*
function music_progression_chords($progression_steps, $key, $progression) {

  // Load the music theory class
  include_once("music.musictheory.class");
  $theory = new Musictheory();

  // Get the progression pattern and chord table builder
  $chord_progression_pattern = $theory->chord_progression_pattern;
  $chord_tables = $theory->chord_tables;

  // Split the key and quality
  $key_parts = explode(' ', $key);
  $key_only = $key_parts[0];
  $quality_only = $key_parts[1];

  // Initialize our chord array
  $progression_chords = array();

  // Loop over the progression
  for ($i = 0; $i < count($progression_steps); $i++) {

    // Get the pattern letter (this will be upper and lower case roman numerals or an *)
    $pattern = $chord_progression_pattern[$quality_only][$progression_steps[$i] - 1];

    // Get major chord
    if (ctype_upper($pattern) === true) {
      // If the pattern is upper case, we grab the Major chord for this step
      $progression_chords[] = array(
        // Root
        $chord_tables['Major'][$progression[$i]][0],
        // Major Third
        $chord_tables['Major'][$progression[$i]][1],
        // Perfect Fifth
        $chord_tables['Major'][$progression[$i]][2]
      );
    }
    // Get minor chord
    else if (ctype_lower($pattern) === true) {
      // If the pattern is lower case, we grab the Minor chord for this step
      $progression_chords[] = array(
        // Root
        $chord_tables['Minor'][$progression[$i]][0],
        // Minor Third
        $chord_tables['Minor'][$progression[$i]][1],
        // Perfect Fifth
        $chord_tables['Minor'][$progression[$i]][2]
      );
    }
    // Get diminished chord
    if (strstr($pattern, '*') == '*') {
      // If the pattern is contains an '*', we grab the Diminished chord for this step
      $progression_chords[] = array(
        // Root
        $chord_tables['Diminished'][$progression[$i]][0],
        // Third
        $chord_tables['Diminished'][$progression[$i]][1],
        // Fifth
        $chord_tables['Diminished'][$progression[$i]][2]
      );
    }
  }

  // Return the array of chords
  return $progression_chords;
}
*/