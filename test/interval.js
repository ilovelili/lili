//vows: async testing lib
var vows = require('vows'),
    assert = require('assert'),
    samantha = require('../dist/samantha.js');

vows.describe('Intervals').addBatch({
  'Relative Intervals': {
    topic: function() {
      return samantha.note('F#,');
    },

    'Doubly diminished second': function(note) {
      assert.deepEqual(note.interval('dd2'), samantha.note('Gbb,'));
    },

    'Diminished second': function(note) {
      assert.deepEqual(note.interval('d2'), samantha.note('Gb,'));
    },

    'Minor second': function(note) {
      assert.deepEqual(note.interval('m2'), samantha.note('G,'));
    },

    'Major second': function(note) {
      assert.deepEqual(note.interval('M2'), samantha.note('G#,'));
    },

    'Augmented second': function(note) {
      assert.deepEqual(note.interval('A2'), samantha.note('Gx,'));
    },

    'Doubly diminished third': function(note) {
      assert.deepEqual(note.interval('dd3'), samantha.note('Abb,'));
    },

    'Diminished third': function(note) {
      assert.deepEqual(note.interval('d3'), samantha.note('Ab,'));
    },

    'Minor third': function(note) {
      assert.deepEqual(note.interval('m3'), samantha.note('A,'));
    },

    'Major third': function(note) {
      assert.deepEqual(note.interval('M3'), samantha.note('A#,'));
    },

    'Augmented third': function(note) {
      assert.deepEqual(note.interval('A3'), samantha.note('Ax,'));
    },

    'Doubly diminished fourth': function(note) {
      assert.deepEqual(note.interval('dd4'), samantha.note('Bbb,'));
    },

    'Diminished fourth': function(note) {
      assert.deepEqual(note.interval('d4'), samantha.note('Bb,'));
    },

    'Perfect fourth': function(note) {
      assert.deepEqual(note.interval('P4'), samantha.note('B,'));
    },

    'Augmented fourth': function(note) {
      assert.deepEqual(note.interval('A4'), samantha.note('B#,'));
    },

    'Doubly augmented fourth': function(note) {
      assert.deepEqual(note.interval('AA4'), samantha.note('Bx,'));
    },

    'Doubly diminished fifth': function(note) {
      assert.deepEqual(note.interval('dd5'), samantha.note('Cb'));
    },

    'Diminished fifth': function(note) {
      assert.deepEqual(note.interval('d5'), samantha.note('C'));
    },

    'Perfect fifth': function(note) {
      assert.deepEqual(note.interval('P5'), samantha.note('C#'));
    },

    'Augmented fifth': function(note) {
      assert.deepEqual(note.interval('A5'), samantha.note('Cx'));
    },

    'Doubly diminished sixth': function(note) {
      assert.deepEqual(note.interval('dd6'), samantha.note('Dbb'));
    },

    'Diminished sixth': function(note) {
      assert.deepEqual(note.interval('d6'), samantha.note('Db'));
    },

    'Minor sixth': function(note) {
      assert.deepEqual(note.interval('m6'), samantha.note('D'));
    },

    'Major sixth': function(note) {
      assert.deepEqual(note.interval('M6'), samantha.note('D#'));
    },

    'Augmented sixth': function(note) {
      assert.deepEqual(note.interval('A6'), samantha.note('Dx'));
    },

    'Doubly diminished seventh': function(note) {
      assert.deepEqual(note.interval('dd7'), samantha.note('Ebb'));
    },

    'Diminished seventh': function(note) {
      assert.deepEqual(note.interval('d7'), samantha.note('Eb'));
    },

    'Minor seventh': function(note) {
      assert.deepEqual(note.interval('m7'), samantha.note('E'));
    },

    'Major seventh': function(note) {
      assert.deepEqual(note.interval('M7'), samantha.note('E#'));
    },

    'Augmented seventh': function(note) {
      assert.deepEqual(note.interval('A7'), samantha.note('Ex'));
    },

    'Doubly diminished octave': function(note) {
      assert.deepEqual(note.interval('dd8'), samantha.note('Fb'));
    },

    'Diminished octave': function(note) {
      assert.deepEqual(note.interval('d8'), samantha.note('F'));
    },

    'Perfect octave': function(note) {
      assert.deepEqual(note.interval('P8'), samantha.note('F#'));
    },

    'Augmented octave': function(note) {
      assert.deepEqual(note.interval('A8'), samantha.note('Fx'));
    },

    'Minor ninth': function(note) {
      assert.deepEqual(note.interval('m9'), samantha.note('G'));
    },

    'Major ninth': function(note) {
      assert.deepEqual(note.interval('M9'), samantha.note('G#'));
    },

    'Minor tenth': function(note) {
      assert.deepEqual(note.interval('m10'), samantha.note('A'));
    },

    'Major tenth': function(note) {
      assert.deepEqual(note.interval('M10'), samantha.note('A#'));
    },

    'Perfect eleventh': function(note) {
      assert.deepEqual(note.interval('P11'), samantha.note('B'));
    },

    'Diminished twelfth': function(note) {
      assert.deepEqual(note.interval('d12'), samantha.note('c'));
    },

    'Perfect twelfth': function(note) {
      assert.deepEqual(note.interval('P12'), samantha.note('c#'));
    },

    'Minor thirteenth': function(note) {
      assert.deepEqual(note.interval('m13'), samantha.note('d'));
    },

    'Major thirteenth': function(note) {
      assert.deepEqual(note.interval('M13'), samantha.note('d#'));
    },

    'Minor fourteenth': function(note) {
      assert.deepEqual(note.interval('m14'), samantha.note('e'));
    },

    'Major fourteenth': function(note) {
      assert.deepEqual(note.interval('M14'), samantha.note('e#'));
    },

    'Doubly diminished second up': function() {
      assert.deepEqual(samantha.note('e').interval(samantha.note('fbb')),
          samantha.interval('dd2'));
    },

    'Doubly diminished second down': function() {
      assert.deepEqual(samantha.note('f').interval(samantha.note('ex')),
          samantha.interval('dd-2'));
    }
  },

  'Interval descending': {
    'A major third down from E4': function() {
      assert.deepEqual(samantha.note('E4').interval('M-3'), samantha.note('C4'));
    },

    'Minor second down from C2': function() {
      assert.deepEqual(samantha.note('C2').interval('m-2'), samantha.note('B1'));
    },

    'A diminished fifth down from Eb5': function() {
      assert.deepEqual(samantha.note('Eb5').interval('d-5'), samantha.note('A4'));
    },

    'A major ninth down from G#4': function() {
      assert.deepEqual(samantha.note('G#4').interval('M-9'), samantha.note('F#3'));
    },

    'An augmented sixth down from Bb4': function() {
      assert.deepEqual(samantha.note('Bb4').interval('A-6'), samantha.note('Dbb4'));
    }
  },

  'Interval inversions': {
    'Invert m2 is M7': function() {
      assert.equal(samantha.interval.invert('m2'), 'M7');
    },

    'Invert M2 is m7': function() {
      assert.equal(samantha.interval.invert('M2'), 'm7');
    },

    'Invert m3 is M6': function() {
      assert.equal(samantha.interval.invert('m3'), 'M6');
    },

    'Invert M3 is m6': function() {
      assert.equal(samantha.interval.invert('M3'), 'm6');
    },

    'Invert P4 is P5': function() {
      assert.equal(samantha.interval.invert('P4'), 'P5');
    },

    'Invert A5 is d4': function() {
      assert.equal(samantha.interval.invert('A5'), 'd4');
    }
  },

  'Interval base': {
    'Base of d5 is a fifth': function() {
      assert.equal(samantha.interval('d5').base(), 'fifth');
    },

    'Base of A7 is a seventh': function() {
      assert.equal(samantha.interval('A7').base(), 'seventh');
    },

    'Base of m2 is a second': function() {
      assert.equal(samantha.interval('m2').base(), 'second');
    },

    'Base of M6 is a sixth': function() {
      assert.equal(samantha.interval('M6').base(), 'sixth');
    },

    'Base of dd8 is an octave': function() {
      assert.equal(samantha.interval('dd8').base(), 'octave');
    },

    'Base of AA4 is a fourth': function() {
      assert.equal(samantha.interval('AA4').base(), 'fourth');
    },

    'Base of d-5 is a fifth': function() {
      assert.equal(samantha.interval('d-5').base(), 'fifth');
    },

    'Base of m-9 is a second': function() {
      assert.equal(samantha.interval('m-2').base(), 'second');
    },

    'Base of M-13 is a sixth': function() {
      assert.equal(samantha.interval('M-13').base(), 'sixth');
    },

    'Base of P-11 is a fourth': function() {
      assert.equal(samantha.interval('P-11').base(), 'fourth');
    },

    'Base of AA-7 is a seventh': function() {
      assert.equal(samantha.interval('AA-7').base(), 'seventh');
    }
  },

  'Compound Intervals': {
    'A major seventeenth is a compound interval': function() {
      assert.equal(samantha.interval('M17').isCompound(), true);
    },

    'A major seventeenth\'s simple part is a major third': function() {
      assert.equal(samantha.interval('M17').simple(), 'M3');
    },

    'A 22nd has two compound octaves': function() {
      assert.equal(samantha.interval('P22').octaves(), 2);
    },

    'A major seventh is greater than a minor seventh': function() {
      assert.equal(samantha.interval('M7').greater(samantha.interval('m7')), true);
    },

    'An augmented octave is smaller than a major ninth': function() {
      assert.equal(samantha.interval('A8').smaller(samantha.interval('M9')), true);
    },

    'A major third is equal to another major third': function() {
      assert.equal(samantha.interval('M3').equal(samantha.interval('M3')), true);
    },

    'An augmented fifth is not equal to a minor sixth': function() {
      assert.equal(samantha.interval('P5').equal(samantha.interval('m6')), false);
    },

    'The simple part of a major 23th is a major second': function() {
      assert.equal(samantha.interval('M23').simple(), 'M2');
    }
  },

  'Interval direction': {
    'A3 to C4 is up': function() {
      assert.equal(samantha.note('A3').interval(samantha.note('C4')).direction(), 'up');
    },

    'Bb5 to Bb5 is up (a unison is always up)': function() {
      assert.equal(samantha.note('Bb5').interval(samantha.note('Bb5')).direction(), 'up');
    },

    'G#4 to D4 is down': function() {
      assert.equal(samantha.note('G#4').interval(samantha.note('D4')).direction(), 'down');
    },

    'F6 to E6 is down': function() {
      assert.equal(samantha.note('F6').interval(samantha.note('E6')).direction(), 'down');
    },

    'C4 to A3 is up, w. direction set to up': function() {
      assert.equal(samantha.note('C4').interval(samantha.note('A3')).direction('up').direction(), 'up');
    },

    'A3 to C4 remains up w. direction set to up': function() {
      assert.equal(samantha.note('A3').interval(samantha.note('C4')).direction('up').direction(), 'up');
    },

    'm2 is up': function() {
      assert.equal(samantha.interval('m2').direction(), 'up');
    },

    'P11 is up': function() {
      assert.equal(samantha.interval('P11').direction(), 'up');
    },

    'P1 is up': function() {
      assert.equal(samantha.interval('P1').direction(), 'up');
    },

    'A1 is up': function() {
      assert.equal(samantha.interval('A1').direction(), 'up');
    },

    'd1 is up': function() {
      assert.equal(samantha.interval('d1').direction(), 'up');
    },

    'm-2 is down': function() {
      assert.equal(samantha.interval('m-2').direction(), 'down');
    },

    'M-17 is down': function() {
      assert.equal(samantha.interval('M-17').direction(), 'down');
    },

    'd-2 is down': function() {
      assert.equal(samantha.interval('d-2').direction(), 'down');
    },

    'dd-2 is down (although it is up)': function() {
      assert.equal(samantha.interval('dd-2').direction(), 'down');
    },

    'A-2 is down': function() {
      assert.equal(samantha.interval('A-2').direction(), 'down');
    },

    'd-1 is up (all unison values are up)': function() {
      assert.equal(samantha.interval('d-1').direction(), 'up');
    },

    'A-1 is up (all unison values are up)': function() {
      assert.equal(samantha.interval('A-1').direction(), 'up');
    }
  }
}).export(module);
