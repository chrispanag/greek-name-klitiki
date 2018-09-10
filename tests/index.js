const assert = require('assert');
const klitiki = require('..');

assert(klitiki("Γιώργος") == "Γιώργο");
assert(klitiki("Γιώργο") == "Γιώργο");
assert(klitiki("Χρήστος") == "Χρήστο");
assert(klitiki("Παναγιώτης") == "Παναγιώτη");
assert(klitiki("Παναγιωτακόπουλος") == "Παναγιωτακόπουλε");
assert(klitiki("Σίσσυ") == "Σίσσυ");
assert(klitiki("Νικολός") == "Νικολό");
assert(klitiki("νικολός") == "νικολός");
assert(klitiki("Αναστάσιος") == "Αναστάσιε");
assert(klitiki("Αναστάσης") == "Αναστάση");
