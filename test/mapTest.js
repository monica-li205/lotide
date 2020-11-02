const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + 's');
const results3 = map(words, word => word += 'cat')

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'grounds', 'controls', 'tos', 'majors', 'toms' ]);
assertArraysEqual(results3, [ 'groundcat', 'controlcat', 'tocat', 'majorcat', 'tomcat' ]);
