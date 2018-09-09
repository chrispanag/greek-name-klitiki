const Hypher = require('hypher');
const greek = require('hyphenation.el-monoton');

const h = new Hypher(greek);

/**
 * 
 * @param {string} word 
 * @returns {string|false}
 */
function accentCategorization(word) {
    const hyphenated = h.hyphenate(word);
    const syllableNum = hyphenated.findIndex(s => isAccented(s));

    if (syllableNum == -1)
        return false;

    if (syllableNum == (hyphenated.length - 1) && !isAccented(word[0])) 
        return 'LIG';
    if (syllableNum == (hyphenated.length - 2)) 
        return 'PAR';
    
    return 'PRO';
}

/**
 * 
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
 * 
 * @param {string} word 
 * @returns {string} - The Klitiki of the string
 */
function klitiki(word) {
    if (!(word[0].toUpperCase() == word[0])) {
        console.log("Not a name");
        return string;
    }

    // Αρσενικά σε -ας / ης
    if (word.endsWith('ας') || word.endsWith('άς') || word.endsWith('ης') || word.endsWith('ής'))
        return word.slice(0, word.length - 1);

    // Αρσενικά σε -ος
    if (!word.endsWith('ος') && !word.endsWith('ός')) 
        return word;

    const category = accentCategorization(word);
    if (category == 'LIG') 
        return word.slice(0, word.length - 2) + 'ό';
    if (category == 'PAR') 
        return word.slice(0, word.length - 1);
    if (category == 'PRO') 
        return word.slice(0, word.length - 2) + 'ε';
}

module.exports = klitiki;