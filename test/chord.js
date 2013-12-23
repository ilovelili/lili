//vows: async testing lib
var vows = require('vows'),
    assert = require('assert'),
    samantha = require('../dist/samantha.js');

// Utility function
function simpleArray(chord) {
  return chord.notes().map(function(n) { return n.toString(true); });
}

vows.describe('Chords').addBatch({
  'Chord parser': {
    'Emaj7': function() {
      var notes = simpleArray(samantha.chord('Emaj7'));
      assert.deepEqual(notes, ['e', 'g#', 'b', 'd#']);
    },

    'A+': function() {
      var notes = simpleArray(samantha.chord('A+'));
      assert.deepEqual(notes, ['a', 'c#', 'e#']);
    },

    'Bb+': function() {
      var notes = simpleArray(samantha.chord('Bb+'));
      assert.deepEqual(notes, ['bb', 'd', 'f#']);
    },

    'F#maj7': function() {
      var notes = simpleArray(samantha.chord('F#maj7'));
      assert.deepEqual(notes, ['f#', 'a#', 'c#', 'e#']);
    },

    'Hmaj7': function() {
      var notes = simpleArray(samantha.chord('Hmaj7'));
      assert.deepEqual(notes, ['b', 'd#', 'f#', 'a#']);
    },

    'H#maj7': function() {
      var notes = simpleArray(samantha.chord('H#maj7'));
      assert.deepEqual(notes, ['b#', 'dx', 'fx', 'ax']);
    },

    'C7b5': function() {
      var notes = simpleArray(samantha.chord('C7b5'));
      assert.deepEqual(notes, ['c', 'e', 'gb', 'bb']);
    },

    'Eb7b5': function() {
      var notes = simpleArray(samantha.chord('Eb7b5'));
      assert.deepEqual(notes, ['eb', 'g', 'bbb', 'db']);
    },

    'D#7b5': function() {
      var notes = simpleArray(samantha.chord('D#7b5'));
      assert.deepEqual(notes, ['d#', 'fx', 'a', 'c#']);
    },

    'C9': function() {
      var notes = simpleArray(samantha.chord('C9'));
      assert.deepEqual(notes, ['c', 'e', 'g', 'bb', 'd']);
    },

    'Eb9': function() {
      var notes = simpleArray(samantha.chord('Eb9'));
      assert.deepEqual(notes, ['eb', 'g', 'bb', 'db', 'f']);
    },

    'G#(#9)': function() {
      var notes = simpleArray(samantha.chord('G#(#9)'));
      assert.deepEqual(notes, ['g#', 'b#', 'd#', 'f#', 'ax']);
    },

    'Ab(b9)': function() {
      var notes = simpleArray(samantha.chord('Ab(b9)'));
      assert.deepEqual(notes, ['ab', 'c', 'eb', 'gb', 'bbb']);
    },

    'F#(#11)': function() {
      var notes = simpleArray(samantha.chord('F#(#11)'));
      assert.deepEqual(notes, ['f#', 'a#', 'c#', 'e', 'g#', 'b#']);
    },

    'Ab13': function() {
      var notes = simpleArray(samantha.chord('Ab13'));
      assert.deepEqual(notes, ['ab', 'c', 'eb', 'gb', 'bb', 'db', 'f']);
    },

    'C7sus4': function() {
      var notes = simpleArray(samantha.chord('C7sus4'));
      assert.deepEqual(notes, ['c', 'f', 'g', 'bb']);
    },

    'Cmaj9': function() {
      var notes = simpleArray(samantha.chord('Cmaj9'));
      assert.deepEqual(notes, ['c', 'e', 'g', 'b', 'd']);
    },

    'Dmb6': function() {
      var notes = simpleArray(samantha.chord('Dmb6'));
      assert.deepEqual(notes, ['d', 'f', 'a', 'bb']);
    },

    'C#(#5#9)': function() {
      var notes = simpleArray(samantha.chord('C#(#5#9)'));
      assert.deepEqual(notes, ['c#', 'e#', 'gx', 'b', 'dx']);
    },

    'Cm(maj7)': function() {
      var notes = simpleArray(samantha.chord('Cm(maj7)'));
      assert.deepEqual(notes, ['c', 'eb', 'g', 'b']);
    },

    'F#m(11b5b9)': function() {
      var notes = simpleArray(samantha.chord('F#m(11b5b9)'));
      assert.deepEqual(notes, ['f#', 'a', 'c', 'e', 'g', 'b']);
    },

    'C/e': function() {
      var notes = simpleArray(samantha.chord('C/e'));
      assert.deepEqual(notes, ['e', 'c', 'g']);
    },

    'A7/g': function() {
      var notes = simpleArray(samantha.chord('A7/g'));
      assert.deepEqual(notes, ['g', 'a', 'c#', 'e']);
    },

    'G/f#': function() {
      var notes = simpleArray(samantha.chord('G/f#'));
      assert.deepEqual(notes, ['f#', 'g', 'b', 'd']);
    },

    'C6': function() {
      var notes = simpleArray(samantha.chord('C6'));
      assert.deepEqual(notes, ['c', 'e', 'g', 'a']);
    },

    'A#6': function() {
      var notes = simpleArray(samantha.chord('A#6'));
      assert.deepEqual(notes, ['a#', 'cx', 'e#', 'fx']);
    },

    'Bb6': function() {
      var notes = simpleArray(samantha.chord('Bb6'));
      assert.deepEqual(notes, ['bb', 'd', 'f', 'g']);
    },

    'Am6': function() {
      var notes = simpleArray(samantha.chord('Am6'));
      assert.deepEqual(notes, ['a', 'c', 'e', 'f#']);
    },

    'D(#6)': function() {
      var notes = simpleArray(samantha.chord('D(#6)'));
      assert.deepEqual(notes, ['d', 'f#', 'a', 'b#']);
    },

    'Eo': function() {
      var notes = simpleArray(samantha.chord('Eo'));
      assert.deepEqual(notes, ['e', 'g', 'bb']);
    },

    'Eø': function() {
      var notes = simpleArray(samantha.chord('Eø'));
      assert.deepEqual(notes, ['e', 'g', 'bb', 'd']);
    },

    'Do': function() {
      var notes = simpleArray(samantha.chord('Do'));
      assert.deepEqual(notes, ['d', 'f', 'ab']);
    },

    'Dø': function() {
      var notes = simpleArray(samantha.chord('Dø'));
      assert.deepEqual(notes, ['d', 'f', 'ab', 'c']);
    },

    'Fo7': function() {
      var notes = simpleArray(samantha.chord('Fo7'));
      assert.deepEqual(notes, ['f', 'ab', 'cb', 'ebb']);
    },

    'G#ø7': function() {
      var notes = simpleArray(samantha.chord('G#ø7'));
      assert.deepEqual(notes, ['g#', 'b', 'd', 'f#']);
    },

    'Cmin': function() {
      var notes = simpleArray(samantha.chord('Cmin'));
      assert.deepEqual(notes, ['c', 'eb', 'g']);
    },

    'Bmin11': function() {
      var notes = simpleArray(samantha.chord('Bmin11'));
      assert.deepEqual(notes, ['b', 'd', 'f#', 'a', 'c#', 'e']);
    },

    'C+M7': function() {
      var notes = simpleArray(samantha.chord('C+M7'));
      assert.deepEqual(notes, ['c', 'e', 'g#', 'b']);
    },

    'Bbdom7b5': function() {
      var notes = simpleArray(samantha.chord('Bbdom7b5'));
      assert.deepEqual(notes, ['bb', 'd', 'fb', 'ab']);
    },

    'E5': function() {
      var notes = simpleArray(samantha.chord('E5'));
      assert.deepEqual(notes, ['e', 'b']);
    },

    'A5': function() {
      var notes = simpleArray(samantha.chord('A5'));
      assert.deepEqual(notes, ['a', 'e']);
    },

    'C13#9b5': function() {
      var notes = simpleArray(samantha.chord('C13#9b5'));
      assert.deepEqual(notes, ['c', 'e', 'gb', 'bb', 'd#', 'f', 'a']);
    },

    'D13#5b9': function() {
      var notes = simpleArray(samantha.chord('D13#5b9'));
      assert.deepEqual(notes, ['d', 'f#', 'a#', 'c', 'eb', 'g', 'b']);
    },

    'C6/9': function() {
      var notes = simpleArray(samantha.chord('C6/9'));
      assert.deepEqual(notes, ['c', 'e', 'g', 'a', 'd']);
    },

    'Ab6/9': function() {
      var notes = simpleArray(samantha.chord('Ab6/9'));
      assert.deepEqual(notes, ['ab', 'c', 'eb', 'f', 'bb']);
    }
  },

  'Case doesn\'t matter': {
    'BbDom': function() {
      assert.deepEqual(
        simpleArray(samantha.chord('BbDom')),
        simpleArray(samantha.chord('Bbdom'))
      );
    },

    'EbMaj9': function() {
      assert.deepEqual(
        simpleArray(samantha.chord('EbMaj9')),
        simpleArray(samantha.chord('Ebmaj9'))
      );
    },

    'ASus4': function() {
      assert.deepEqual(
        simpleArray(samantha.chord('ASus4')),
        simpleArray(samantha.chord('Asus4'))
      );
    },

    'EAdd9': function() {
      assert.deepEqual(
        simpleArray(samantha.chord('EAdd9')),
        simpleArray(samantha.chord('Eadd9'))
      );
    }
  },

  'Chord Methods': {
    '#quality() of Bmaj7': function() {
      assert.equal(samantha.chord('Bmaj7').quality(), 'major');
    },

    '#quality() of E7': function() {
      assert.equal(samantha.chord('E7').quality(), 'dominant');
    },

    '#quality() of Dbm7b5': function() {
      assert.equal(samantha.chord('Dbm7b5').quality(), 'half-diminished');
    },

    '#quality() of Cmin11': function() {
      assert.equal(samantha.chord('Cmin11').quality(), 'minor');
    },

    '#quality() of A+': function() {
      assert.equal(samantha.chord('A+').quality(), 'augmented');
    },

    '#quality() of A#(b13)': function() {
      assert.equal(samantha.chord('A#(b13)').quality(), 'dominant');
    },

    '#quality() of Gmb5': function() {
      assert.equal(samantha.chord('Gmb5').quality(), 'diminished');
    },

    '#quality() of Asus4': function() {
      assert.equal(samantha.chord('Asus4').quality(), undefined);
    },

    '#quality() of Fm#5': function() {
      assert.equal(samantha.chord('Fm#5').quality(), 'minor');
    },
  }
}).export(module);
