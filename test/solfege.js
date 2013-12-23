//vows: async testing lib
var vows = require('vows'),
    assert = require('assert'),
    samantha = require('../dist/samantha.js');

vows.describe('Solfege').addBatch({
  'C in C minor': function() {
    var note = samantha.note('c');
    assert.equal(note.solfege(samantha.scale(note, 'minor')), 'do');
  },

  'A in d major': function() {
    var note = samantha.note('a');
    var tonic = samantha.note('d');
    assert.equal(note.solfege(samantha.scale(tonic, 'major')), 'so');
  },

  'F# in B major': function() {
    var note = samantha.note('f#');
    var tonic = samantha.note('B');
    assert.equal(note.solfege(samantha.scale(tonic, 'major')), 'so');
  },

  'C4 in C4 minor': function() {
    var note = samantha.note('c4');
    var scale = samantha.scale(note, 'minor');
    assert.equal(note.solfege(scale, true), 'do');
  },

  'A3 in D4 major': function() {
    var note = samantha.note('a3');
    var scale = samantha.scale('d4', 'major');
    assert.equal(note.solfege(scale, true), 'so,');
  },

  'F#6 in B5 major': function() {
    var note = samantha.note('f#6');
    var scale = samantha.scale('b5', 'major');
    assert.equal(note.solfege(scale, true), 'so');
  },

  'F2 in E6 phrygian': function() {
    var note = samantha.note('f2');
    var scale = samantha.scale('e6', 'phrygian');
    assert.equal(note.solfege(scale, true), 'ra,,,,');
  },

  'Eb10 in E8 dorian': function() {
    var note = samantha.note('eb10');
    var scale = samantha.scale('e8', 'dorian');
    assert.equal(note.solfege(scale, true), 'de\'\'');
  },

  'A#6 in Bb4 locrian': function() {
    var note = samantha.note('A#6');
    var scale = samantha.scale('Bb4', 'locrian');
    assert.equal(note.solfege(scale, true), 'tai\'');
  },

  'E2 in C3 major': function() {
    var note = samantha.note('e2');
    var scale = samantha.scale('c3', 'major');
    assert.equal(note.solfege(scale, true), 'mi,');
  }
}).export(module);
