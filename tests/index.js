/**
 * greek-name-klitiki
 * 
 * @module greek-name-klitiki
 * @author Christos Panagiotakopoulos <chrispanag@gmail.com>
 * @copyright Copyright(c) 2018 Christos Panagiotakopoulos
 * @license MIT
 * 
 */

// TODO: These tests will be improved soon by adding a testing framework (such as Mocha)

const assert = require('assert');
const klitiki = require('..');

assert(klitiki("Γιώργος") == "Γιώργο");
assert(klitiki("Γεώργιος") == "Γεώργιε");
assert(klitiki("Γιώργο") == "Γιώργο");
assert(klitiki("Χρήστος") == "Χρήστο");
assert(klitiki("Παναγιώτης") == "Παναγιώτη");
assert(klitiki("Παναγιωτακόπουλος") == "Παναγιωτακόπουλε");
assert(klitiki("Σίσσυ") == "Σίσσυ");
assert(klitiki("Νικολός") == "Νικολό");
assert(klitiki("νικολός") == "νικολός");
assert(klitiki("Νικόλας") == "Νικόλα");
assert(klitiki("Νικόλαος") == "Νικόλαε");
assert(klitiki("Νίκος") == "Νίκο");
assert(klitiki("Λάκης") == "Λάκη");
assert(klitiki("Αναστάσιος") == "Αναστάσιε");
assert(klitiki("Αναστάσης") == "Αναστάση");
assert(klitiki("Αυγουστίνος") == "Αυγουστίνε");
assert(klitiki("Ναπολέων") == "Ναπολέοντα"); //this is a very tricky one, maybe needs a rule for -έων 
assert(klitiki("Ναπολέοντας") == "Ναπολέοντα");
assert(klitiki("Πλάτων") == "Πλάτωνα");
assert(klitiki("Πλάτωνας") == "Πλάτωνα");
assert(klitiki("Ιουστινιανός") == "Ιουστινιανέ");
assert(klitiki("Ίρις") == "Ίριδα"); //these female -ις names are actually a bit tricky, might remain the same in klitiki or change to -ιδα, depending on how formal/old greek you are using
assert(klitiki("Σαπφώ") == "Σαπφώ");
assert(klitiki("Ραχήλ") == "Ραχήλ");


