/**
 * Music Theory Class
 */

// Define the class
function Musictheory() {

  // Initialize the public arrays
  var song_scale = [];
  var scales = [];
  var chord_progression_pattern = [];
  var theoretical_notes = [];

  // Define the major and minor scales
  song_scale = {
    'Major': [
      "C",
      "G",
      "D",
      "A",
      "E",
      "B",
      "Gb",
      "F#",
      "Db",
      "Ab",
      "Eb",
      "Bb",
      "F"
    ],
    'Minor': [
      "A",
      "E",
      "B",
      "F#",
      "C#",
      "G#",
      "Eb",
      "D#",
      "Bb",
      "F",
      "C",
      "G",
      "D"
    ]
  };

  // Diatonic scales
  scales = {
    // # = sharp, b = flat, ## = double sharp, bb = double flat
    // Major Scales
    "Major": {
      "Cb": ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
      "C": ["C", "D", "E", "F", "G", "A", "B"],
      "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
      "Db": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
      "D": ["D", "E", "F#", "G", "A", "B", "C#"],
      "D#": ["D#", "E#", "F##", "G#", "A#", "B#", "C##"],
      "Eb": ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
      "E": ["E", "F#", "G#", "A", "B", "C#", "D#"],
      "E#": ["E#", "F##", "G##", "A#", "B#", "C##", "D##"],
      "Fb": ["Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"],
      "F": ["F", "G", "A", "Bb", "C", "D", "E"],
      "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
      "Gb": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
      "G": ["G", "A", "B", "C", "D", "E", "F#"],
      "G#": ["G#", "A#", "B#", "C#", "D#", "E#", "F##"],
      "Ab": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
      "A": ["A", "B", "C#", "D", "E", "F#", "G#"],
      "A#": ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
      "Bb": ["Bb", "C", "D", "Eb", "F", "G", "A"],
      "B": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
      "B#": ["B#", "C##", "D##", "E#", "F##", "G##", "A##"]
    },
    // Minor Scales
    "Minor": {
      "Cb": ["Cb", "Db", "Ebb", "Fb", "Gb", "Abb", "Bbb"],
      "C": ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
      "C#": ["C#", "D#", "E", "F#", "G#", "A", "B"],
      "Db": ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
      "D": ["D", "E", "F", "G", "A", "Bb", "C"],
      "D#": ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
      "Eb": ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
      "E": ["E", "F#", "G", "A", "B", "C", "D"],
      "E#": ["E#", "F##", "G#", "A#", "B#", "C#", "D#"],
      "Fb": ["Fb", "Gb", "Abb", "Bbb", "Cb", "Dbb", "Ebb"],
      "F": ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
      "F#": ["F#", "G#", "A", "B", "C#", "D", "E"],
      "Gb": ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "Fb"],
      "G": ["G", "A", "Bb", "C", "D", "Eb", "F"],
      "G#": ["G#", "A#", "B", "C#", "D#", "E", "F#"],
      "Ab": ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
      "A": ["A", "B", "C", "D", "E", "F", "G"],
      "A#": ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
      "Bb": ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
      "B": ["B", "C#", "D", "E", "F#", "G", "A"],
      "B#": ["B#", "C##", "D#", "E#", "F##", "G#", "A#"]
    }
  };

  chord_progression_pattern = {
    // lower case i = minor, upper case I = major, * = diminished
    "Major": ["I", "ii", "iii", "IV", "V", "vi", "vii*"],
    "Minor": ["i", "ii*", "III", "iv", "v", "VI", "VII"]
  };

  theoretical_notes = {
    "Double Flats": {
      "C": "Bb",
      "D": "C",
      "E": "D",
      "F": "Eb",
      "G": "F",
      "A": "G",
      "B": "A"
    },
    "Double Sharps": {
      "C": "D",
      "D": "E",
      "E": "F#",
      "F": "G",
      "G": "A",
      "A": "B",
      "B": "C#"
    },
    "Enharmonics": {
      "E#": "F",
      "B#": "C",
      "Fb": "E",
      "Cb": "B"
    }
  };

  // Assign created variables to the appropriate scope
  this.song_scale = song_scale;
  this.scales = scales;
  this.chord_progression_pattern = chord_progression_pattern;
  this.theoretical_notes = theoretical_notes;

} // function Musictheory()

