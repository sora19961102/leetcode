/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    removedAlphanumeric = s.replace(/[^a-zA-Z0-9]/g, '');
    lowerCase = removedAlphanumeric.toLowerCase();
    string = Array.from(lowerCase);

    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        const start = string[i];
        const end = string[string.length - i - 1];

        if (start !== end) {
            return false;
        }
    }

    return true;
};