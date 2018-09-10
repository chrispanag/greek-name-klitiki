/**
 * greek-name-klitiki
 * 
 * @module greek-name-klitiki
 * @author Christos Panagiotakopoulos <chrispanag@gmail.com>
 * @copyright Copyright(c) 2018 Christos Panagiotakopoulos
 * @license MIT
 * 
 */

const Hypher = require('hypher');
const greek = require('hyphenation.el-monoton');

const h = new Hypher(greek);

/**
 * Checks if a syllable is accented
 * @param {string} string 
 * @returns {boolean}
 */
function isAccented(string) {
    const accentedCharacters = ['ά', 'έ', 'ή', 'ί', 'ό', 'ύ', 'ώ']; 

    for (char of accentedCharacters)
            if (string.indexOf(char) > -1 || string.indexOf(char.toUpperCase()) > -1) 
                return true;

    return false;
}

/**
 * Categorizes a word depending to the syllable that is accented
 * @param {string} word 
 * @returns {string|false} Returns 'LIG', 'PAR' or 'PRO' depending on where the accent is. If the word is not accented it returns 'false'
 */
function accentCategorization(word) {
    const hyphenated = h.hyphenate(word);
    const syllableNum = hyphenated.findIndex(s => isAccented(s));
    
    // This word is not accented
    if (syllableNum == -1)
        return false;

    // Λήγουσα - (eg: Πηγή)
    if (syllableNum == (hyphenated.length - 1) && !isAccented(word[0])) 
        return 'LIG';

    // Παραλήγουσα - (eg: Χρήστος)
    if (syllableNum == (hyphenated.length - 2)) 
        return 'PAR';
    
    // Προπαραλήγουσα - (eg: Αλέξανδρος)
    return 'PRO';
}

/**
 * Transforms a word to its vocative form (currently works best with names)
 * @example 
 * // returns "Χρήστο"
 * klitiki("Χρήστος")
 * @param {string} word
 * @param {boolean} onlyUppercase
 * @returns {string} - The Vocative of the word
 */
function klitiki(word, onlyUppercase = true) {
    if (!(word[0].toUpperCase() == word[0]) && onlyUppercase) {
        console.log("Not a name");
        return word;
    }

    // Αρσενικά σε -ας / ης (eg: Επαμεινώνδας, Αναστάσης)
    if (word.endsWith('ας') || word.endsWith('άς') || word.endsWith('ης') || word.endsWith('ής'))
        return word.slice(0, word.length - 1);

    // Αρσενικά σε -ος
    if (!word.endsWith('ος') && !word.endsWith('ός')) 
        return word;

    // Αρσενικά σε -ιος (Αναστάσιος, Γεώργιος, Γρηγόριος)
    if (word.endsWith('ιος')) 
        return word.slice(0, word.length - 2) + 'ε';;

    const category = accentCategorization(word);
    
    if (category == 'LIG') 
        return word.slice(0, word.length - 2) + 'ό';    // Νικολός -> Νικολό
    if (category == 'PAR') 
        return word.slice(0, word.length - 1);          // Χρήστος -> Χρήστο
    if (category == 'PRO') 
        return word.slice(0, word.length - 2) + 'ε';    // Αλέξανδρος -> Αλέξανδρε

    // If it ends in -ος and it doesn't have an accent :/
    return word;
}

module.exports = klitiki;