// Create the table of chords based on provided array data
Musictheory.prototype.chord_table_builder = function() {
  // Initialize the return variable
  var tables = [];

  tables = {
    // Chord -> Root, Major third, Perfect fifth
    "Major": {
      "C": [this.scales["Major"]["C"][0],
            this.scales["Major"]["C"][2],
            this.scales["Major"]["C"][4]
      ],
      "Cb": [this.scales["Major"]["Cb"][0],
             this.scales["Major"]["Cb"][2],
             this.scales["Major"]["Cb"][4]
      ],
      "C":  [this.scales["Major"]["C"][0],
             this.scales["Major"]["C"][2],
             this.scales["Major"]["C"][4]
      ],
      "C#": [this.scales["Major"]["C#"][0],
             this.scales["Major"]["C#"][2],
             this.scales["Major"]["C#"][4]
      ],
      "Db": [this.scales["Major"]["Db"][0],
            this.scales["Major"]["Db"][2],
            this.scales["Major"]["Db"][4]
      ],
      "D": [this.scales["Major"]["D"][0],
            this.scales["Major"]["D"][2],
            this.scales["Major"]["D"][4]
      ],
      "D#": [this.scales["Major"]["D#"][0],
            this.scales["Major"]["D#"][2],
            this.scales["Major"]["D#"][4]
      ],
      "Eb": [this.scales["Major"]["Eb"][0],
            this.scales["Major"]["Eb"][2],
            this.scales["Major"]["Eb"][4]
      ],
      "E": [this.scales["Major"]["E"][0],
            this.scales["Major"]["E"][2],
            this.scales["Major"]["E"][4]
      ],
      "E#": [this.scales["Major"]["E#"][0],
            this.scales["Major"]["E#"][2],
            this.scales["Major"]["E#"][4]
      ],
      "Fb": [this.scales["Major"]["Fb"][0],
            this.scales["Major"]["Fb"][2],
            this.scales["Major"]["Fb"][4]
      ],
      "F": [this.scales["Major"]["F"][0],
            this.scales["Major"]["F"][2],
            this.scales["Major"]["F"][4]
      ],
      "F#": [this.scales["Major"]["F#"][0],
            this.scales["Major"]["F#"][2],
            this.scales["Major"]["F#"][4]
      ],
      "Gb": [this.scales["Major"]["Gb"][0],
            this.scales["Major"]["Gb"][2],
            this.scales["Major"]["Gb"][4]
      ],
      "G": [this.scales["Major"]["G"][0],
            this.scales["Major"]["G"][2],
            this.scales["Major"]["G"][4]
      ],
      "G#": [this.scales["Major"]["G#"][0],
            this.scales["Major"]["G#"][2],
            this.scales["Major"]["G#"][4]
      ],
      "Ab": [this.scales["Major"]["Ab"][0],
            this.scales["Major"]["Ab"][2],
            this.scales["Major"]["Ab"][4]
      ],
      "A": [this.scales["Major"]["A"][0],
            this.scales["Major"]["A"][2],
            this.scales["Major"]["A"][4]
      ],
      "A#": [this.scales["Major"]["A#"][0],
            this.scales["Major"]["A#"][2],
            this.scales["Major"]["A#"][4]
      ],
      "Bb": [this.scales["Major"]["Bb"][0],
            this.scales["Major"]["Bb"][2],
            this.scales["Major"]["Bb"][4]
      ],
      "B": [this.scales["Major"]["B"][0],
            this.scales["Major"]["B"][2],
            this.scales["Major"]["B"][4]
      ],
      "B#": [this.scales["Major"]["B#"][0],
            this.scales["Major"]["B#"][2],
            this.scales["Major"]["B#"][4]
      ]
    },
    // Chord -> Root, Minor third, Perfect fifth
    "Minor": {
      "Cb": [this.scales["Minor"]["Cb"][0],
             this.scales["Minor"]["Cb"][2],
             this.scales["Minor"]["Cb"][4]
      ],
      "C": [this.scales["Minor"]["C"][0],
            this.scales["Minor"]["C"][2],
            this.scales["Minor"]["C"][4]
      ],
      "C#": [this.scales["Minor"]["C#"][0],
             this.scales["Minor"]["C#"][2],
             this.scales["Minor"]["C#"][4]
      ],
      "Db": [this.scales["Minor"]["Db"][0],
             this.scales["Minor"]["Db"][2],
             this.scales["Minor"]["Db"][4]
      ],
      "D" : [this.scales["Minor"]["D"][0],
             this.scales["Minor"]["D"][2],
             this.scales["Minor"]["D"][4]
      ],
      "D#": [this.scales["Minor"]["D#"][0],
             this.scales["Minor"]["D#"][2],
             this.scales["Minor"]["D#"][4]
      ],
      "Eb": [this.scales["Minor"]["Eb"][0],
             this.scales["Minor"]["Eb"][2],
             this.scales["Minor"]["Eb"][4]
      ],
      "E": [this.scales["Minor"]["E"][0],
            this.scales["Minor"]["E"][2],
            this.scales["Minor"]["E"][4]
      ],
      "E#": [this.scales["Minor"]["E#"][0],
             this.scales["Minor"]["E#"][2],
             this.scales["Minor"]["E#"][4]
      ],
      "Fb": [this.scales["Minor"]["Fb"][0],
             this.scales["Minor"]["Fb"][2],
             this.scales["Minor"]["Fb"][4]
      ],
      "F": [this.scales["Minor"]["F"][0],
            this.scales["Minor"]["F"][2],
            this.scales["Minor"]["F"][4]
      ],
      "F#": [this.scales["Minor"]["F#"][0],
             this.scales["Minor"]["F#"][2],
             this.scales["Minor"]["F#"][4]
      ],
      "Gb": [this.scales["Minor"]["Gb"][0],
             this.scales["Minor"]["Gb"][2],
             this.scales["Minor"]["Gb"][4]
      ],
      "G": [this.scales["Minor"]["G"][0],
            this.scales["Minor"]["G"][2],
            this.scales["Minor"]["G"][4]
      ],
      "G#": [this.scales["Minor"]["G#"][0],
             this.scales["Minor"]["G#"][2],
             this.scales["Minor"]["G#"][4]
      ],
      "Ab": [this.scales["Minor"]["Ab"][0],
             this.scales["Minor"]["Ab"][2],
             this.scales["Minor"]["Ab"][4]
      ],
      "A": [this.scales["Minor"]["A"][0],
            this.scales["Minor"]["A"][2],
            this.scales["Minor"]["A"][4]
      ],
      "A#": [this.scales["Minor"]["A#"][0],
             this.scales["Minor"]["A#"][2],
             this.scales["Minor"]["A#"][4]
      ],
      "Bb": [this.scales["Minor"]["Bb"][0],
             this.scales["Minor"]["Bb"][2],
             this.scales["Minor"]["Bb"][4]
      ],
      "B": [this.scales["Minor"]["B"][0],
            this.scales["Minor"]["B"][2],
            this.scales["Minor"]["B"][4]
      ],
      "B#": [this.scales["Minor"]["B#"][0],
             this.scales["Minor"]["B#"][2],
             this.scales["Minor"]["B#"][4]
      ]
    },
    "Diminished": {
      // # = sharp, b = flat, ## = double sharp, bb = double flat
      "C": ["Cb", "Ebb", "Gbb"],
      "C": ["C", "Eb", "Gb"],
      "C#": ["C#", "E", "G"],
      "Db": ["Db", "Fb", "Abb"],
      "D": ["D", "F", "Ab"],
      "D#": ["D#", "F#", "A"],
      "Eb": ["Eb", "Gb", "Bbb"],
      "E": ["E", "G", "Bb"],
      "E#": ["E#", "G#", "B"],
      "Fb": ["Fb", "Abb", "Cbb"],
      "F": ["F", "Ab", "Cb"],
      "F#": ["F#", "A", "C"],
      "Gb": ["Gb", "Bbb", "Dbb"],
      "G": ["G", "Bb", "Db"],
      "G#": ["G#", "B", "D"],
      "Ab": ["Ab", "Cb", "Ebb"],
      "A": ["A", "C", "Eb"],
      "A#": ["A#", "C#", "E"],
      "Bb": ["Bb", "Db", "Fb"],
      "B": ["B", "D", "F"],
      "B#": ["B#", "D#", "F#"]
    }
  };

  // Assign appropriate scope to the return variable
  this.tables = tables;

  // Return the array of tables
  return this.tables;
}; // Musictheory.prototype.chord_table_builder = function()